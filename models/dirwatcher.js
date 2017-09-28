const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

//const file = fs.readFileSync(filePath);

//console.log('Initial File content : ' + file);

class DirWatcher extends EventEmitter {

    constructor(filePath) {
        super();

        this.path = filePath;
        // this.delay = delay;
    }

    watch() {
        fs.watch(this.path, (event, filename) => {
            if (event === 'rename') {
                const fullPath = path.resolve(this.path);
                this.emit('dirwatcher:changed', fullPath);
            }
        });
    }

}

module.exports = DirWatcher;