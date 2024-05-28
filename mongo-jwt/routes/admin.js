const { Router } = require("express")
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router()

router.post("/signup", function(req, res){

});

router.post('/courses', adminMiddleware, async (req, res) => {
    
})

router.get('/courses', adminMiddleware, async(req, res) => {
    
});

router.post('/signin', function(req, res){
    
})

module.exports = router;