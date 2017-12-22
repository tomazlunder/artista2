var db = require('../dbconnection'); //reference of dbconnection.js  
var Listing = {  
    getAllListings: function(callback) {  
        return db.query("Select * from listing", callback);  
    },  
    getListingById: function(id, callback) {  
        return db.query("select * from listing where Id=?", [id], callback);  
    },  
    addListing: function(User, callback) {  
        return db.query("Insert into listing values(?,?,?,?,?,?,?,?)", [Listing.id,Listing.seller,Listing.price,Listing.description,Listing.timestamp, Listing.shown, Listing.category, Listing.mainPic], callback);  
    },  
    deleteListing: function(id, callback) {  
        return db.query("delete from listing where Id=?", [id], callback);  
    },  
    updateListing: function(id, User, callback) {  
        return db.query("update listing set id=?, seller=?, price=?, description=?,timestamp=?,shown=?,category=?,mainPic=?", [Listing.id,Listing.seller,Listing.price,Listing.description,Listing.timestamp, Listing.shown, Listing.category, Listing.mainPic], callback);  
    }  
};  
module.exports = Listing; 