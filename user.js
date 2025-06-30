const mongoose= require('mongoose');
const userSchema=new mongoose.Schema({

    Name: String, Email:String ,Subject: String, Describe_Project: String ,Password:String
})
const userModel=mongoose.model('user',userSchema);
module.exports=userModel;