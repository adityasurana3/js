const {Admin} = require('../db/index')

function adminMiddleware(req, res, next){
    const username = req.headers.username;
    const passowrd = req.headers.password;
    Admin.findOne({
        username: username,
        password: passowrd
    }).then(function(value){
        if(value){
            next()
        }
        else{
            res.status(403).json({
                msg: "Admin doesn't exist"
            })
        }
    })

}

module.exports = adminMiddleware;