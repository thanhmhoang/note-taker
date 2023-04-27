const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const allRoutes = require("./controllers");
app.use(allRoutes)

app.use(express.static("public"))

app.listen(PORT,()=>{
    console.log("listening on port " + PORT)
})