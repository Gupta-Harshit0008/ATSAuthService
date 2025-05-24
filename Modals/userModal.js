const mongoose=require('mongoose')

userSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:[true,'User name is mandatory']
    },
    email:{
        type:String,
        required:[true,'User Must have a email'],
        unique:[true,'users Email is unqiue']
    },
    password:{
        type:String,
        required:[true,'Password is mandatory']
    }
})
    const User= mongoose.model('User',userSchema)
    module.exports=User;