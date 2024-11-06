const express = require('express');
const router = express.Router();
// const Joi = require("joi");
// const userModel = require("../models/user_model");

// const userSchema = Joi.object({
//     fullname: Joi.string().required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(6).required(),
//   });

router.get("/" , function(req , res){
    res.send("hey it's working");
})

// router.post("/register", async function(req, res) {
//     try {
//       // Validate request body against the schema
//       const { error } = userSchema.validate(req.body);
//       if (error) {
//         // Send an error response if validation fails
//         return res.status(400).json({
//           message: "Validation error",
//           details: error.details.map((detail) => detail.message)
//         });
//       }
  
//       // Extract validated data from request body
//       let { fullname , email, password  } = req.body;
  
//       // Create new user in MongoDB
//       let users = await userModel.create({ fullname , email, password, });
//       res.status(201).send(users); // Send created user as response
//     } catch (err) {
//       console.log(err.message);
//       res.status(500).json({ message: "Internal server error", error: err.message });
//     }
//   });
  

module.exports = router ;       