const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
    var maill=(req.body.emaill);
    console.log(maill);
    res.send("THE PAYMENT BY THE USER WAS SUCCESSFUL ; enlistedmail:"+maill);
})
app.listen(3000,function(){
    console.log("The port 3000 is working fine")
})