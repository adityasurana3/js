const express = require('express')
const { updateTodo } = require('./types')
const app = express()
const {createTodo} = require('./types')
const { todo } = require('./db')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.post('/todo', async (req, res)=>{
    const createPayload = req.body
    const parsedPaylaod = createTodo.safeParse(createPayload);
    console.log(parsedPaylaod);
    if(!parsedPaylaod.success){
        res.status(411).json({
            msg:"You send the wrong input"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        compleated: false
    })
    res.json({
        msg: 'todo created'
    })
})

app.get('/todos', async (req, res)=>{
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put('/completed', async (req, res)=>{
    const id = req.body;
    const parsedId = updateTodo.safeParse(id);
    if(!parsedId.success){
        res.status(411).json({
            msg:"ID does not exist"
        })
        return;
    }
    await todo.update({
        _id: req.bodu.id
    },{
        compleated:true
    })
    res.json({
        msg:"Todo marked as compleated"
    })
})

app.listen(3001)