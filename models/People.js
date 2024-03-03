const mongoose=require('mongoose');


const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  job: {
    type: String,
    required:[true,'give details'],
  },
  image:{
    type:String,
    required:[true,'give details'],
  },
  text:{
    type:String,
    required:[true,'give details'],
  }
})

module.exports = mongoose.model('People', PeopleSchema)