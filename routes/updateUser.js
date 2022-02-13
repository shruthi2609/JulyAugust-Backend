const express=require("express")
const { findByIdAndUpdate } = require("../models/userModel")
const router=express.Router()
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const authorize=require("../middleware/authorize")
router.post("/updateuser",authorize,async (req,res)=>{
const reqData=req.body
const hashedPw=await bcrypt.hash(reqData.upassword,7)
const data=await User.findOne({email:reqData.email})
if(data){
    const up=await User.findByIdAndUpdate(data._id,{password:hashedPw})
    res.send("updated")
}
else{
    res.send("user not found")
}

})
router.post("/delete",async (req,res)=>{
    const responseData=await User.remove({username:req.body.uname})
    console.log(responseData)
    res.send("dummy")
})
module.exports=router