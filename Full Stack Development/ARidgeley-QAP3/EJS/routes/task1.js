const express = require("express");
const router = express.Router();
const { getRentalInfo } = require("../services/task1.dal");

router.get("/", async (req, res) => {
  res.render("task1");
});

router.post("/", async (req, res) => {
  var rentalInfo = await getRentalInfo(req.body);
  DEBUG && console.log(rentalInfo);
  if (rentalInfo[0] != undefined) {
    res.render("task1", { rentalInfo });
  } else {
    let message = "Invalid user email. Please try again.";
    res.render("task1", { message });
  }
});

module.exports = router;
