const mongoose = require( 'mongoose')
mongoose.set('useCreateIndex', true) //加上这个
mongoose.connect('mongodb://127.0.0.1:27017/student', { useNewUrlParser: true })
const Schema = mongoose.Schema
const City = new Schema({
  id: {
    type: String,
    require: true
  },
  value: {
    type: Array,
    require: true
  }
})

module.exports= mongoose.model('City', City)
