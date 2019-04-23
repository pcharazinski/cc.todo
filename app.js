const mongoose = require('mongodb');
require('./models/db');

const express = require('express');
var app = express();

const port = process.env.PORT;
app.listen(port, () => {
    console.log('Połączono do serwera na porcie '+ port);
});