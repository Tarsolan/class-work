const express = require("express");
const router = express.Router();
const {
  getTop10Films,
  getTop10FilmsByBranch,
} = require("../services/task3.dal");

router.get("/", async (req, res) => {
  // var top10Films = await getTop10Films();
  res.render("task3");
});

router.get("/:name", async (req, res) => {
  var top10Films = await getTop10FilmsByBranch(req.params.name);
  res.render("task3", { top10Films });
});

module.exports = router;
