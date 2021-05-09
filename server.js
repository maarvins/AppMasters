const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./src/routes");

mongoose.connect("mongodb://localhost:27017/AppMasters", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify:false
}, function(err){
  if(err){
    console.log(err)
  }else{
    console.log("MongoDB Conectado Com sucesso!")
  }
})

app.use(express.json());
app.use(routes);



app.listen(3000, function(){
  console.log("Server is running on port 3000.")
});