const { Router } = require("express")
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = Router()

router.post('/signup', function(req, res){
    
})

router.get('/courses', async (req, res)=>{
    const courses = await Course.find({})
    res.json({
        'courses': courses
    })
})

router.post('/courses/:courseId', userMiddleware, async (req, res)=>{
    
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    
})

router.post('/signin', function(req, res){
    
})

module.exports = router;