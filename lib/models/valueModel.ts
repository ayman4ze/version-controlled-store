import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ValueSchema = new Schema({
    keyId: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: 'Enter a value'
    },
    created_date: {
        //MongoDB stores times in UTC by default
        type: Number,
        default: function () {
            return Math.floor(new Date().getTime() / 1000)
        }
    }
});