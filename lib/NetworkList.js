
module.exports = NetworkList;

const EdgeGrid = require('EdgeGrid');
const base = "/network-list/v1/";

function NetworkList() {
}

module.exports.list = function ( callback ) {
    var path = base + "network_lists?includeElements=false";
    EdgeGrid.get( path, callback ).end();
}

module.exports.fetch = function ( id, callback ) {
    var path = base + "network_lists/" + id;
    EdgeGrid.get( path, callback ).end();
}

module.exports.create = function ( name, type, ip_list, callback ) {
    var data = {
        "name": name,
        "type": type,
        "list": ip_list
    };
    var path = base + "network_lists";
    var request = EdgeGrid.post( path, callback );
    request.end( JSON.stringify(data) );
}

module.exports.delete_element = function ( id, element, callback ) {
    var path = base + "network_lists/" + id + "/element?" + element;
    // don't d this yet
    // EdgeGrid.delete( path, callback );
}

function throw_if_name_invalid( name ) {
    if ( typeof name === 'undefined' )
        throw new Error("Must provide NetList name");
    if ( name === '' )
        throw new Error("Must provide NetList name");
}

module.exports.activate = function ( params, callback ) {
    throw_if_name_invalid( params.name );
    var options = {
      name:     params.name,
      env:      params.env      || 'staging',
      notify:   params.notify   || ["nomail@akamai.com"],
      comments: params.comments || 'Activation from CLI'
    };
    var data = {
        "notification-recipients": options.notify,
        "comments": options.comments
    };
    var path = base + "network_lists/" + options.name + "/activate?env=" + options.env;
    var request = EdgeGrid.post( path, callback );
    request.end( JSON.stringify(data) );
}

module.exports.activation_status = function ( id, env, callback ) {
    if ( EdgeGrid.is_invalid_env(env) ) throw new Error("Invalid environment");
    var path = base + "network_lists/" + id + "/status?env=" + env;
    EdgeGrid.get( path, callback ).end();
}

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
