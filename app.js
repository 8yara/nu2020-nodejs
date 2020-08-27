const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});
const express=require('express');
const app = express();
app.use(express.json())

//https://mongoosejs.com/docs/guide.html#_id
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});

const Product = mongoose.model("Product",productSchema);

//CRUD
//create, read, update, delete
//queries documentation
//https://mongoosejs.com/docs/queries.html


//create  
const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "dummy product 1",
    price: 10.5
  });

  product
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });

//read
//get product by id
app.get('/products/:id',function(req,res)
{  
 Product.findOne({_id:req.params.id})
.exec()
.then(prod => {
       console.log("product: "+prod.name+", price: "+prod.price);
       res.send(prod);
      })
.catch(err => {
  console.log(err);
});

})

    //update
    //edit product by id

    app.post('/products/:id', function(req,res){
      let id=req.params.id;
      Product.update({ _id: id },{price:req.body.price})
      .exec()
      .then(result => {
             console.log(result);
             res.send(p=>p._id===id); 
      })
      .catch(err => {
        console.log(err);
      });
     
     
   })
   
    
    //delete
    // remove product by id
    app.delete('/products/:id',function(req,res)
{ Product.remove({_id:req.params.id})
.exec()
.then(result => {
       console.log(result);
       res.send(result);
})
.catch(err => {
  console.log(err);
});

})
   



//list all products(find all products)
app.get('/products', function(req,res) {
Product.find()
    .exec()
    .then(prod => {
        for(i=0;i<prod.length;i++)
           console.log(prod[i].name+", id: "+prod[i]._id+" price:"+prod[i].price);
           res.send(prod);

    })
    .catch(err => {
      console.log(err);
    });
  })
    app.listen(3000);