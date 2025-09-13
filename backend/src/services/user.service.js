const userModel = require('../models/userModel')

module.exports.createUser = async({
  firstName, lastName,  email,password
})=>{
     if(!firstName || !email || !password){
        throw new Error('FirstName , Email and Password are required!')
     }

   //   const isUserAlreadyExists = await userModel.findOne({email})
   //      if(isUserAlreadyExists){
   //        throw new Error('User is already exists!')
   //  }

     const hashedPassword = await userModel.hashPassword(password)
     
     const user = await userModel.create({
        fullName:{
            firstName,
            lastName
        },
        email,
        password:hashedPassword
     })
   
     return user;
    }  
