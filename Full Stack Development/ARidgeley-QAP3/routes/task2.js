const express = require("express");
const router = express.Router();

const { getOverdueFilms, verifyPassword } = require("../services/task2.dal");

router.get("/", async (req, res) => {
  res.render("task2");
});

router.post("/", async (req, res) => {
  let verified = await verifyPassword(req.body);
  if (verified === 0) {
    let overdueFilms = await getOverdueFilms(req.body);
    DEBUG && console.log(overdueFilms);
    res.render("task2", { overdueFilms });
  } else if (verified === 2) {
    let message = "Invalid Username. Please try again.";
    res.render("task2", { message });
  } else {
    let message = "Invalid Password. Please try again.";
    res.render("task2", { message });
  }
});

module.exports = router;
