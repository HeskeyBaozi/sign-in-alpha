'use strict';

import Koa  from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import c from 'koa-convert';
import router from './router';
import bodyParser from 'koa-bodyparser';


/**
 * dev
 */
import webpack from 'webpack';
import devMiddleware from 'koa-webpack-dev-middleware';
import hotMiddleware from 'koa-webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';

const compile = webpack(webpackConfig);

/**
 * path
 */
import path from 'path';
const publicPath = path.resolve(`../public`);

const app = new Koa();

app.use(logger());

// webpack hot replace
app.use(c(devMiddleware(compile), {
    noInfo: false,
    quiet: false,
    lazy: true,
    publicPath,
    headers: {"X-Custom-Header": "yes"},
    stats: {
        colors: true
    }
}));
app.use(c(hotMiddleware(compile)));

// static files
app.use(serve(publicPath));

// body parser
app.use(bodyParser());

// router
app.use(router.routes());


module.exports = app;