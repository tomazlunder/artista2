var express = require('express');
var router = express.Router();
var Portfolio=require('../models/Portfolio');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Portfolio.getPortfolioById(req.params.id,function(err,rows){

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

 Portfolio.getAllPortfolio(function(err,rows){

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

        Portfolio.addPortfolio(req.body,function(err,count){

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

        Portfolio.deletePortfolio(req.params.id,function(err,count){

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

    Portfolio.updatePortfolio(req.params.id,req.body,function(err,rows){

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

//GET PICTURE IDS RELATED TO PORTFOLIOS
router.get('/:id/pictures', function(req,res,next){

    if(req.params.id){
        Portfolio.pictureIds(req.params.id,function(err,rows){
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

module.exports=router;