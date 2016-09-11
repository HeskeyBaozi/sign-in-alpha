'use strict';
import RouterClass from 'koa-router';
import init from '../db/storage.js';
init();

import User from '../db/models/user.js';


const router = new RouterClass();

router.post('/login', async(ctx, next) => {
    let result = await User.find({
        username: ctx.request.body.username
    }).exec();
    if (result.length) {
        ctx.session.current = result[0];
        ctx.body = {
            type: true,
            info: result[0]
        };
    } else {
        ctx.body = {
            type: false
        };
    }

});

router.get('/detail', async(ctx, next) => {
    if (typeof ctx.session.username === 'undefined') {
        ctx.body = '对不起, 你没有登陆';
    } else {
        ctx.body = ctx.session;
    }
});

router.post('/register', async(ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
});

export default router;