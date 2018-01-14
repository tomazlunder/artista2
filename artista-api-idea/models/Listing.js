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
        return db.query("SELECT picture.path from listing_picture LEFT JOIN picture on listing_picture.picture_id = picture.id WHERE listing_id = ?", [id], callback);
    },
    addListingPicture: function(listing, path, callback) {
        return db.query("CALL proc_addListingPicture(?,?)", [listing, path], callback);
    },

    //FEED
    getFeed: function(callback){
        return db.query("SELECT listing.id, listing.seller, listing.price, listing.name, listing.description,\n" +
            "\t\tlisting.timestamp, listing.category, picture.path , artista.user.`name` as userName, artista.user.email\n" +
            "from listing \n" +
            "LEFT JOIN picture ON listing.mainPic = picture.id \n" +
            "LEFT JOIN seller ON listing.seller = seller.id\n" +
            "LEFT JOIN artista.user ON seller.user = user.id\n" +
            "ORDER BY listing.`timestamp` ASC;", callback);
    }
};  
module.exports = Listing; 