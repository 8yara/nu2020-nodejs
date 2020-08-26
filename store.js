const express=require('express');
const app = express();
app.use(express.json())

let booklist=[
{isbn:1010,title:"book1",publisher:"pub1"},
{isbn:1020,title:"book2",publisher:"pub2"},
{isbn:1030,title:"book3",publisher:"pub3"},
{isbn:1040,title:"book4",publisher:"pub4"},
{isbn:1050,title:"book5",publisher:"pub5"},
{isbn:1060,title:"book6",publisher:"pub6"},
]
const booksdefault="/books";
//get all the book list
app.get(booksdefault,function(req,res)
{
    res.json(booklist);
})
//get book by name
app.get(booksdefault+'/:name', function(req,res)
{
    let bookname=req.params.name;
    const found=booklist.find(b=>b.title===bookname);
    res.send(found);

})
//get book by publisher**
app.get(booksdefault+'/:id',function(req,res)
{
    let bookid=parseInt(req.params.isbn);
    const found=booklist.find(b=>b.isbn===bookid);
    res.send(found);
})


//add a new book and returning the whole book list
app.put(booksdefault,function(req,res)
{
    const book={
        isbn:req.body.isbn,
        title:req.body.title,
        publisher:req.body.publisher

    }
    booklist.push(book);
    res.json(booklist)
})
//delete book by it's name
app.delete(booksdefault+'/:name',function(req,res)
{
    let bookname=req.params.name;
    const index= booklist.findIndex(b=>b.title===bookname);
    booklist.splice(index,1);
    res.json(booklist)

})
//update product's publisher and isbn by it's name
app.put(booksdefault+'/:title',function(req,res)
{   let bookname=req.params.title;
    const editbook= booklist.find(b=>b.title===bookname);
     editbook.isbn=req.body.isbn;
     editbook.publisher=req.body.publisher;
    res.send(editbook)
})

app.listen(8000)