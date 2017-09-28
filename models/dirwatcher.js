'use strict';
const EventEmitter = require('events');
const emitter = new EventEmitter();

const fs = require('fs');

class DirWatcher {
    constructor(path, delay) {
        this.path = path;
        this.delay = delay;
    }

    watch() {
        fs.watch(this.path, (eventType, filename) => {
            if (eventType === 'change') {
                emitter.emit('fileChanged');
            };
        });
    }

}

module.exports = DirWatcher;
module.exports = emitter;