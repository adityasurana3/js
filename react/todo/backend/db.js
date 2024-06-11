const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ghuiianishh:ghuiianishh%40123@cluster0.52x1rs1.mongodb.net/')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    compleated: Boolean,
})


const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}