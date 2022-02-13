const express=require("express")
const router=express.Router()
router.get("/home",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})
router.get("/products",(req,res)=>{
    res.send("<h1>Prodcuts</h1>")
})
module.exports=router
//axios.get("http://localhost:3001/home")