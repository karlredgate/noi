
module.exports = UserAdmin;

const EdgeGrid = require('rededgegrid');
const base = "/user-admin/v1/";

function UserAdmin() {
}

/*
 * We shouldn't need account Id - (I don't think)
 *
 * [
 *   {
 *     "accountId":"B-C-1CJH4HN",
 *     "createdBy":"Akamai",
 *     "createdDate":"2016-07-22T18:16:02Z",
 *     "groupName":"RedgatesAdmins",
 *     "groupId":87570,
 *     "leaf":true,
 *     "modifiedBy":"Akamai",
 *     "modifiedDate":"2016-07-22T18:16:02Z",
 *     "navGroup":true,
 *     "parentGroupId":61060,
 *     "topLevelGroup":true
 *   }
 * ]
 */
module.exports.groups = function ( accountId, callback ) {
    if ( accountId == null ) {
        throw "accountid is required argument";
    }
    var path = base + "accounts/" + accountId + "/groups";
    EdgeGrid.get( path, callback ).end();
}

/*
 * [
 *   {
 *      "accountId":"B-C-1CJH4HN",
 *      "createdBy":"Akamai",
 *      "createdDate":"2016-07-22T18:16:02Z",
 *      "groupName":"RedgatesAdmins",
 *      "groupId":87570,
 *      "leaf":true,
 *      "modifiedBy":"Akamai",
 *      "modifiedDate":"2016-07-22T18:16:02Z",
 *      "navGroup":true,
 *      "parentGroupId":61060,
 *      "topLevelGroup":true
 *   }
 * ]
 */
module.exports.subgroups = function ( accountId, groupdId, callback ) {
    var path = base + "accounts/" + accountId + "/groups/" + groupId + "/groups";
    EdgeGrid.get( path, callback ).end();
}

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
