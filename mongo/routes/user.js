const { Router } = require("express")
const userMiddleware = require("../middleware/user")
const router = Router()

router.post('/signup', function(req, res){

})

router.get('/courses', (req, res)=>{

})

router.post('/courses/:courseId', userMiddleware, (req, res)=>{

})

router.get('/purchasedCourses', userMiddleware, (req, res) => {

})

module.exports = router;