const User = require('../Modals/userModal')
const jwt=require('jsonwebtoken')

const SignToken= id => {
return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:process.env.EXPIRESIN
    })
} 

exports.loginController=async (req,res)=>{
    const email=req.body.email
    const password=req.body.password
    if (!email || !password){
        return res.status(400).json({
            status:'failure',
            message:'Please enter correct email or password details'
        })
    }

    const userLogin= await User.findOne({email})
    if (!userLogin){
        return res.status(400).json({
            status:'failure',
            message:' No user found . Please enter correct details'
        })
    }
    if(password !== userLogin.password){
        return res.status(400).json({
            status:'failure',
            message:' Please enter correct password'
        })
    }

    const token = SignToken(userLogin._id)
    res.status(200).json({
        status:'success',
        message:'login successfull',
        userdata:{email:userLogin.email,
            userName:userLogin.userName
        },
        token
    })
}

exports.logoutController= (req,res)=>{
    res.status(200).json({
        status:'success',
        message:'Logged out successfully'
    })
}

exports.signUpContoller=async (req,res)=>{
    try{
userdata={
    userName:req.body.userName,
    email:req.body.email,
    password:req.body.password
}
const userData=await User.create(userdata)
res.status(200).json({
        status:'success',
        message:'signup successfull',
        userData
    })
    }
    catch(e){
        res.status(400).json({
            status:'Failure',
            message:`error : ${e.message}`
        })
    }
}
