'use strict';

import {Store} from 'koa-session2';

export default class MemoryStore extends Store {
    constructor() {
        super();
        this._memory = {};
    }

    async get(sid) {
        console.log('现在内存有: ', this._memory, '当前处理sid', sid);
        return await new Promise((resolve, reject)=> {
            resolve(this._memory[sid]);
        });
    }

    async set(session, opts) {

        if (typeof opts.sid === 'undefined') {
            opts.sid = this.getID(10);
        }
        await new Promise((resolve, reject)=> {
            this._memory[opts.sid] = session;
            resolve();
        });
        console.log('现在内存有: ', this._memory, '当前处理opts', opts, '处理session', session);
        return opts.sid;
    }

    async destroy(sid) {
        console.log('现在内存有: ', this._memory, '当前处理sid', sid);
        return await new Promise((resolve, reject)=> {
            this._memory[sid] = null;
            resolve(sid);
        });
    }
};