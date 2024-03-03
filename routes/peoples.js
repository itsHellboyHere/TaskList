const express=require('express')
const router=express.Router()

const {
    getAllPeoples,
    createPeople
}=require('../controllers/peoples')

router.route('/').get(getAllPeoples).post(createPeople)

module.exports=router;