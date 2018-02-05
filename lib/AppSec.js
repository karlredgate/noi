
/*
 * These are speculative APIs.
 */

module.exports = AppSec;
module.exports.config = require( './AppSec/config' );

const util = require('util');
const EventEmitter = require('events').EventEmitter;
const EdgeGrid = require('rededgegrid');

function AppSec() {
}

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
