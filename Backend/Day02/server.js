const express = require('express');

const app = express();

app.get('/home', (req, res)=>{
    res.send("Welcome to home page!")
})

app.get('/about', (req, res)=>{
    res.send("About page")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000!")
})
