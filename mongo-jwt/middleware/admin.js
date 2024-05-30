const {Admin} = require('../db/index')
const {JWT_SECRETS} = require("../config")
var jwt = require("jsonwebtoken")


function adminMiddleware(req, res, next){
    const token = req.headers.authorization;
    const words = token.split(" ")
    const jwtToken = words[1]
    const decodedValue = jwt.verify(jwtToken, JWT_SECRETS);
    if (decodedValue.username) {
        next()
    } else {
        res.status(403).json({
            'msg': 'You are not authonticated'
        })
    }

}

module.exports = adminMiddleware;