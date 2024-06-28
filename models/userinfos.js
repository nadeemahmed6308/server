import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userinfosSchema = new Schema({
    firstname: {
        require: true,
        type: String
    },
    lastname: {
        require: true,
        type: String
    },
    userEmail: {
        require: true,
        type: String,
        unique: true
    },
    userImg: String,
    cartsIdForBasket: {
        require: true,
        type: Array
    },
    "_id": {
        require: true,
        type: String,
        unique: true 
    }
});

const userinfos = model('userinfos', userinfosSchema);

export default userinfos;