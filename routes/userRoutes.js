const express = require("express");
const userRouter = express.Router();

userRouter.post("/signin",(req,res)=>{
    res.send("Signin");
});


userRouter.post("/signup",(req,res)=>{
    res.send("Signup");
});

module.exports = userRouter;