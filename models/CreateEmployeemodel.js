const mongoose = require('mongoose')

const employee = new mongoose.Schema({
    employee_name:{
        type: String,
        required: true
    },
    employee_email:{
        type: String,
        required: true
    },
   
    employee_mobile:{
        type: String,
        required: true
    },
    employee_password:{
        type: String,
        required: true
    },
    employee_skype_id:{
        type: String,
        required: true
    },
    employee_profile_pic:{
        type: String,
        
    },
    createdOn :{
        type: Date,
        default: Date.now    },

        updatedOn :{
            type: Date,
            default: Date.now    }
})

module.exports= mongoose.model("employee", employee)