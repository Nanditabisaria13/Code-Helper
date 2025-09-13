const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { getPinnedFeatures } = require('../controller/user.controller')

const userSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minlength:[3,'First name must have at least 3 characters long']
        },
        lastName:{
            type:String,
            minlength:[3,'Last name must have at least 3 characters long']
        }
    },
     email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    minLength:[6, 'Emain must be atleast 6 characters long'],
    maxLength:[50,'Email must not be longer than 50 characters']
   }, 
    password:{
        type:String,
        required:true,
        select:false,
    },
    image:{type:String,default:'https://cdn-icons-png.freepik.com/256/10987/10987751.png?ga=GA1.1.1367734566.1715677570&semt=ais_hybrid'},
    
  pinnedFeatures: [{
        id: { type: String},
        name: { type: String},
        description: { type: String},
        icon: { type: String},
        link: { type: String},

    }]
  
    

})

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

userSchema.methods.isValidPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateJwt =  async function(){
    return jwt.sign({ id: this._id },process.env.JWT_SECRET,{
        expiresIn:'24h'
    })
}

const userModel = mongoose.models.user || mongoose.model("user",userSchema)

module.exports = userModel
