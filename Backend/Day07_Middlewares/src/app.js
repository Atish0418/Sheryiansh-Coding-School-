const express = require('express');
const indexRoutes = require('./routes/index.routes');

const app = express();

// middleware
app.use((req, res, next)=>{
    console.log("This middleware is between app and route!");
    next()
})

// routes
app.use('/', indexRoutes);

module.exports = app; 