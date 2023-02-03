const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId

// const LikeSchema = new mongoose.Schema({like:{type:ObjectId}});
// const LikeSh=mongoose.model('Like',LikeSchema)

const PostModal =  new mongoose.Schema({
    fileName:{
        type:String,
    },
    metadata:{
        type:Object
    },
    deleted : {
        type:Boolean,
        default:false
    },user:{
        type:ObjectId
    }
},{ timestamps: true })

const drop=mongoose.model('Files',PostModal)

module.exports={drop};