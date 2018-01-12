
module.exports = SIEM;

const EdgeGrid = require('EdgeGrid');
const base = "/siem/v1/";

function SIEM() {
}

module.exports.events = function ( configId, callback ) {
    var path = base + "configs/" + configId;
    EdgeGrid.get( path, callback ).end();
}

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
