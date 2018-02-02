
module.exports = TrafficMgmt;

const EdgeGrid = require('rededgegrid');
const base = "/config-gtm/v1/";

function TrafficMgmt() {
}

module.exports.identity = function ( callback ) {
    var path = base + "identity";
    EdgeGrid.get( path, callback ).end();
};

module.exports.contracts = function ( callback ) {
    var path = base + "identity/contracts";
    EdgeGrid.get( path, callback ).end();
};

module.exports.groups = function ( callback ) {
    var path = base + "identity/groups";
    EdgeGrid.get( path, callback ).end();
};

module.exports.domains = function ( callback ) {
    var path = base + "domains/";
    EdgeGrid.get( path, callback ).end();
};

module.exports.domain = function ( id, callback ) {
    var path = base + "domains/" + id;
    EdgeGrid.get( path, callback ).end();
};

module.exports.data_centers = function ( id, callback ) {
    var path = base + "domains/" + id + "/datacenters";
    EdgeGrid.get( path, callback ).end();
};

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
