const mongoose = require('mongoose');


const UserSchema = new Schema({
    name :{
        type : String,
        require : true
    },
    email :{
        type : String,
        require : true,
        unique : true
    },
    password :{
        type : String,
        require : true
    },
    date :{
        type : date,
        default : date.now
    }
  });
module.export = mongoose.model('user',UserSchema)