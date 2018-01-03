
module.exports = NetworkList;

const EdgeGrid = require('EdgeGrid');
const base = "/network-list/v1/";

function NetworkList() {
}

module.exports.list = function ( callback ) {
    var path = base + "network_lists?includeElements=false";
    EdgeGrid.get( path, callback );
}

module.exports.fetch = function ( id, callback ) {
    var path = base + "network_lists/" + id;
    EdgeGrid.get( path, callback );
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

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
