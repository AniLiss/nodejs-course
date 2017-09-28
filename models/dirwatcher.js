'use strict';
const EventEmitter = require('events');
const emitter = new EventEmitter();

const fs = require('fs');

var filePath = ('./data/MOCK_DATA.csv');
//var file = fs.readFileSync(filePath);

//console.log('Initial File content : ' + file);

class DirWatcher extends EventEmitter {

    constructor(filePath, delay) {
        super(filePath, delay)

        this.path = filePath;
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