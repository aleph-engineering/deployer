/**
 * Created by refucktor on 2/7/16.
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema;

var BasicProfileEntity = new Schema({
    className :   { type: String },
    userId :      { type: String },
    firstName :   { type: String },
    headline :    { type: String },
    lastName :    { type: String },
    summary :     { type: String },
    industry :    { type: String },
    version :     { type: Number }
});

var StatSchema = new Schema({
    time        : { type: Number },
    interf      : { type: String },
    tx_bytes    : { type: Number },
    rx_bytes    : { type: Number },
    tx_rate     : { type: Number },
    rx_rate     : { type: Number },
    date        : { type: Date}
});

var CrashLogSchema = new Schema({
    date        : { type: Date, default: new Date()},
    text         : { type: String }
});

module.exports = {
    Stat : mongoose.model('BasicProfileEntity', StatSchema),
    CrashLog : mongoose.model('CrashLog', CrashLogSchema)
};
