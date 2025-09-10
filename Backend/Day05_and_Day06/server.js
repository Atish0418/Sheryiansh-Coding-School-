const express = require('express');
const connectDB = require('./src/db/db')
const noteModel = require('./src/models/note.model');

const app = express();
app.use(express.json());

connectDB();

// Create operation
app.post('/notes', async(req, res)=>{
    const {title, content} = req.body;
    console.log(title, content);

    const note = await noteModel.create({
        title, content
    })

    res.json({
        message:"note created successfully!",
        note
    })
})


// Read operation
app.get('/notes', async(req, res)=>{
    const notes = await noteModel.find();

    res.json({
        message:"Notes fetched successfully!",
        notes
    })
})

// Delete operation
app.delete('/notes/:id', async(req, res)=>{
    const noteId = req.params.id;

    await noteModel.findOneAndDelete({
        _id : noteId
    })

    res.json({
        message:"note deleted successfully!"
    })
})

// Update operation
app.patch('/notes/:id', async(req, res)=>{
    const noteId = req.params.id;

    const {title, content} = req.body;

    await noteModel.findOneAndUpdate({
        _id : noteId
    }, {
        title:title,
        content:content
    })

    res.send({
        message: "Title and content updated successfully!"
    })
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000!");
})