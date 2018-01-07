var db = require('../dbconnection'); //reference of dbconnection.js  
var Seller = {  
    getAllSellers: function(callback) {  
        return db.query("Select * from seller", callback);  
    },  
    getSellerById: function(id, callback) {  
        return db.query("select * from seller where Id=?", [id], callback);  
    },  
    addSeller: function(Seller, callback) {  
        return db.query("Insert into seller values(?,?,?,?,?,?)", [Seller.id, Seller.user, Seller.rating], callback);  
    },  
    deleteSeller: function(id, callback) {  
        return db.query("delete from seller where Id=?", [id], callback);  
    },  
    updateSeller: function(id, Seller, callback) {  
        return db.query("update seller set id=?,name=?, email=?, pwdHash=?, regTimestamp=?,type=? where id=?", [User.id, User.user, User.rating], callback);  
    }  
};  
module.exports = Seller; 