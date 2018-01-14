var express = require('express');
var router = express.Router();
var Listing=require('../models/Listing');

//FEED
router.get('/',function(req,res,next){
    Listing.getFeed(function(err,rows){
        console.log("1");
        if(err)
        {
            console.log("2");

            res.json(err);
        }
        else{
            console.log("3");

            var data = {};
            rows.map(function(row) {
            });

            data['feed'] = rows;

            for (var i = 0; i < data.feed.length; i++){
                var newpath = "pics/"+ data.feed[i].path.split('\\').pop();
                data.feed[i].path = newpath;
            }

            console.log(data);
            res.json(data);
        }
    });

});

module.exports=router;