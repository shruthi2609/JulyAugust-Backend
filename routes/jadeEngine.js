const express=require("express")
const router=express.Router()

router.get("/mobile",(req,res)=>{
    const data="Redmi"
res.render("products",{product:data})
})
module.exports=router