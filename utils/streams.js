const minimist = require('minimist');
const fs = require('fs');
const https = require('https');
const through = require('through2');
const parceSync = require('csv-parse/lib/sync');
const currentArg = process.argv[2];
const filePath = ('data/MOCK_DATA.csv');
const request = require('request');


if(process.argv.length === 2) {
    printErrorMessage();
}

switch (currentArg) {
    case '--help':
    case '-h':
        printHelpMessage();
        break;

    case '-io': 
        inputOutput();
        break;

    case '-transform':
        transform();
        break;
    
    case '-ttj':
    transformToJson();
        break;

    case '-wtj':
    writeToJson();
        break;

    case '-bundle':
    bundleCss();
        break;
}

function printHelpMessage() {
   console.log('Help!')

}

function printErrorMessage() {
    console.log('Error!')
}

function inputOutput() {
    var readStream = new fs.createReadStream(filePath);
  
    readStream.on('readable', function () {
        var data = readStream.read();
        if(data != null) {
            console.log(data.toString());
        }
    });

    
}

function transform() {
    fs.createReadStream(filePath).pipe(through(
        function(chunk) {
        console.log(chunk.toString().toUpperCase());
    }))
}

function transformToJson() {
    fs.createReadStream(filePath).pipe(through(
        function(chunk) {
            const result = parceSync(chunk, {auto_parse: true});
            console.log('sync', result);
            return result
    }))
}



function writeToJson(){
    fs.createReadStream(filePath).pipe(through(
        function(chunk) {
            const result = parceSync(chunk, {auto_parse: true});
            this.push(JSON.stringify(result, null, 4))
    }))
    .pipe(fs.createWriteStream('data/MOCK_DATA.json'));
}

function bundleCss (dirname) {

    const readFiles = (dirname) => {

        const readDirPr = new Promise( (resolve, reject) => {
            fs.readdir(dirname,
                (err, filenames) => (err) ? reject(err) : resolve(filenames))
        });

        return readDirPr.then( filenames => Promise.all(filenames.map((filename) => {
            return new Promise ( (resolve, reject) => {
                fs.readFile(dirname + filename, 'utf-8',
                    (err, content) => (err) ? reject(err) : resolve(content));
            })
        })).catch( error => Promise.reject(error)))
    };

    readFiles('./styles/')
        .then( allContents => {

            fs.appendFile('./styles/style.css', allContents.join(' '), function(err) {
                if (err) throw err;
            });

        })
        .then(allContents => {
        request('https://www.epam.com/etc/clientlibs/foundation/main.min.fc69c13add6eae57cd247a91c7e26a15.css', function(req, res, data) {
            fs.appendFile('./styles/style.css', data.toString().replace(/\n|\r/g,' '), function(err) {
                if (err) throw err;
            });
        })}), error => console.log(error);
}
