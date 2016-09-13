'use strict';

import UserModel from '../db/storage.js';
import init from '../db/init.js';
/**
 * init MongoDB
 */
init();


/**
 * RESTful api :)
 */
import RouterClass from 'koa-router';

const router = new RouterClass({
    prefix: '/v1'
});

const M = {
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE'
};

class serverResponse {
    constructor(msg, value) {
        this.msg = msg || M.FAILURE;
        this.value = value;
    }
}

/**
 * register or create a user
 */
router.post('/users', async(ctx, next) => {
    let result = undefined;
    try {
        result = await new UserModel(ctx.request.body).save();
    } catch (e) {
        ctx.body = new serverResponse(M.FAILURE, e);
        return next();
    }
    ctx.body = new serverResponse(M.SUCCESS, result);
    return next();
});

/**
 * query the detail of the user
 */
router.get('/users/:username', async(ctx, next) => {
    let result = undefined;
    try {
        result = await UserModel.findOne({username: ctx.params.username}).exec();
    } catch (e) {
        ctx.body = new serverResponse(M.FAILURE, e);
        return next();
    }
    if (result === null) {
        ctx.body = new serverResponse(M.FAILURE, result);
    } else
        ctx.body = new serverResponse(M.SUCCESS, result);
    return next();
});


export default router;