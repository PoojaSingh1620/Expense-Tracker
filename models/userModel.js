const mongoose = require('mongoose');

//schema design 
//tell this is a schema with the help of mongoose
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']

    },
    email:{
        type:String,
        required:[true, 'email is required and should be unique'],
      unique:true,
    },

 password:{
    type:String,
    required:[true,'password is required'],
 },
},
{timestamps :true}
);

//export
const userModel = mongoose.model(`users`,userSchema) // tell this is a model with the help og mongoose
module.exports =userModel // export