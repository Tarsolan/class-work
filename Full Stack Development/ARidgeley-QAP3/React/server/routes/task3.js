const express = require("express");
const router = express.Router();
const {
  getTop10Films,
  getTop10FilmsByBranch,
  getBranchNames,
} = require("../services/task3.dal");

router.get("/", async (req, res) => {
  DEBUG && console.log(req.url);
  var response = await getTop10Films();

  res.status(200).send(response);
});

router.get("/branches", async (req, res) => {
  DEBUG && console.log(req.url);
  var response = await getBranchNames();

  res.status(200).send(response);
});

router.get("/:name", async (req, res) => {
  var response = await getTop10FilmsByBranch(req.params.name);

  res.status(200).send(response);
});

module.exports = router;
