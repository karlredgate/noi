
module.exports = NetworkList;

const EdgeGrid = require('EdgeGrid');
const base = "/network-list/v1/";

function NetworkList() {
}

module.exports.list = function ( callback ) {
    var path = base + "network_lists";
    EdgeGrid.get( path, callback );
}

module.exports.fetch = function ( id, callback ) {
    var path = base + "network_lists/" + id;
    EdgeGrid.get( path, callback );
}

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
