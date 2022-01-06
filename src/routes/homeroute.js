const express = require('express'); 
const homeRouter = express.Router();

homeRouter.get('/',function(req,res){

    res.render('home',{});
    
})


// homerouter filename changed to homeroute.js




module.exports = homeRouter;