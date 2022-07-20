const express = require("express");
const router = express.Router();
const {
  getTop10Films,
  getTop10FilmsByBranch,
  getBranchNames,
} = require("../services/task3.dal");

router.get("/", async (req, res) => {
  var branches = await getBranchNames();
  res.render("task3", { branches });
});

router.get("/:id", async (req, res) => {
  var branches = await getBranchNames();
  var top10Films = await getTop10FilmsByBranch(req.params.id);
  res.render("task3", { branches, top10Films });
});

module.exports = router;
