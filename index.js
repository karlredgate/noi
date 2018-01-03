
module.exports = Noi;
module.exports.Contract = require('./lib/Contract');
module.exports.Alerts = require('./lib/Alerts');
module.exports.Events = require('./lib/Events');
module.exports.NetworkList = require('./lib/NetworkList');

const EdgeGrid = require('EdgeGrid');

function Noi() {
}

module.exports.is_valid_env = function (env) {
    return EdgeGrid.is_valid_env(env);
};

module.exports.is_invalid_env = function (env) {
    return EdgeGrid.is_invalid_env(env);
};

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
