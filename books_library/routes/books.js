
var express = require('express')
var router = express.Router()
const app = express();
app.use(express.json())

let book ={
    isbn:123456,
    title:"book1",
    publishers:{
        name:"pub1"
    },
     year:1990,
     categories:{
         title:"category1",
         parentCategory:"category2"
     },
     author:{
         username:"user1"
     },
     price:200
}
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
  // define the home page route
  router.get('/', function (req, res) {
    res.send('books library home page')
  })
 
  module.exports = router