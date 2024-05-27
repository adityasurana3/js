const express = require("express")

const app = express()

let reqCount = 0

function request(req, res, next){
    reqCount +=1;
    next()
}

app.use(request)

app.get('/user', function(req, res){
    res.status(200).json({name:'john'})
})

app.post('/user', function(req, res){
    res.status(200).json({msg:"created dummy user"})
})

app.get('/requestCount', function(req, res){
    res.status(200).json({ reqCount })
})


app.listen(3001)

module.exports = app