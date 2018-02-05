
module.exports = Noi;
module.exports.UserAdmin = require('./lib/UserAdmin');
module.exports.Contract = require('./lib/Contract');
module.exports.Alerts = require('./lib/Alerts');
module.exports.Events = require('./lib/Events');
module.exports.TrafficMgmt = require('./lib/TrafficMgmt');

module.exports.ApiDefinitions = require('./lib/ApiDefinitions');
module.exports.NetworkList = require('./lib/NetworkList');
module.exports.SIEM = require('./lib/SIEM');
module.exports.SecMon = require('./lib/SecMon');

module.exports.AppSec = require('./lib/AppSec');
module.exports.AppSecDefinition = require('./lib/AppSecDefinition');
module.exports.AppSecConfiguration = require('./lib/AppSecConfiguration');
module.exports.AppSecResource = require('./lib/AppSecResource');

const EdgeGrid = require('rededgegrid');

function Noi() {
}

module.exports.is_valid_env = function (env) {
    return EdgeGrid.is_valid_env(env);
};

module.exports.is_invalid_env = function (env) {
    return EdgeGrid.is_invalid_env(env);
};

module.exports.dump_dto = function (dto) {
    console.log( JSON.stringify(dto) );
};

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
