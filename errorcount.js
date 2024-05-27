const express = require("express")

const app = express()

let errorCount = 0

app.use(function(req, res, next){
    
})

app.get('/user', function(req, res){
    throw new Error("User not found")

})

app.post('/user', function(req, res){
    res.status(200).json({msg:"created the user"})
    
})

app.get('/errorCount', function(req, res){
    res.status(200).json({errorCount})
})

app.use(function(err, req, res, next){
    res.status(404).ssend({})
    errorCount += 1
})

app.listen(3001)

module.exports = app