var express = require('express');
var router = express.Router();
var Listing=require('../models/Listing');

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

//GET PROFILE PICTURE OR DEFAULT IF NONE
router.get('/:id/pictures', function(req,res,next){

    if(req.params.id){
        Listing.pictureIds(req.params.id,function(err,rows){
            console.log(rows)


            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);

            }
        });
    }

});

module.exports=router;