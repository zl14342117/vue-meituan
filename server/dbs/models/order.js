const mongoose = require( 'mongoose')
mongoose.set('useCreateIndex', true) //加上这个
mongoose.connect('mongodb://127.0.0.1:27017/student', { useNewUrlParser: true })
const Schema = mongoose.Schema
const Order = new Schema({
  id: {
    type: String,
    require: true
  },
  user:{
    type:String,
    require:true
  },
  time:{
    type:String,
    require:true
  },
  total:{
    type:Number,
    require:true
  },
  imgs:{
    type:Array,
    require:true
  },
  name:{
    type:String,
    require:true
  },
  status:{
    type:Number,
    require:true
  }
})

module.exports= mongoose.model('Order', Order)
