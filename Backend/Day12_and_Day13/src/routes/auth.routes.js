const express = require('express');
const userModel = require('../models/user.model');

const router = express.Router();

router.post('/register', async(req, res)=>{
    
    const {username, password} = req.body;

    const user = await userModel.create({
        username, password
    })

    res.status(201).json({
        message:"User registered successfully!",
        user
    })


})

router.post('/login', async(req, res)=>{

    const {username, password} = req.body;

    const user = await userModel.findOne({
        username : username
    })

    if(!user){
        return res.status(401).json({
            message:"User not found (Invalid user)"
        })
    }

    const isPassValid = password == user.password;

    if(!isPassValid){
        return res.status(401).json({
            message:"Invalid password!"
        })
    }

    res.status(201).json({
        message:"User logedIn successfully!", 
    })
})

module.exports = router;