const express = require("express")

const app = express()



let numberOfRequestForUser = {}

setInterval(()=>{
    numberOfRequestForUser = {}
}, 1000)

app.use(function(req, res, next){
    const userId = req.headers['user-id'];
    if(numberOfRequestForUser[userId]){
        numberOfRequestForUser[userId] += 1;
        if (numberOfRequestForUser[userId]>5){
            res.status(404).send("to many request")
        }
        else{
            next()
        }
    }
    else{
        numberOfRequestForUser[userId] = 1;
        next()
    }
})

app.listen(3001)

module.exports = app