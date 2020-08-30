
var express = require('express')
var router = express.Router()
const app = express();
app.use(express.json())

let publishers ={
    name:"pub1"
}

  router.get('/publishers', function (req, res) {
    res.send(publishers.name)
  })
 
  module.exports = router