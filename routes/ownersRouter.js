const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner_model");


if(process.env.NODE_ENV == "development"){
    router.post("/create" , async function(req , res){
       let owners = await ownerModel.find();
       if(owners.length > 2) {
        return res
            .status(500)
            .send("You don't have permission to create a new owner .");
        } 
        let {canteen_name , fullname , email, password } = req.body ;             // add  contact , picture ,gstin
        let cratedOwner = await ownerModel.create({
            canteen_name,
            fullname  ,
            email  ,
            password ,
            // contact,
            // picture  , 
            // gstin ,
        }) ;
        res.status(201).send(cratedOwner);  
        
    })
}


router.get("/" , function(req , res){
    res.send("hey it's working");
})

console.log(process.env.NODE_ENV);      //$env:NODE_ENV = "development"


module.exports = router ;