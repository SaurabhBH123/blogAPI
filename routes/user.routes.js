const express = require("express");
const { UserModel } = require("../models/user.model");
const userRouter = express.Router()
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');

userRouter.post("/register",async(req,res)=>{
    const {username,email,password,avatar} = req.body;
    try {
        bcrypt.hash(password, 5, async(err, hash)=> {
            const user = new UserModel({username,email,password:hash,avatar})
            await user.save()
            res.send({"msg":"A new user is registered"})
        });
    } catch (error) {
        res.send(error)
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, async(err, result)=> {
                res.send({"msg":"Login Successful!","token":jwt.sign({"userID":user._id},"sb123")})
            });
        }else{
            res.send({"msg":"Login failed"})
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports={userRouter}