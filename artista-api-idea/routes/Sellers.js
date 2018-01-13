var express = require('express');
var router = express.Router();
var Seller=require('../models/Seller');
var path = require('path');

//multer needed for uploading files
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../../public/pictures')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + req.body.seller + '-r' +Math.floor((Math.random() * 1000) + 1) +  '-'+ Date.now() + '.png');
    }
});
var upload = multer({ storage: storage });

//BAISC OPERATIONS
router.get('/:id?',function(req,res,next){

if(req.params.id){

    Seller.getSellerById(req.params.id,function(err,rows){
        console.log(rows);
        if(err)
        {
            res.json(err);
        }
        else{
            var data = {};
            rows.map(function(row) {
            });

            data['seller'] = rows;

            console.log(data);
            res.json(data)
            //res.json(rows);
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
            var data = {};
            rows.map(function(row) {
            });

            data['seller'] = rows;

            console.log(data);
            res.json(data)
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

//PICTURES
//get profile picture
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

//upload profile picture
router.post('/:id/picture',upload.single('picture'),function(req,res,next){
    console.log(req.body);
    console.log(req.file);
    console.log(req.body.seller);


    Seller.addProfilePicture(req.params.id, req.file.path,function(err,count){

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

module.exports=router;