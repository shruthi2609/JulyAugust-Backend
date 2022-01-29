const express=require("express")
const router=express.Router()

router.get("/index",(req,res)=>{
    const data="hello peter"
res.render("index",{greet:data})
})
module.exports=router