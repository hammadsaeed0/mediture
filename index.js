require("dotenv").config();
require("./config/db")();

const express = require("express");
const path = require("path");
//const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");


// const User = require("./models/user");

const app = express();
const port = process.env.PORT || 5000;

// app.set("view engine", "ejs");
app.use(cors());
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cookieParser());


// adding custom router
const { Router } = require("./router");
Router(app);


app.get("/", (req, res) => {
    res.send("hello worker")
})

app.listen(port, () => {
    console.log("connected!");
});
