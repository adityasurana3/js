const { Router } = require("express")
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router()

router.post("/signup", function(req, res){
    const username = req.body.username;
    const passowrd = req.body.password;

    Admin.findOne({
        username: username
    })
    .then(function(value){
        if(!value){
            Admin.create({
                username: username,
                password: passowrd
            }).then(function(){
                res.status(201).json({'msg': 'Admin created'})
            }).catch(function(){
                res.status(400).json({'msg': 'User not created'})
            })
        }
        else{
            res.json({'msg': 'User already exist'})
        }
    })
    // .catch(function(value){
    //     console.log("Admin does not exist")
    // })
    // Admin.create({
    //     username: username,
    //     password: passowrd
    // }).then(function(){
    //     res.status(201).json({'msg': 'User created'})
    // }).catch(function(){
    //     res.status(400).json({'msg': 'User not created'})
    // })
    
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

router.get('/courses', adminMiddleware, async(req, res) => {
    const courses = await Course.find({})
    res.json({
        'course': courses
    })
});

module.exports = router;