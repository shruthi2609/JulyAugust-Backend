const express=require("express")

const router=express.Router()
const jwt=require("jsonwebtoken")
const User=require("../models/userModel")
router.get("/finduser",(req,res,next)=>{
    try{
//console.log(req.headers["authorization"])
const authheader=req.headers["authorization"]
const token=authheader.replace("Bearer ","")
const decodedtoken=jwt.verify(token,"jamesbond")
console.log(decodedtoken)
/*const user=User.findOne({email:decodedtoken.email})
req.user=user*/
next()
    }
catch(err){
    res.send(err)
}

},async (req,res)=>{
const data=await User.find({},{email:1,country:1,_id:0,username:1})
console.log(data)
res.send(data)
})
module.exports=router