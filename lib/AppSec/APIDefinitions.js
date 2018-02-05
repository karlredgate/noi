
module.exports = APIDefinitions;

const util = require('util');
const EventEmitter = require('events').EventEmitter;
const EdgeGrid = require('rededgegrid');
const base = "/api-definitions/v2/";

function api_path( suffix ) {
    return base + suffix;
}

function APIDefinitions() {
}

module.exports.user_entitlements = function ( callback ) {
    EdgeGrid.get( api_path('user-entitlements'), callback ).end();
};

module.exports.endpoints = function ( callback ) {
    EdgeGrid.get( api_path('endpoints'), callback ).end();
};

module.exports.create_endpoint = function ( filename, callback ) {
    function send_file( data ) {
        var request = EdgeGrid.post( api_path('endpoints'), callback );
        request.end( JSON.stringify(data) );
    }
    // Need to read filename - then send - then callback the users callback
}

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
