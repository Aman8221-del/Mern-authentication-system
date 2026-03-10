const express = require("express");
const cors = require("cors");
const db = require("./db");

app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen("1000", (res, req) => {
  console.log("server started at 1000");
});

const controller = require("./controllers/controllers");

app.post("/signup", controller.createuser);

app.post("/login", controller.loginuser)