const express = require('express');

const app = express();

// middleware
app.use(express.json());

let notes = [];

// POST
app.post('/notes', (req, res)=>{

    console.log(req.body);
    notes.push(req.body);
    res.json({
        message:"Note created successfully!",
        notes: notes
    })

})

// GET
app.get('/notes', (req, res)=>{
    res.json(notes)
})

// DELETE
app.delete('/notes/:index', (req, res)=>{
    const index = req.params.index;
    delete notes[index];
    res.json({
        message: "Note deleted successfully!"
    })
})


// PATCH -> update
app.patch('/notes/:index', (req, res)=>{
    const index = req.params.index;
    const {title, description} = req.body;

    notes[index].title = title;
    notes[index].description = description;
    res.json({
        message:"note updated successfully!"
    })
})

app.listen(3000, (req, res)=>{
    console.log("Server is running on port 3000!");
})