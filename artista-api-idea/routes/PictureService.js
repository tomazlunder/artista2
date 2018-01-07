var express = require('express');
var router = express.Router();
var PictureS=require('../models/PictureS');

var multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/pictures')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + req.body.seller + '-r' +Math.floor((Math.random() * 1000) + 1) +  '-'+ Date.now() + '.png');
    }
});

var upload = multer({ storage: storage });


router.post('/addProfile',upload.single('picture'),function(req,res,next){
    console.log(req.body);
    console.log(req.file);
    console.log(req.body.seller);


    PictureS.addProfilePicture(req.body.seller, req.file.path,function(err,count){

        if(err)
        {
            console.log(err);
            //res.json(err);
        }
        else{
            console.log(req.body);
            //res.json(req.body);//or return count for 1 & 0
        }
    });

    res.json(req.body);
});
router.post('/addListing',upload.single('picture'),function(req,res,next){
    console.log(req.body);
    console.log(req.file);
    console.log(req.body.seller);


    PictureS.addListingPicture(req.body.seller,req.file.path,req.body.listing,function(err,count){
        if(err)
        {
            console.log(err);
            //res.json(err);
        }
        else
        {
            console.log(req.body);
            //res.json(count);
        }
    });
    res.json(req.body);

});
router.post('/addPortfolio',upload.single('picture'),function(req,res,next){
    console.log(req.body);
    console.log(req.file);
    console.log(req.body.seller);

    PictureS.addPortfolioPicture(req.body.seller, req.file.path,function(err,count){
        if(err)
        {
            console.log(err);
            //res.json(err);
        }
        else
        {
            console.log(req.body);
            //res.json(count);
        }
    });
    res.json(req.body);

});
module.exports = router;