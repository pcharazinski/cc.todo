const mongoose = require('mongoose');
require('./models/db');

const express = require('express');

const todo_controller = require('./contollers/todo_controller');
var app = express();

const port = process.env.PORT;
app.listen(port, () => {
    console.log('Połączono do serwera na porcie '+ port);
});


app.use('./', todo_controller)