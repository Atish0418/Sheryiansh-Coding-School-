const express = require('express');
 
const router = express.Router();

router.use((req, res, next)=>{
    console.log("This middleware is between router and api");
    next()
})


// api
router.get('/', (req, res)=>{
    res.json({
        messsage: "You shoud have to study!"
    })
})

module.exports = router;
