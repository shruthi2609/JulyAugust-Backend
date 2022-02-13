const express=require("express")
const app=express()
const cors=require("cors")
const bodyparser=require("body-parser")
app.use(bodyparser.json())
const getRoutes=require("./routes/getMethods")
const ssr=require("./routes/handlebars")
const jde=require("./routes/jadeEngine")
const signup=require("./routes/signUp")
const signin=require("./routes/signIn")
const findUser=require("./routes/findUser")
const updateUser=require("./routes/updateUser")
app.set("view engine","jade")
app.use(cors())
app.use("/",getRoutes)
app.use("/",ssr)
app.use("/",jde)
app.use("/",signup)
app.use("/",signin)
app.use("/",findUser)
app.use("/",updateUser)
app.listen(3001,()=>{
    console.log("server started")
})