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
    res.send('Welcome to online shopping');

})
let c=products.length;
const productbaseur1="/products";

//1-get all products
app.get(productbaseur1, function(req,res) {
 res.json(products);
})

//2-get product by name
app.get(productbaseur1+'/:name',function(req,res)
{
    let newp=req.params.name;
    const product=products.find(element=>element.name===newp)
res.send(product);

})
//3-get product by id
app.get(productbaseur1+'/:id',function(req,res)
{
    let newp=req.params.id;
    const product=products.find(element=>element.id===newp)
    res.send(product);

})
//4-delete by name
app.delete(productbaseur1+'/:name',function(req,res)
{
let itemName=(req.params.name);
const product=products.find(element=> element.name=== itemName);
const index=products.indexOf(product);
products.splice(index,1);
res.json( products)
})

//5-add products and return product with id
app.post(productbaseur1 , function(req,res){
   const product={
       id:products.length+1,
       name:req.body.name,
       price:req.body.price
   } 
   products.push(product);
   res.json(products); 
})

app.listen(3000);
