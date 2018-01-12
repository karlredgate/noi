
module.exports = Contract;

const EdgeGrid = require('EdgeGrid');
const base = "/contract-api/v1/";

function Contract() {
}

module.exports.contracts = function ( callback ) {
    var path = base + "contracts/identifiers";
    EdgeGrid.get( path, callback ).end();
}

module.exports.products = function ( contractId, callback ) {
    var path = base + "contracts/" + contractId + "/products/summaries";
    EdgeGrid.get( path, callback ).end();
}

/* vim: set autoindent expandtab sw=4 syntax=javascript: */