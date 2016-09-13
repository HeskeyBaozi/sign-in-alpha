'use strict';

import UserModel from './storage.js';

const init = async() => {
    let result = await UserModel.find({}).exec();
    if (result.length === 0) {
        await new UserModel({
            username: 'Sakura',
            password: 'xiaojiba',
            sid: '16338888',
            email: 'fuxk@gmail.com',
            phone: '13512345678'
        }).save();
    }
};

export default init;