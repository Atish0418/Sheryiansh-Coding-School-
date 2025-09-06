const express = require('express');

const app = express();

// middleware
app.use(express.json());

app.get('/home', (req, res)=>{
    res.send("Welcome to home page!");
})

app.get('/about', (req, res)=>{
    res.send("Welcome to about page!");
})

let notes= []

app.post('/notes', (req, res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.json({
        message: "Note created successfully!",
        notes: notes
    })
})

// app.post('/notes', (req, res)=>{
//     console.log(req.body);
// })


app.listen(3000, (req, res)=>{
    console.log("server is running on port 3000!")
})