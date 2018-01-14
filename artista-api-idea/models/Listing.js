var db = require('../dbconnection'); //reference of dbconnection.js  
var Listing = {  
    getAllListings: function(callback) {  
        return db.query("Select * from listing", callback);  
    },  
    getListingById: function(id, callback) {  
        return db.query("select * from listing where Id=?", [id], callback);  
    },  
    addListing: function(Listing, callback) {  
        return db.query("Insert into listing values(?,?,?,?,?,?,?,?)", [Listing.id,Listing.seller,Listing.price,Listing.description, Listing.shown, Listing.category, Listing.mainPic, Listing.name], callback);
    },  
    deleteListing: function(id, callback) {  
        return db.query("delete from listing where Id=?", [id], callback);  
    },  
    updateListing: function(id, Listing, callback) {  
        return db.query("update listing set id=?, seller=?, price=?, description=?,shown=?,category=?,mainPic=?, name= ?", [Listing.id,Listing.seller,Listing.price,Listing.description, Listing.shown, Listing.category, Listing.mainPic, Listing.name], callback);
    },

    //LISTING PICTURES
    pictureIds: function(id,callback){
        console.log(id);
        return db.query("select picture.path from listing_picture left join picture on listing_picture.picture_id = picture.id where listing_id = ?", [id], callback);
    },
    addListingPicture: function(listing, path, callback) {
        return db.query("CALL proc_addListingPicture(?,?)", [listing, path], callback);
    },

    //FEED
    getFeed: function(callback){
        return db.query("select listing.id, listing.seller, listing.price, listing.name, listing.description, listing.timestamp, listing.category, picture.path from listing LEFT JOIN picture ON listing.mainPic = picture.id ORDER BY listing.`timestamp` ASC;", callback);
    }
};  
module.exports = Listing; 