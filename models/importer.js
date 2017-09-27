/**
 * Created by elizaveta_anackaya on 27/09/2017.
 */
'use strict';
const EventEmitter = require('events');

class Importer {

    import(){
        EventEmitter.on('eventHappened', () => {
            console.log('I have listened to the event');
        })
    }

}

module.exports = Importer;