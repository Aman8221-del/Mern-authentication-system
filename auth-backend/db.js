const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/authentaion-project-database";
mongoose.connect(url);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("database connected")
})
db.on('disconnected',()=>{
    console.log("database disconnected")
})
db.on("error",(error)=>{
    console.log(error)
})

module.exports = db;
