
/*
 * These are speculative APIs.
 */

module.exports = AppSecConfiguration;

const EdgeGrid = require('EdgeGrid');
const base = "/appsec-configuration/v1/";

function AppSecConfiguration() {
}

/*
 * Not yet defined
 */
module.exports.configs = function () {
    var path = base + "configs";
    EdgeGrid.get( path, callback );
};

/*
 * List config versions
 */
module.exports.config_versions = function (configId) {
    var path = base + 'configs/' + configId + '/versions';
    EdgeGrid.get( path, callback );
};

/*
 * Fetch a specific version of a configuration.
 */
module.exports.config_version = function (configId, versionId) {
    var path = base + 'configs/' + configId + '/versions/' + versionId;
    EdgeGrid.get( path, callback );
};

/*
 */
module.exports.config_version_notes = function (configId, versionId) {
    var path = base + 'configs/' + configId + '/versions/' + versionId + '/version-notes';
    EdgeGrid.get( path, callback );
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
    EdgeGrid.put( path, callback );
    request.end( JSON.stringify(data) );
};

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
