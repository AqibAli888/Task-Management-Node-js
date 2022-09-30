const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
app.use(express.json());


app.get("/heelo",function(req,res){
    res.json({
        success:true,data:"welocme"
    });

})


app.listen(5000,function(){
    console.log("server is started at 5000")
});