const { Router } = require("express")
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const jwt = require('jsonwebtoken');
const {JWT_SECRETS} = require('../config')


const router = Router()

router.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({
        username:username
    }).then(function(value){
        if(!value){
            Admin.create({
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

});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({
        "msg": "Course created successfully", course_id: newCourse._id
    }) 
})

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find({})
    res.json({
        'course': courses
    })
});

router.post('/signin', async (req, res) => {
    username = req.body.username;
    password = req.body.password;
    const user = await Admin.findOne({
        username: username,
        password: password
    })
    if (user){
        const token = jwt.sign({username: username}, JWT_SECRETS);
        res.json({
            'token': token
        })
    }
    else{
        res.status(411).json({
            'msg': 'Something went wrong'
        })
    }
})

module.exports = router;