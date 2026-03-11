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

const router=require("./Routes/Route")

app.use("/", router)