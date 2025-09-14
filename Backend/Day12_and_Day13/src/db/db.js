const mongoose = require('mongoose');

function connectDB(){
   mongoose.connect(process.env.MONGODB_URI)
   .then(()=>{
    console.log("connected to DB!");
   }) 
   .catch(err=>{
    console.log("Not connected to DB", err);
   })
}


module.exports = connectDB;