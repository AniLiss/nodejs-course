const DirWatcher = require('./dirwatcher');
const fs = require('fs');
const parse = require('csv-parse');
const parceSync = require('csv-parse/lib/sync');

class Importer extends DirWatcher {
    constructor(filePath, delay) {
        super(filePath, delay);
        this.watch();
        this.on('dirwatcher:changed', (filename) => {
            this.import(filename);
            this.importSync(filename);
        });
    }

    import(filename){
        console.log('filename: '+ filename);

        return new Promise( (resolve, reject) => {
            fs.readFile(filename, 'utf8', (err, data) => {
                if (err) reject(err);

                parse(data, {auto_parse: true}, (err, json) => {
                    resolve(json);
                    //console.log('async',json);
                    console.log('async', json.length-1);
                })
            });
        })
    }

    importSync(filename){
        const data = fs.readFileSync(filename);
        const result = parceSync(data, {auto_parse: true});
        // console.log('sync',result);
        console.log('sync', result.length-1);
        return data;

    }
}

module.exports = Importer;