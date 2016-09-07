'use strict';
import RouterClass from 'koa-router';

const router = new RouterClass();

router.post('/login', async(ctx, next)=> {
    if (typeof ctx.session.username === 'string') {
        ctx.body = {
            username: '已登录'
        };

    } else {
        console.log('未登录');
        ctx.session.username = ctx.request.body.username;
        ctx.session.password = ctx.request.body.password;
        ctx.body = ctx.session;
    }

    await next();
});

export default router;