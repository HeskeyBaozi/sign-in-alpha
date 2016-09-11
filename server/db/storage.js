'use strict';

import User from '../db/models/user.js';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/sign-in-alpha');

const init = async()=> {

    let users = await User.find({}).exec();
    if (users.length !== 0)
        return;

    await new User({
        username: '小红',
        email: 'xiaohong@bb.com',
        password: 'xiaohong',
        sid: '15330000',
        phone: '13588990099'
    }).save();

    await new User({
        username: '小蓝',
        email: 'xiaolan@bb.com',
        password: 'xiaolan',
        sid: '15330001',
        phone: '13588990090'
    }).save();
    console.log('数据库初始化成功');
};

export default init;