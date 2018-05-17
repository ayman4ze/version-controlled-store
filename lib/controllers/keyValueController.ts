import * as mongoose from 'mongoose';
import { KeySchema } from '../models/keyModel';
import { ValueSchema } from '../models/ValueModel';
import { Request, Response } from 'express';

const Key = mongoose.model('Key', KeySchema);
const Value = mongoose.model('Value', ValueSchema);

export class KeyValueController {
    
    public testApp(req: Request, res: Response) {
        res.send({"message":"GET request successfull"});
    }

    public async addNewKeyValue(req: Request, res: Response) {

        if (Object.keys(req.body).length == 0) {
            res.status(400).send("{\"key\" : \"value\"} pair is required");
            return;
        }

        let reqKey: string = Object.keys(req.body)[0];
        let reqValue: string = req.body[reqKey];

        try {
            let dbKey = await Key.findOne({ "key": reqKey });
            if (!dbKey) {
                //key not exist.
                dbKey = await new Key({ "key": reqKey }).save();
            }
            let newValue = await new Value({ keyId: dbKey._id, value: reqValue }).save();

            res.status(201).send({ "key": dbKey.key, "value": newValue.value, "timestamp": newValue.created_date });
        } catch (err) {
            if (err.name == "ValidationError") {
                res.status(400).send(err.message);
            } else {
                res.status(500).send(err);
            }
        }
    }

    public async getValueByKey(req: Request, res: Response) {

        let timestamp;
        let notFoundErrMsg: string;

        if (req.query.timestamp) {
            timestamp = req.query.timestamp;
            notFoundErrMsg = "no value associated with key at this time";
        } else {
            timestamp = Math.floor(new Date().getTime() / 1000);
            notFoundErrMsg = "no value associated with key";
        }

        try {
            let dbKey = await Key.findOne({ "key": req.params.key });
            if (!dbKey) {
                //key not exist.
                res.status(404).send("key not exist.");
                return;
            }

            let dbValue = await Value.find({ keyId: dbKey._id, created_date: { $lte: timestamp } }).sort({ "created_date": -1 }).limit(1);
            if (dbValue.length == 0) {
                res.status(404).send(notFoundErrMsg);
            } else {
                res.status(200).send({ "value": dbValue[0].value });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }
}