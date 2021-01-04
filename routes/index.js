const express = require("express");
const router = express.Router();
const { getUserToken, requireAuth } = require("../auth");

router.get("/", async (req, res) => {
  res.render("index");
});

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.get("/coming-soon", (req, res) => {
  res.render("coming-soon");
});

router.get("/create", (req, res) => {
  res.render("create-article");
});

router.get("/testpage", (req, res) => {
  res.render("article-view");
});

module.exports = router;
