const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
    "mongodb+srv://admin:"+
        process.env.MONGO_PASSWORD+
        "@cluster0.pyvfpn0.mongodb.net/?retryWrites=true&w=majority"
)

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}  