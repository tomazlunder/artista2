var express = require('express');
var router = express.Router();
var Listing=require('../models/Listing');

//multer needed for uploading files
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

//BAISC OPERATIONS
router.get('/:id?',function(req,res,next){

if(req.params.id){

    Listing.getListingById(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{

 Listing.getAllListings(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });
}
});
router.post('/',function(req,res,next){

        Listing.addListing(req.body,function(err,count){

            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(req.body);//or return count for 1 & 0
            }
        });
});
router.delete('/:id',function(req,res,next){

        Listing.deleteListing(req.params.id,function(err,count){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(count);
            }

        });
});
router.put('/:id',function(req,res,next){

    Listing.updateListing(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

//PICTURES
//get picture ids related to listing
router.get('/:id/pictures', function(req,res,next){

    if(req.params.id){
        Listing.pictureIds(req.params.id,function(err,rows){
            console.log(rows)

            var ids = [];
            rows.forEach(function(element){
                ids.push(element.picture_id);
            })

            console.log(ids);

            if(err)
            {
                res.json(err);
            }
            else{
                res.json(ids);

            }
        });
    }

});

//upload picture to listing
router.post('/:id/picture',upload.single('picture'),function(req,res,next){
    console.log(req.body);
    console.log(req.file);
    console.log(req.body.seller);


    Listing.addListingPicture(req.params.id, req.file.path,function(err,count){
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

module.exports=router;