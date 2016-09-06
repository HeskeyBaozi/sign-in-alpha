'use strict';
require('babel-register');
const app = require('../server/app.js');
const http = require('http');
const PORT = 8080;

http.createServer(app.callback()).listen(PORT);
console.log(`the server is listening at ${PORT}.`);