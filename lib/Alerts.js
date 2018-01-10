
module.exports = Alerts;

const EdgeGrid = require('EdgeGrid');
const base = "/alerts/v2/";

function Alerts() {
}

module.exports.templates = function ( callback ) {
    var path = base + "alert-templates/";
    EdgeGrid.get( path, callback ).end();
};

module.exports.template = function ( templateId, callback ) {
    var path = base + "alert-templates/" + templateId;
    EdgeGrid.get( path, callback ).end();
};

module.exports.definitions = function ( callback ) {
    var path = base + "alert-definitions/";
    EdgeGrid.get( path, callback ).end();
};

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
