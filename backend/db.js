const mongoose = require('mongoose');

const connectToMongo = ()=>{
    // mongoose.connect(mongoURI, ()=>{
    //     console.log("Connected to Mongo Succefully");
    // })
        mongoose.connect('mongodb://localhost:27017/inotebook', { useNewUrlParser: true })
        .then(() => {
            console.log('MongoDB connected successfully');
        })
        .catch((err) => {
            console.error('MongoDB connection error: ' + err);
    });
}
module.exports = connectToMongo;