const express=require("express")
const router=express.Router()
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
router.post("/signin",async (req,res)=>{
const data=req.body//data.password plain text
const result = await User.findOne({email:data.email})
//console.log(result.password)
const authenticate=await bcrypt.compare(data.password,result.password)
if(authenticate){
    const token=jwt.sign({email:result.email},"jamesbond")
    console.log(token)
    res.send({msg:"success",status:true,token:token})
}
else{
    res.send("invalid crendentials")
}
//const result=await User.find({email:data.email})
/*const output=result.filter((item)=>item.country==="USA")
console.log(output)*/


})
module.exports=router