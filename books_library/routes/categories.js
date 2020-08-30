
var express = require('express')
var router = express.Router()
const app = express();
app.use(express.json())

  router.get('/categories', function (req, res) {
    res.send('categories home page')
  })
  module.exports = router