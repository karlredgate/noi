
module.exports = CustomRule;;

const util = require('util');
const EventEmitter = require('events').EventEmitter;
const EdgeGrid = require('EdgeGrid');
const base = "/appsec-resource/v1/";
const config_base = "/appsec-resource/v1/configs/";

function activation_path( id ) {
    return base + 'activatations/' + id;
}

function config_path( configId, suffix ) {
    var path = config_base + configId;
    if ( typeof suffix !== 'undefined' )  path += '/' + suffix;
    return path;
}

function config_version_path( configId, versionId, suffix ) {
    var path = config_base + configId + '/versions/' + versionId;
    if ( typeof suffix !== 'undefined' )  path += '/' + suffix;
    return path;
}

function CustomRule( configId, versionId ) {
    this.configId = configId;
    this.versionId = versionId;

    this.path = base + 'configs/' + configId;
    if ( typeof versionId !== 'undefined' ) {
        this.path += '/versions/' + versionId;
    }
}

module.exports.rules = function ( configId, callback ) {
    console.log( 'faked list configs' );
    EdgeGrid.get( config_path(configId, 'custom-rules'), callback ).end();
};

/*
 * List config versions
 */
module.exports.rule = function (configId, ruleId, callback) {
    var path = config_base + configId + '/custom-rules/' + ruleId;
    EdgeGrid.get( path, callback ).end();
};

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
