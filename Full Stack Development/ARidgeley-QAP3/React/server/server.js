/************************** 
Author: Alex Ridgeley
Date: July 2022
Objective: Full Stack Development & Database Design QAP 3
****************************/

const express = require("express");
const app = express();
const port = 3001;
global.DEBUG = true;

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

const question1Router = require("./routes/task1");
const question2Router = require("./routes/task2");
const question3Router = require("./routes/task3");

app.use("/task1", question1Router);
app.use("/task2", question2Router);
app.use("/task3", question3Router);

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
