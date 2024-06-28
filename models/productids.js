import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productidsSchema = new Schema({
    productids: {
        require: true,
        unique: true,
        type: Number
    }
});

const productids = model('productids', productidsSchema);

export default productids;