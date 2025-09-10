const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect("mongodb+srv://adhavatish04:p7y2c3gvBsCqda9L@cluster0.tzmkbb0.mongodb.net/connect-DB")
    .then(()=>{
        console.log("Connected to DB!");
    }).catch(err=>{
        console.log("not connected to DB!", err)
    })
}

module.exports = connectDB;