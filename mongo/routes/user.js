const { Router } = require("express")
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = Router()

router.post('/signup', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
        'username':username
    }).then(function(value){
        if(!value){
            User.create({
                'username': username,
                'password': password,
            }).then(function(){
                res.status(201).json({'msg': 'User created'})
            })
            .catch(function(){
                res.status(400).json({'msg': 'Something went wrong'})
            })
        }
        else{
            res.json({'msg':"user already exist"})
        }
        
    })
})

router.get('/courses', async (req, res)=>{
    const courses = await Course.find({})
    res.json({
        'courses': courses
    })
})

router.post('/courses/:courseId', userMiddleware, async (req, res)=>{
    const course_id = req.params.courseId;
    const username = req.headers.username;
    
    await User.updateOne({
        username: username
    },{
        '$push':{
            purchasedCourses: course_id
        }
    });
    res.json({'msg':"purchased"})
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({'username':req.headers.username})
    const course = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({'course':course})
})

module.exports = router;