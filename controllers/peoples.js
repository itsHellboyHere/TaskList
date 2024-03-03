const People=require('../models/People')

const asyncWrapper=require('../middleware/async')

const { createCustomError } = require('../errors/custom-error')

const getAllPeoples = asyncWrapper(async (req, res) => {
  const peoples = await People.find({})
  console.log("get request")
  res.status(200).json({ peoples })
})

const createPeople= asyncWrapper(async (req,res)=>{
        const people=await People.create(req.body)
        console.log(people);
    res.status(201).json({people})
})

module.exports={
  getAllPeoples,
  createPeople
}
