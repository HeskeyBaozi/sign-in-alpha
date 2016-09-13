'use strict';
import mongoose from 'mongoose';

/**
 * config Promise
 * @type {Function}
 */
mongoose.Promise = global.Promise;
const db = mongoose.createConnection('mongodb://localhost:27017/sign-in-alpha-v1');

db.on('error', (e) => {
    console.error('There are something wrong: ', e);
});

db.once('open', () => {
    console.log('succeed to connect!');
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, {
    safe: true
});

const UserModel = db.model('User', UserSchema);

export default UserModel;

