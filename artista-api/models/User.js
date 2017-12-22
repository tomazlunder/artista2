var db = require('../dbconnection'); //reference of dbconnection.js  
var User = {  
    getAllUsers: function(callback) {  
        return db.query("Select * from user", callback);  
    },  
    getUserById: function(id, callback) {  
        return db.query("select * from user where Id=?", [id], callback);  
    },  
    addUser: function(User, callback) {  
        return db.query("Insert into user values(?,?,?,?,?,?)", [User.id, User.name, User.email. User.pwdHash, User.regTimestamp, User.type], callback);  
    },  
    deleteUser: function(id, callback) {  
        return db.query("delete from user where Id=?", [id], callback);  
    },  
    updateUser: function(id, User, callback) {  
        return db.query("update user set id=?,name=?, email=?, pwdHash=?, regTimestamp=?,type=? where id=?", [User.id, User.name, User.email. User.pwdHash, User.regTimestamp, User.type], callback);  
    }  
};  
module.exports = User; 