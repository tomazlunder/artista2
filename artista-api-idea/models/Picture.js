var db = require('../dbconnection'); //reference of dbconnection.js
var Picture = {
    addProfilePicture: function(seller, path, callback) {

        return db.query("CALL proc_addProfilePicture(?,?)", [seller, path], callback);
    },
    addPortfolioPicture: function(seller, path, callback) {

        return db.query("CALL proc_addProfilePicture(?,?)", [seller, path], callback);
    },
    addListingPicture: function(seller, path, listing, callback) {

        return db.query("CALL proc_addListingPicture(?,?)", [listing, path], callback);
    },
    getPathById: function(id, callback) {
        return db.query("select path from picture where id=?", [id], callback);
    },
};
module.exports = Picture;