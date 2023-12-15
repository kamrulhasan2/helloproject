
const express = require('express');
const app = express()

app.set("view engine","ejs");
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.render('index');
})
app.get('/profile',(req,res) =>{
    res.send('Hello I am from profile')
})
app.listen(3000,()=>{
    console.log("listen the post ")
})