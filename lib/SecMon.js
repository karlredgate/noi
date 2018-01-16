
module.exports = SIEM;

const EdgeGrid = require('EdgeGrid');
const base = '/security-monitor/v1/';

function SIEM() {
}

module.exports.report_packs = function ( callback ) {
    var path = base + 'report-packs';
    EdgeGrid.get( path, callback ).end();
}

module.exports.report_pack = function ( id, callback ) {
    var path = base + 'report-packs/' + id;
    EdgeGrid.get( path, callback ).end();
}

module.exports.data_stores = function ( id, callback ) {
    var path = base + 'report-packs/' + id + '/data-stores';
    EdgeGrid.get( path, callback ).end();
}

module.exports.data_store = function ( packId, storeId, callback ) {
    var path = base + 'report-packs/' + packId + '/data-stores/' + storeId;
    EdgeGrid.get( path, callback ).end();
}

module.exports.data_sources = function ( id, callback ) {
    var path = base + 'report-packs/' + id + '/data-sources';
    EdgeGrid.get( path, callback ).end();
}

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
