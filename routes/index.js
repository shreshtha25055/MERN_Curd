const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const employeedetails= require('../models/CreateEmployeemodel')
const hrdetails=require('../models/CreateHRProfile')

/* GET home page. */
/* router.post('/createemp', (req,res)=>{
const employee= new employeedetails({
  Employee_name : request.body.Employee_name,
  Employee_email = request.body.Employee_email,
  Employee_id= request.body.Employee_id,
  Employee_password = request.body.Employee_password,
  Employee_mobile = request.body.Employee_mobile,
  Employee_skype_id= request.body.Employee_skype_id,
  Employee_profile_pic = request.body.Employee_profile_pic
})
employee.save()
.then(data=>{
  response.json(data)
})
.catch(error=>{
  response.json(error)
})
})
 */
router.post('/createemp', async function(req, res, next) {
 
  console.log('bodyyy',req.body)
var employee=new employeedetails
({
  employee_name : req.body.employee_name,
  employee_email : req.body.employee_email,
  employee_id: req.body.employee_id,
  employee_password : req.body.employee_password,
  employee_mobile : req.body.employee_mobile,
  employee_skype_id: req.body.employee_skype_id,
  employee_profile_pic : req.body.employee_profile_pic,
  createdOn: req.body.date, 
  updatedOn: req.body.createdOn
})
  console.log('employeedetails',employee )
  await employee.save(function(error, result){
    if(error)
    {
      console.log(error)
       return res.status(500).json({RESULT:false})}
    else
    {
     return res.status(200).json({RESULT:true})
    }
 
  })
  
});


router.post('/createhr',function(req,res){
  
  var hrdetails = new hrdetails();
hr_name= req.body.hr_name, 
hr_email= req.body.hr_email, 
hr_username= req.body.hr_username, 
hr_mobile= req.body.hr_mobile,
hr_password= req.body.hr_password,
hr_skype_id=req.body.hr_skype_id,
hr_profile_pic= req.body.hr_profile_pic

hrdetails.save(function(error, docs){
  if(err){
    return res.status(500).json({RESULT:false})
  }
  else {
    return res.status(200).json({RESULT:true})
  }
})
})


module.exports = router;
