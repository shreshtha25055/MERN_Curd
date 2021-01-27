const { request } = require("express");

const mongoose= require('mongoose')

const hrdetails = new mongoose.Schema({
    hr_name:{
        type:String, 
        required: true
    }, 
    hr_email:{
        type:String, 
        required:true
    },
    hr_username :{
        type:String,
        required:true
    },
    hr_mobile:{
        type: String,
        required:true
    },
    hr_password:{
        type:String,
        required: true
    },
    hr_skype_id:{
        type:String, 
        required:true
    },
    hr_profile_pic:{
        type:String,
       /*  required:true */
    }
})

module.exports= mongoose.model('hrprofile',hrdetails)