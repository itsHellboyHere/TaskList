const Task=require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})
const createTask= asyncWrapper(async (req,res)=>{
        const task=await Task.create(req.body)
        console.log(task);
    res.status(201).json({task})
})
const getTask= asyncWrapper(async (req,res,next)=>{
        const {id:taskID}=req.params
        const task=await Task.findOne({_id:taskID})
        if(!task){
           
            // return res.status(404).json({msg:`task with id : ${taskID} does not exist. `})
            return next(createCustomError(`No task with id : ${taskID}`,404))
        }
        res.status(200).json({task})
})
const deleteTask=asyncWrapper(async (req,res,next)=>{
        const {id:taskID}=req.params
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
            // return res.status(404).json({msg:`task with id : ${taskID} does not exist. `})
             return next(createCustomError(`No task with id : ${taskID}`,404))
        }
        res.status(200).json({task})
        // res.status(200).send()
        // res.status(200).json({task:null,status:'Success'})
    
})
const updateTask=asyncWrapper(async (req,res,next)=>{
    
        const {id:taskID}=req.params
        // const {name,completed}=req.body
        const task= await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        })
        if(!task){
            // return res.status(404).json({msg:`task with id : ${taskID} does not exist. `})
             return next(createCustomError(`No task with id : ${taskID}`,404))
        }
        res.status(200).json({task})
    
})
module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}