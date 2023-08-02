var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var urlencodedparser = bodyParser.urlencoded({ extended: false });
app.get('/welcome',function(req,res){
    res.send(`
    <h1><span style="color: blue;">WELCOME</span> Header</h1>
    <form >
    <a href="/filldetails">fill my details</a><br>
    </form>
  `);
});
app.get('/filldetails',function(req,res){
    res.send(`
    <h1>Tell Us about you</h1>
    <form action="/submit" method="POST">
      Your first name:<input type="text" name="firstname"><br>
      your lastname:<input type="text" name="lastname"><br>
       <p>are you currently working ??</p>:<input type="checkbox"><br>
      <button type="submit">Submit</button>
    </form>
  `);
});
///route for handling form submisiion
app.post('/submit',urlencodedparser,function(req,res){
    response = {  
        firstname:req.body.firstname ,  
        lastname:req.body.lastname 
    };      
    res.end(JSON.stringify(response));
}).listen(8028,()=>{
    console.log("listening");
});