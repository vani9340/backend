const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    username :{
        type: String,
        require: true,
        default : "shivani"
    },
    password :{
        type: String,
        require: true,
        default : "shivani"
    }
})




// const {ObjectId} = mongoose.Schema.Types
const PostSchema = new mongoose.Schema({
    filename:{
        type:String,
        require: true
    
    }, username: {
        type : String,
        require : true
    },
    address : {
        type: String,
        require : true
    },
    description:{
    type:String,  
    require : true
    }
})
module.exports = {User:mongoose.model("InstaUser",UserSchema),Post:mongoose.model("InstaPost",PostSchema)}