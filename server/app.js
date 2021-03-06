'use strict';

import Koa  from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import c from 'koa-convert';
import router from './router';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session2';
import MongoStore from 'koa-generic-session-mongo';


/**
 * dev
 */
import webpack from 'webpack';
import devMiddleware from 'koa-webpack-dev-middleware';
import hotMiddleware from 'koa-webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';
//import Store from './store/memoryStore.js';

const compile = webpack(webpackConfig);


/**
 * path
 */
import path from 'path';
const publicPath = path.join(__dirname, '../public');

const app = new Koa();

// body parser
app.use(bodyParser());

app.use(logger());

// webpack hot replace
app.use(c(devMiddleware(compile), {
    noInfo: true,
    quiet: true,
    lazy: true,
    publicPath,
    headers: {"X-Custom-Header": "yes"},
    stats: {
        colors: true
    }
}));

/**
 * Hot Replace
 */
app.use(c(hotMiddleware(compile)));


// session
app.use(session({
    store: new MongoStore({
        url: 'mongodb://localhost:27017/sign-in-alpha-v1'
    }),
    maxAge: 1000 * 60 * 10
}));


// static files
app.use(serve(publicPath));

// router
app.use(router.routes());
app.use(router.allowedMethods());


module.exports = app;