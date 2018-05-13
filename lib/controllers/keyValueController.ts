import * as mongoose from 'mongoose';
import { KeySchema } from '../models/keyModel';
import { ValueSchema } from '../models/ValueModel';
import { Request, Response } from 'express';

const Key = mongoose.model('Key', KeySchema);
const Value = mongoose.model('Value', ValueSchema);

export class KeyValueController {

    public async addNewKeyValue(req: Request, res: Response) {     
        res.status(200).send("addNewKeyValue");  
    }

    public async getValueByKey(req: Request, res: Response) {   
        res.status(200).send("getValueByKey");      
    }
}