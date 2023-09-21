const mongoose = require('mongoose');


const NotesSchema = new Schema({
    title :{
        type : String,
        require : true
    },
    description :{
        type : String,
        require : true,
    },
    tag :{
        type : String,
        default : "general"
    },
    date :{
        type : date,
        default : date.now
    }
  });
module.export = mongoose.model('notes',NotesSchema)