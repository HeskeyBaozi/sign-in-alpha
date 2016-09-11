'use strict';

import mongoose from 'mongoose';


mongoose.Promise = global.Promise;
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    sid: String,
    phone: String
});

userSchema.methods.displayInfo = function () {
    let s = '';
    for (let key in this) {
        s += key + ': ' + this[key] + '\n';
    }
    return s;
};

const User = mongoose.model('User', userSchema);
export default User;