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

    //PORTFOLIO PICTURES
    pictureIds: function(id,callback){
        return db.query("select picture.path from portfolio_picture left join picture on portfolio_picture.picture_id = picture.id where portfolio_id = ?", [id], callback);
    },
    addPortfolioPicture: function(seller, path, callback) {
        return db.query("CALL proc_addProfilePicture(?,?)", [seller, path], callback);
    }

};  
module.exports = Portfolio; 