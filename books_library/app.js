var express = require('express')
var router = express.Router()
const app = express();

var books = require('../routes/books')
app.use('/books', books);

var categories = require('../routes/categories')
app.use('/categories',categories);

var publishers = require('../routes/publishers')
app.use('/publishers',publishers);

app.listen(3000);