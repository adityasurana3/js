const { Router } = require("express")
const adminMiddleware = require("../middleware/admin")
const router = Router()

router.post("/signup", function(){

});

router.post('/courses', adminMiddleware, function(req, res){

})

router.get('/courses', adminMiddleware, function(req, res){

});

module.exports = router;