import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const KeySchema = new Schema({
    key: {
        type: String,
        required: 'Enter a key'
    }
});