
module.exports = UserAdmin;

const EdgeGrid = require('EdgeGrid');
const base = "/user-admin/v1/";

function UserAdmin() {
}

/*
 * We shouldn't need account Id - (I don't think)
 */
module.exports.groups = function ( accountId, callback ) {
    var path = base + "accounts/" + accountId + "/groups";
    EdgeGrid.get( path, callback ).end();
}

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
