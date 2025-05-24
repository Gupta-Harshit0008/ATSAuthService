const express = require('express')
const authController=require('../controller/AuthController')
const router= express.Router();

router.post('/login',authController.loginController).post('/signUp',authController.signUpContoller).post('/logout',authController.logoutController)

module.exports=router