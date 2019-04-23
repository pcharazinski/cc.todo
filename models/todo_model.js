const mongoose = require('mongoose');

var toDoSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    task: {
        type: String, 
        required: true,
    },
    isDone: {
        type: Boolean,
        required: false,
    }

});

mongoose.model("toDo", toDoSchema);

