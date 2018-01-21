
/*
 * These are speculative APIs.
 */

module.exports = AppSecConfiguration;
module.exports.ConfigVersion = ConfigVersion;
module.exports.config = require( './AppSec/config' );

const util = require('util');
const EventEmitter = require('events').EventEmitter;
const EdgeGrid = require('EdgeGrid');

const base = "/appsec-configuration/v1/";

util.inherits( ConfigVersion, EventEmitter );

function AppSecConfiguration() {
}

/*
 * Creation of a config version object does not load any
 * data.  The load() method is called to retrieve the
 * configuration from the API.
 *
 * If the version_id is not provided, then the next action
 * will cause a check for the latest version and use that
 * to retrieve/set state.
 */
function ConfigVersion( config_id, version_id ) {
    this.config_id = config_id;
    this.config_path = base + '/configs/' + config_id;
    this.version_id = version_id;

    // retrieve the config version - latest if version_id undefined
    if ( typeof version_id === 'undefined' ) {
        version_id = this.latest_version_id();
    }
    this.version_path = this.config_path + '/version/' + version_id;
}

function populate_version( dto ) {
    // this should be a list of version info - extract the latest
    // what is the next callback
    // for load it should be a load of the actual ConfigVersion
    // for others it would be something else
}

function populate( dto ) {
}

/*
 */
ConfigVersion.prototype.load = function ( callback ) {
    if ( typeof version_id === 'undefined' ) {
        var request = EdgeGrid.get( this.config_path, populate_version );
        request.end();
    }
    var path = base + 'configs/' + configId + '/versions/' + versionId + '/version-notes';
    var request = EdgeGrid.put( path, callback );
    request.end();
};

ConfigVersion.prototype.latest_version_id = function () {
};

/*
 * Serialize this object as the JSON representation.
 */
ConfigVersion.prototype.toString = function () {
    return JSON.stringify( this.object );
};

ConfigVersion.prototype.refresh = function () {
    EdgeGrid.get( this.version_path ).end();
};

/*
 * Not yet defined
 */
module.exports.configs = function ( callback ) {
    var path = base + "configs";
    EdgeGrid.get( path, callback ).end();
};

module.exports.config_list = function ( callback ) {
    return [8259];

    // need to provide synchronous config id list
    // would require timeout

    function ids( dto ) {
        var callback = this;
        var ids = dto.configs.map( (o) => o.configId );
        callback( this );
    }

    var path = base + "configs";
    EdgeGrid.get( path, ids.bind(callback) ).end();
};

/*
 * List config versions
 */
module.exports.config_versions = function (configId) {
    var path = base + 'configs/' + configId + '/versions';
    EdgeGrid.get( path, callback ).end();
};

/*
 * Fetch a specific version of a configuration.
 */
module.exports.config_version = function (configId, versionId) {
    var path = base + 'configs/' + configId + '/versions/' + versionId;
    EdgeGrid.get( path, callback ).end();
};

/*
 */
module.exports.config_version_notes = function (configId, versionId) {
    var path = base + 'configs/' + configId + '/versions/' + versionId + '/version-notes';
    EdgeGrid.get( path, callback ).end();
};

/*
 */
module.exports.update_config_version_notes = function (configId, versionId, notes) {
    var data = {
        "configId": configId, // This should not be required
        "version": versionId, // This should not be required
        "versionNotes": notes
    };
    var path = base + 'configs/' + configId + '/versions/' + versionId + '/version-notes';
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
    var path = base + 'configs/' + configId + '/versions/' + versionId + '/activations';
    var request = EdgeGrid.put( path, callback );
    request.end( JSON.stringify(data) );
};

/*
 * You should only need the activation ID
 */
module.exports.activation = function (configId, versionId, activationId) {
    var path = base + 'configs/' + configId + '/versions/' + versionId;
    EdgeGrid.get( path, callback ).end();
};

/*
 */
module.exports.cancel = function (configId, versionId, notes) {
    var data = {
        "configId": configId, // This should not be required
        "version": versionId, // This should not be required
        "versionNotes": notes
    };
    var path = base + 'configs/' + configId + '/versions/' + versionId + '/version-notes';
    var request = EdgeGrid.put( path, callback );
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
