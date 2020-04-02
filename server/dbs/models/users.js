const mongoose =require('mongoose')
mongoose.set('useCreateIndex', true) //加上这个
mongoose.connect('mongodb://127.0.0.1:27017/student', { useNewUrlParser: true })
const Schema = mongoose.Schema
const UserSchema=new Schema({
  username:{
    type:String,
    unique:true,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  }
})

module.exports= mongoose.model('User',UserSchema)
