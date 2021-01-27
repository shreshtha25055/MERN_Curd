var multer=require('multer')
var storage=multer.diskStorage({
destination:(req,file,path)=>
{path(null,'public/images')}
,
filename:(req,file,path)=>{
    var fileName=file.originalname
    var index=file.originalname.lastIndexOf('.')
    fileName=new Date().valueOf()+file.originalname.slice(index)
   
    console.log(fileName)
 path(null,fileName)
}
 });
var upload=multer({storage:storage})
module.exports = upload