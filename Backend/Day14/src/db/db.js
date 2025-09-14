const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected to DB!")
    })
    .catch(err=>{
        console.log("Not Connected to DB!", err)
    })
}

module.exports = connectDB;