const mongoose = require('mongodb');
const express = require('express');

require('./models/db');

var app = express();

const port = process.env.PORT;
app.listen(port, () => {
    console.log('Połączono do serwera na porcie '+ port);
});
