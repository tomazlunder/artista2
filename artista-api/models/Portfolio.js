var db = require('../dbconnection'); //reference of dbconnection.js  
var Portfolio = {  
    getAllPortfolios: function(callback) {  
        return db.query("Select * from portfolio", callback);  
    },  
    getPortfolioById: function(id, callback) {  
        return db.query("select * from portfolio where Id=?", [id], callback);  
    },  
    addPortfolio: function(User, callback) {  
        return db.query("Insert into portfolio values(?,?,?)", [Portfolio.id, Portfolio.seller, Portfolio.description], callback);  
    },  
    deletePortfolio: function(id, callback) {  
        return db.query("delete from portfolio where Id=?", [id], callback);  
    },  
    updatePortfolio: function(id, User, callback) {  
        return db.query("update portfolio set id=?,seller=?,description=?", [Portfolio.id, Portfolio.seller, Portfolio.description], callback);  
    }  
};  
module.exports = Portfolio; 