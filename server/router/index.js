'use strict';
import RouterClass from 'koa-router';

const router = new RouterClass();

router.post('/login', async(ctx, next)=> {
    ctx.body = {
        msg: 'success'
    };
    await next();
});

export default router;