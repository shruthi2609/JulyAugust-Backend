const jwt=require("jsonwebtoken")
const authorize=(req,res,next)=>{
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

}
module.exports=authorize