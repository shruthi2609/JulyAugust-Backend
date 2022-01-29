const { query } = require("express");
const express=require("express");
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.get("/home",(req,res)=>{
console.log(req)
res.send("<h1>Home Page</h1> <p>para </p>")
})
app.get("/",(req,res)=>{
res.send("[{ fname:`peter`,reg:1234},{ fname:`george`,reg:12}]")
})
app.get("/products",(req,res)=>{
  const querydata=req.query
  if(querydata.prname==="redmi"&&Number(querydata.price)<=20000){
      res.send("note pro 8")
  }
})
app.get("/search/:prname/:price",(req,res)=>{
const parameters=req.params
if(parameters.prname==="redmi"&&parameters.price==2000){
  res.send("ear buds")
}
res.send("test")
})
app.post("/login",(req,res)=>{
  const data=req.body
  console.log(data)
  if(data.username==="john"&&data.pasword==="password@123"){
    res.send("signed successfully")
  }
  else{
    res.send("invalid credentials")
  }
  
})
app.all("*",(req,res)=>{
    res.send("<h2>404 not found</h2>")
})


app.listen(3000,()=>{
console.log("server started")
})

