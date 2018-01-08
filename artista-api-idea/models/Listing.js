var db = require('../dbconnection'); //reference of dbconnection.js  
var Listing = {  
    getAllListings: function(callback) {  
        return db.query("Select * from listing", callback);  
    },  
    getListingById: function(id, callback) {  
        return db.query("select * from listing where Id=?", [id], callback);  
    },  
    addListing: function(Listing, callback) {  
        return db.query("Insert into listing values(?,?,?,?,?,?,?)", [Listing.id,Listing.seller,Listing.price,Listing.description, Listing.shown, Listing.category, Listing.mainPic], callback);  
    },  
    deleteListing: function(id, callback) {  
        return db.query("delete from listing where Id=?", [id], callback);  
    },  
    updateListing: function(id, Listing, callback) {  
        return db.query("update listing set id=?, seller=?, price=?, description=?,shown=?,category=?,mainPic=?", [Listing.id,Listing.seller,Listing.price,Listing.description, Listing.shown, Listing.category, Listing.mainPic], callback);  
    },

    picturePaths: function(id,callback){
        return db.query("select picture_id from listing_picture where listing_id = ?", [id], callback);
    }
};  
module.exports = Listing; 