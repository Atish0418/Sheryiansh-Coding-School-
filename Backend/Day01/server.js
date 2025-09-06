const http = require('http');

// server creating
const server = http.createServer((req,res)=>{
    res.end("hello from server")
});


// server starting
server.listen(3000, ()=>{
    console.log("Server is running on port 3000!!!");
} )