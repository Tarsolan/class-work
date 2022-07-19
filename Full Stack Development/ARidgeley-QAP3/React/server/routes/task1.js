const express = require("express");
const router = express.Router();
const { getRentalInfo } = require("../services/task1.dal");

// router.get("/", async (req, res) => {
//   res.render("task1");
// });

// if undefined, invalid email

router.post("/", async (req, res) => {
  let response = await getRentalInfo(req.body);
  DEBUG && console.log(response);

  res.status(200).send(response);
});

module.exports = router;
