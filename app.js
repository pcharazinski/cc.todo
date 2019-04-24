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
var express_handlebars = require('express-handlebars');
var body_parser = require('body-parser');