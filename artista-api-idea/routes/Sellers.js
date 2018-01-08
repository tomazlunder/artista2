var express = require('express');
var router = express.Router();
var Seller=require('../models/Seller');
var path = require('path');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Seller.getSellerById(req.params.id,function(err,rows){

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

 Seller.getAllSellers(function(err,rows){

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

        Seller.addSeller(req.body,function(err,count){

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

        Seller.deleteSeller(req.params.id,function(err,count){

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

    Seller.updateSeller(req.params.id,req.body,function(err,rows){

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
router.get('/:id/picture', function(req,res,next){

    if(req.params.id){
    Seller.getProfilePicture(req.params.id,function(err,rows){
        console.log(rows)

        if(rows[0] == null){
            res.sendFile(path.resolve(__dirname + '\\..\\public\\defaults\\default_seller.png'));
            return;
        }

        var rel_path = rows[0].path;
        rel_path = __dirname + '\\' + rel_path;
        console.log(rel_path);
        console.log(path.resolve(rel_path));

        if(err)
        {
            res.json(err);
        }
        else{
            res.sendFile(path.resolve(rel_path));
            //res.json(rows);

        }
    });
}

});

module.exports=router;