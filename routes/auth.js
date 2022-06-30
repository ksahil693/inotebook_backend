const express= require('express');
const User= require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// Create a User using: POST "/api/auth/createuser". NO login required
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min: 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 6 characters').isLength({min: 5})
],async(req,res)=>{
    // If their are errors, return bad request and that error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Chect whether the user exist with this mail already
    try{
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: "Sorry a user with this email already exists"})
    }
     user= await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      })
      
    res.json(user)
    }catch(error){
        console.error(error.message);
        res.status(500).send("Some Error occured");
    }
      
})

module.exports = router