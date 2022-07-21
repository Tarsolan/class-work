/********************************************************** 
Author: Alex Ridgeley
Date: July 2022
Objective: Full Stack Development & Database Design QAP 3
***********************************************************/

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
global.DEBUG = true;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

const question1Router = require("./routes/task1");
const question2Router = require("./routes/task2");
const question3Router = require("./routes/task3");

app.use("/task1", question1Router);
app.use("/task2", question2Router);
app.use("/task3", question3Router);

app.get("/", async (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
