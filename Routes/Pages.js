const express = require('express');
const router = express.Router();



router.get('/home', (req, res)=> {
    res.send("   This is the home page!");
 }); 
 
 router.get('/about', (req, res)=> {
   res.send("this is the about page!");
 }); 

 module.exports = router;
