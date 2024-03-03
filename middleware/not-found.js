const notFound=((req,res)=>res.status(404).json({success:false,error:'Not Found'}))

module.exports=notFound