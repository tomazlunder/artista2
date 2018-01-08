var db = require('../dbconnection'); //reference of dbconnection.js  
var Portfolio = {  
    getAllPortfolios: function(callback) {  
        return db.query("Select * from portfolio", callback);  
    },  
    getPortfolioById: function(id, callback) {  
        return db.query("select * from portfolio where Id=?", [id], callback);  
    },  
    addPortfolio: function(Portfolio, callback) {  
        return db.query("Insert into portfolio values(?,?,?)", [Portfolio.id, Portfolio.seller, Portfolio.description], callback);  
    },  
    deletePortfolio: function(id, callback) {  
        return db.query("delete from portfolio where Id=?", [id], callback);  
    },  
    updatePortfolio: function(id, Portfolio, callback) {  
        return db.query("update portfolio set id=?,seller=?,description=?", [Portfolio.id, Portfolio.seller, Portfolio.description], callback);  
    },

    pictureIds: function(id,callback){
        return db.query("select picture_id from portfolio_picture where portfolio_id = ?", [id], callback);
    }
};  
module.exports = Portfolio; 