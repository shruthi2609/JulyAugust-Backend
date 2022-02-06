const express=require("express")
const router=express.Router()
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
router.post("/signup",async (req,res)=>{
    const data=req.body
    data.password=await bcrypt.hash(data.password,7)
  
    const user1=new User(
        {
          email:data.email,
          username:data.username,
          password:data.password,
          department:data.department,
          mobile:data.mobile,
          city:data.city,
          country:data.country,
          pincode:data.pincode,
          interest:data.interest
        }
    )
 await  user1.save().then(()=>res.send("user signup successfull")).catch((err)=>res.send("error in signup"))
    
})

module.exports=router