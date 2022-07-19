const express = require("express");
const router = express.Router();

const { getOverdueFilms, verifyPassword } = require("../services/task2.dal");

// router.get("/", async (req, res) => {
//   res.render("task2");
// });

router.post("/", async (req, res) => {
  let response = await verifyPassword(req.body);
  DEBUG && console.log(response);

  res.status(200).send(response);
});

module.exports = router;
