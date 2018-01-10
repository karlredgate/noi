
module.exports = Events;

const EdgeGrid = require('EdgeGrid');
const base = "/event-viewer-api/v1/";

function Events() {
}

module.exports.types = function ( callback ) {
    var path = base + "event-types";
    EdgeGrid.get( path, callback ).end();
}

module.exports.events = function ( callback ) {
    var path = base + "events";
    EdgeGrid.get( path, callback ).end();
}

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
