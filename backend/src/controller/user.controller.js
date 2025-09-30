const historyModel = require('../models/historyModel');
const  userModel  = require('../models/userModel')
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')
const cloudinary = require('cloudinary').v2
const mongoose = require("mongoose");

// Register User
module.exports.registerUser = async(req,res)=>{
 
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array})
    }

    try {
        const user = await userService.createUser(req.body)
        const token = await user.generateJwt()
        res.status(201).json({user,token})
    } catch (error) {
        return res.status(500).send(error.message)
    }

}

// Login User
module.exports.loginUser = async(req,res)=>{
   const errors = validationResult(req)
   if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array})
   }

   try {
     const {email, password} = req.body

     const user = await userModel.findOne({email}).select('+password')
     if(!user){
        return res.status(401).json({erros:'Invalid Credentials'})
     }

     const isMatch = await user.isValidPassword(password)
     if(!isMatch){
        return res.status(401).json({errors:'Invalid Credentials'})
     }

     const token = await user.generateJwt();
     return res.status(200).json({user,token})
   } catch (error) {
    return res.status(500).send(error.message)
   }
}

// get user prfofile
module.exports.getUserProfile = async(req,res)=>{
    try {
       const userId = req.user.id
       const user = await userModel.findById(userId).select('-password') 
       return res.status(200).json({success:true, user})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:error.message})
    }
}


// update user profile
module.exports.updateProfile = async(req,res)=>{
  try {

    const{firstName, lastName, email} = req.body
    const userId = req.user.id
    const imageFile = req.file
  
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({success:false, message: 'Something went wrong!' });
    }

      // Update employee details
    const updatedUserData = {
      'fullName.firstName': firstName,
      'fullName.lastName': lastName,
       email: email,
    }; 

    const updatedUser = await userModel.findByIdAndUpdate(
       userId,          
      { $set: updatedUserData }, 
      { new: true }    
    );

    if (!updatedUser) {
      return res.status(404).json({success:false, message: 'Something Went Wrong!' });
    }


      if(imageFile){
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
        const imageUrl = imageUpload.secure_url
        await userModel.findByIdAndUpdate(userId,{image:imageUrl})
      } 
      return res.status(200).json({success:true, message:"Profie Updated Successfully",updatedUser})
     
  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false,message:error.message})
  }
}

// delete profile:
module.exports.deleteProfile = async(req,res)=>{
  try {
    const userId = req.user.id;

    await historyModel.deleteMany({ userId });
    await userModel.findByIdAndDelete({_id:userId})

    res.status(200).json({ success: true, message: 'Delete Your Account Successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to delete account.' });
  }
}

// get Pinned Features:
module.exports.getPinnedFeatures = async(req,res)=>{
   try {
       const user = await userModel.findOne({_id:req.user.id,})
       if(!user){
           return res.status(403).json({success:false, messsage:'Something went wrong!'})
       }
       const pinnedFeatures = user.pinnedFeatures
   
   return res.status(201).json({success:true, pinnedFeatures:pinnedFeatures})
   } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
   }
}

// pinned Feature:
module.exports.pinFeature = async (req, res) => {
  try {
    const userId = req.user.id;
    const { feature } = req.body;
    console.log(req.body)

      if (!feature || !feature.id) {
      return res.status(400).json({
        success: false,
        message: "Feature object with an 'id' is required",
      });
    }

    const user = await userModel.findById(userId);
      if(!user){
           return res.status(403).json({success:false, messsage:'Something went wrong!'})
       }
    if(!user.pinnedFeatures.filter(f => f && f.id).some(f => f.id === feature.id)){
      user.pinnedFeatures.push(feature);
      await user.save();
    }
    return res.status(200).json({
      success: true,
      message: "Feature pinned successfully",
      pinnedFeatures: user.pinnedFeatures,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//  Unpin  feature
module.exports.unpinFeature = async (req, res) => {
  try {
    const userId = req.user.id;
    const { feature } = req.body;

    const user = await userModel.findById(userId);
      if(!user){
           return res.status(403).json({success:false, messsage:'Something went wrong!'})
       }

   user.pinnedFeatures = user.pinnedFeatures.filter( (f) => f.id !== feature.id  );

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Feature unpinned successfully",
      pinnedFeatures: user.pinnedFeatures,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



// get dashboard feature:
module.exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;

    // 1. Get all history of the user
    const history = await historyModel.find({ userId }).sort({ createdAt: -1 });

    // 2. Total features used
    const totalFeaturesUsed = history.length;

    // 3. Most used feature (analytics)
    const featureCount = {};
    history.forEach((h) => {
      featureCount[h.feature] = (featureCount[h.feature] || 0) + 1;
    });
    const mostUsedFeature = Object.entries(featureCount).sort((a, b) => b[1] - a[1])[0]?.[0] || null;

    // 4. Recent history shortcuts (limit 5)
    const recentHistory = history.slice(0, 5);

    // 5. Get pinned features from user
    const user = await userModel.findById(userId);
    const pinnedFeatures = user.pinnedFeatures
    
     const usageAnalytics = await historyModel.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(req.user.id)  } },
      { $group: { _id: "$feature", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

   return res.status(201).json({
      success: true,
      data: {
        totalFeaturesUsed,
        mostUsedFeature,
        recentHistory,
        usageAnalytics,
        pinnedFeatures,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};