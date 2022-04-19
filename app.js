const express = require('express');
const path = require("path");

const app = express();

//app.use("/static",express.static("public"));
app.use(express.static("public"));


//levantar el server
app.listen(3030, () =>{ 
    console.log("server corriendo puerto 3030");
})

//rutas
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})
app.post("/", (req,res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get("/register", (req,res) => {
    res.sendFile(path.join(__dirname,"/views/register.html"))
})
app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname,"/views/login.html"))
})