const express = require("express")
var cors = require('cors')

const app = express()

app.use(cors());

app.get('/', function(req, res){
    const principle =  parseInt(req.query.principle);
    const rate =  parseInt(req.query.rate);
    const time =  parseInt(req.query.time);
    const interest = (principle * rate + time);
    const total = principle + interest
    res.send({
        "total":total,
        "interest":interest
    })
})

app.listen(3001)