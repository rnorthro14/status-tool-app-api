const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Errors = new Schema({
    sg_id: {
        type: Number
    },
    sg_name: {
        type: String
    },
    esrm_errors: {
        type: Number
    }, 
    peak_start_date: {
        type: String
    },
    peak_stop_date: {
        type: String
    },
    vod_peak: {
        type: Number
    }
}, {collection: 'esrm_errors'});

module.exports = mongoose.model('Errors', Errors);