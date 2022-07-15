const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
global.DEBUG = false;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Access-Control-Allow-Headers"
//   );
//   next();
// });

const question1Router = require("./routes/task1");
const question2Router = require("./routes/task2");
const question3Router = require("./routes/task3");

app.use("/task1", question1Router);
app.use("/task2", question2Router);
app.use("/task3", question3Router);

app.get("/", async (req, res) => {
  res.render("index");
});

// TO DO
// View Mission

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
