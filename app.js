const express=require("express")
const app=express()
const getRoutes=require("./routes/getMethods")
const ssr=require("./routes/handlebars")
const jde=require("./routes/jadeEngine")
app.set("view engine","jade")
app.use("/",getRoutes)
app.use("/",ssr)
app.use("/",jde)
app.listen(3000,()=>{
    console.log("server started")
})