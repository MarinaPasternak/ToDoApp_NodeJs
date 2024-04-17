const express = require('express');
const toDoController = require('./controllers/toDoController');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

toDoController(app);
app.listen(3000);
