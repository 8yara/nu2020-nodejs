const express=require('express');
const app = express();
app.use(express.json())

let products = [
    {id:1,name:"Noodless", price: 10.5},
    {id:2,name:"Milk", price: 20.5},
    {id:3,name:"Egg", price: 1.5},
    {id:4,name:"Rice", price: 10.5},
    {id:5,name:"Pepsi", price: 5.0},
];
app.get('/', function(req,res){
    res.send('hello world');

})
let c=products.length;
const productbaseur1="/products";
//get all products
app.get(productbaseur1, function(req,res) {
 res.json(products);

})
//add products and return product with id
app.post(productbaseur1 , function(req,res){
   const product={
       id:products.length+1,
       name:req.body.name,
       price:req.body.price
   } 
   res.json(products); 
})

app.listen(3000);
