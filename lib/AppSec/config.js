
module.exports = AppSecConfig;;

const util = require('util');
const EventEmitter = require('events').EventEmitter;
const EdgeGrid = require('EdgeGrid');
const base = "/appsec-configuration/v1/";
const config_base = "/appsec-configuration/v1/configs/";

function activation_path( id ) {
    return base + 'activatations/' + id;
}

function config_version_path( configId, versionId, suffix ) {
    var path = config_base + configId + '/versions/' + versionId;
    if ( typeof suffix !== 'undefined' )  path += '/' + suffix;
    return path;
}

function AppSecConfig() {
}

module.exports.list = function () {
    console.log( 'faked list configs' );
};

/*
 * Not yet defined
 */
module.exports.configs = function ( callback ) {
    EdgeGrid.get( base + 'configs', callback ).end();
};

/*
 * List config versions
 */
module.exports.versions = function (configId) {
    var path = config_base + configId + '/versions';
    EdgeGrid.get( path, callback ).end();
};

/*
 * Fetch a specific version of a configuration.
 */
module.exports.version = function (configId, versionId) {
    var path = config_version_path( configId, versionId );
    EdgeGrid.get( path, callback ).end();
};

/*
 */
module.exports.version_notes = function (configId, versionId) {
    var path = config_version_path( configId, versionId, 'version-notes' );
    EdgeGrid.get( path, callback ).end();
};

/*
 */
module.exports.update_version_notes = function (configId, versionId, notes) {
    var data = {
        "configId": configId, // This should not be required
        "version": versionId, // This should not be required
        "versionNotes": notes
    };
    var path = config_version_path( configId, versionId, 'version-notes' );
    var request = EdgeGrid.put( path, callback );
    request.end( JSON.stringify(data) );
};

/* 
 * /appsec-configuration/v1/configs/{configId}/versions/{versionNumber}/activations method: POST
 */
module.exports.activate = function (options) {
    var configId = options.config;
    var versionId = options.version;
    var env = options.env || 'STAGING';
    var notes = options.notes || 'Activating on ' + env + ' from CLI';
    var notify = options.notify || ['nomail@akamai.com'];

    // check env validity
    var data = {
        "action": "ACTIVATE",
        "network": env,
        "method": "FAST",
        "notes": notes,
        "notificationEmails": notify,
        "subscribeSharedList": false
    }
    var path = base + configId + '/versions/' + versionId + '/activations';
    var request = EdgeGrid.put( path, callback );
    request.end( JSON.stringify(data) );
};

/*
 * You should only need the activation ID
 */
module.exports.activation = function (id) {
    var path = base + 'activations/' + id;
    EdgeGrid.get( path, callback ).end();
};

/*
 */
module.exports.cancel = function (id) {
    var data = {
        'action': 'cancel'
    };
    var request = EdgeGrid.put( activation_path(id), callback );
    request.end( JSON.stringify(data) );
};

/*
 * This should be "rollback" not fallback.
 * It is currently spec as an empty POST to a verb URI, it should be
 * a JSON POST to a noun API.
 */
module.exports.rollback = function (configId, versionId, notes) {
    var data = {
        "configId": configId, // This should not be required
        "version": versionId, // This should not be required
        "versionNotes": notes
    };
    var path = base + 'configs/' + configId + '/versions/' + versionId + '/version-notes';
    var request = EdgeGrid.put( path, callback );
    request.end( JSON.stringify(data) );
};

// /appsec-configuration/v1/configs/{configId}/activations GET (need in future for activation history page)
// /appsec-configuration/v1/configs/{configId}/activations/{activationId} GET
// /appsec-configuration/v1/configs/{configId}/activations/{activationId}/cancel POST
// /appsec-configuration/v1/configs/{configId}/activations/{activationId}/fallback POST
// /appsec-configuration/v1/configs/{configId}/versions/{version}/activations/latest GET
// /appsec-configuration/v1/configs/{configId}/versions/{version}/host-move-request GET
// /appsec-configuration/v1/configs/{configId}/versions/{versionNumber}/used-networkList GET

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
/* vim: set autoindent expandtab sw=4 syntax=javascript: */
