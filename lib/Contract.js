
/*
 * This SDK incorporates calls from the PAPI API with the Contracts
 * API, since the Contracts API does not provide all of the information
 * you might expect.
 */

module.exports = Contract;

const EdgeGrid = require('EdgeGrid');
const base = "/contract-api/v1/";
const papi = "/papi/v1/";

function Contract() {
}

/*
 * The accounts list should be part of the Contracts API, but it
 * is actually part of the PAPI API.  PAPI requires account IDs for
 * many of its operations.
 *
 * From the Invoicing API Doc:
 *
 *  Some API operations require an account identifier.
 *  If it’s not already available, you can access it with the
 *  Property Manager API from listing contracts as described above.
 *  Select the top-level accountId member and remove the act_ prefix.
 */
module.exports.accounts = function ( callback ) {
    var path = papi; // half baked
    EdgeGrid.get( path, callback ).end();
}

/*
 * Since the Contracts API does not provide details about a contract
 * we use the PAPI API.
 * {
 *   "accountId":"act_B-C-1CJH4HN",
 *   "contracts": {
 *      "items": [
 *        {"contractId":      "ctr_C-1CJH4I1",
 *         "contractTypeName":"AKAMAI_INTERNAL"}
 *      ]
 *   }
 * }
 */
module.exports.contracts_details = function ( callback ) {
    var path = papi + "contracts";
    EdgeGrid.get( path, callback ).end();
}

module.exports.contracts = function ( callback ) {
    var path = base + "contracts/identifiers";
    EdgeGrid.get( path, callback ).end();
}

// this one doesn't exist
module.exports.contract = function ( id, callback ) {
    var path = base + "contracts/" + id;
    EdgeGrid.get( path, callback ).end();
}

module.exports.products = function ( contractId, callback ) {
    var path = base + "contracts/" + contractId + "/products/summaries";
    EdgeGrid.get( path, callback ).end();
}

module.exports.reporting_groups = function ( callback ) {
    var path = base + "reportingGroups/";
    EdgeGrid.get( path, callback ).end();
}

/*
 * This is actually the PAPI API - but since cpcodes are associated
 * with contracts - it makes sense for a call here.
 */
module.exports.cpcodes = function ( contractId, callback ) {
    var path = '/papi/v1/cpcodes?contractId=' + contractId;
    EdgeGrid.get( path, callback ).end();
}

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
