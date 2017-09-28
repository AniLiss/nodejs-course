/**
 * Created by elizaveta_anackaya on 27/09/2017.
 */
'use strict';
const fileChange = require('dirwatcher');

class Importer {

    import(){
        fileChange.on('fileChanged', () => {
            console.log('I have listened to the event - the file was changed!');
        })
    }

}

module.exports = Importer;