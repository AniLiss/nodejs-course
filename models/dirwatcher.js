'use strict';
const EventEmitter = require('events');
const fs = require('fs');

class DirWatcher {
    constructor(path, delay) {
        this.path = path;
        this.delay = delay;
    }

    watch() {
        fs.watch(this.path, (eventType, filename) => {
            if (eventType === "change") {
                EventEmitter.emit('eventHappened');
            };
        });
    }

}

module.exports = DirWatcher;