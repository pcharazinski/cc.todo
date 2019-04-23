const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://team:<team>@todo-cexou.mongodb.net/test?retryWrites=true', 
{useNewUrlParser: true}, (err)=>{
  if(!err) { console.log('Połączono z bazą danych')}
  else{console.log('Wystąpił błąd: ' + err)}
});


require('./todo_model.js');
