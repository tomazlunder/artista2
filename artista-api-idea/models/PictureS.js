var db = require('../dbconnection'); //reference of dbconnection.js
var PictureS = {
    addProfilePicture: function(seller, path, callback) {

        return db.query("CALL proc_addProfilePicture(?,?)", [seller, path], callback);
    },
    addPortfolioPicture: function(seller, path, callback) {

        return db.query("CALL proc_addProfilePicture(?,?)", [seller, path], callback);
    },
    addListingPicture: function(seller, path, listing, callback) {

        return db.query("CALL proc_addListingPicture(?,?,?)", [seller, path, listing], callback);
    }
};
module.exports = PictureS;