var db = require('../dbconnection'); //reference of dbconnection.js
var Picture = {
    addProfilePicture: function(Picture, callback) {
        var path;
        var seller = Picture.seller;

        return db.query("Insert into picture values(?,1,?)", [seller, path], callback);
    },
    addPortfolioPicture: function(Picture, callback) {
        var path;
        var seller = Picture.seller;

        //Dobi z GET na seller
        var portfolioId;

        return db.query("Insert into picture values(?,0,?)", [Picture.seller, path], callback);

        //ID vstavljene
        var pictureId;

        db.query("Insert into portfolio_picture values (?,?)",[portfolioId,pictureId], callback);
    },
    addListingPicture: function(Picture, callback) {
        var path;
        var listing

        //Dobi z GET na seller
        var listing;

        return db.query("Insert into picture values(?,0,?)", [Picture.seller, path], callback);

        //ID vstavljene
        var pictureId;

        db.query("Insert into portfolio_picture values (?,?)",[portfolioId,pictureId], callback);
    }





};