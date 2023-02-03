const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId

// const LikeSchema = new mongoose.Schema({like:{type:ObjectId}});
// const LikeSh=mongoose.model('Like',LikeSchema)

const userModel =  new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:Object
    },
},{ timestamps: true })

const user=mongoose.model('users',userModel)

module.exports={user};