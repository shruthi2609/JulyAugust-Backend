const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://shruthi:atlasdb@cluster0.rpq7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>console.log("connected succesfully"))
const universitySchema=mongoose.Schema(
    {
      email:{
          type:String,
          unique:true,
          required:true,
      },
      username:String,
      password:String,
      department:String,
      mobile:Number,
      city:String,
      pincode:Number
    }  
  )
const User=mongoose.model("University",universitySchema)
const user1=new User(
    {
      username:"john",
      password:"john@123",
      department:"CSE",
      mobile:9999999,
      city:"TPT",
      pincode:"632006"
    }
)
user1.save().then(()=>console.log("user created successfully"))





