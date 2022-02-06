const express=require("express")
const router=express.Router()
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
router.post("/signin",async (req,res)=>{
const data=req.body//data.password plain text
const result = await User.findOne({email:data.email})
console.log(result.password)//hash
const authenticate=await bcrypt.compare(data.password,result.password)
if(authenticate){
    res.send("singin successfull")
}
else{
    res.send("invalid crendentials")
}
//const result=await User.find({email:data.email})
/*const output=result.filter((item)=>item.country==="USA")
console.log(output)*/


})
module.exports=router