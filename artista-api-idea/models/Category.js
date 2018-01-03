var db = require('../dbconnection'); //reference of dbconnection.js  
var Category = {  
    getAllCategories: function(callback) {  
        return db.query("Select * from category", callback);  
    },  
    getCategoryById: function(id, callback) {  
        return db.query("select * from category where Id=?", [id], callback);  
    },  
    addCategory: function(Category, callback) {  
        return db.query("Insert into category values(?,?)", [Category.id, Category.name], callback);  
    },  
    deleteCategory: function(id, callback) {  
        return db.query("delete from category where Id=?", [id], callback);  
    },  
    updateCategory: function(id, Category, callback) {  
        return db.query("update category set id=?,name=?", [Category.id, Category.name], callback);  
    }  
};  
module.exports = Category; 