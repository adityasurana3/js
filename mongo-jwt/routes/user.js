const { Router } = require("express")
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = Router()
const jwt = require("jsonwebtoken");
const { JWT_SECRETS } = require("../config");

router.post('/signup', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
        username:username
    }).then(function(value){
        if(!value){
            User.create({
                username: username,
                password: password
            }).then(function(){
                res.status(201).json({'msg':"User created"})
            }).catch(function(){
                res.status(403).json({'msg':'something went wrong'})
            })
        }
        else{
            res.json({'msg':'User already exist'})
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
    const course_id = req.params.courseId
    const course = await User.findOne({
        username: req.username
    },{
        "$push":{
            purchasedCourses: course_id
        }
    })
    res.json({'course':course})
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.username;
    console.log(username);
    const purchased_course = await Course.find({
        _id:{
            "$in": username.purchasedCourses
        }
    })
    res.json({
        'purchased_courses': purchased_course
    })
})

router.post('/signin', async (req, res) => {
    username = req.body.username;
    password = req.body.password;
    const user = await User.findOne({
        username: username,
        password: password
    })

    if (user) {
        const token = jwt.sign({username:username}, JWT_SECRETS)
        res.json({
            'token': token
        })
    } else {
        res.status(411).json({
            'msg': 'Something went wrong'
        })
    }
})

module.exports = router;