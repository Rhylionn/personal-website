const express = require("express");
const router = express.Router();

const Education = require("../models/Education");

router.get("/", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");

  Education.find()
    .lean()
    .exec((err, docs) => {
      res.end(JSON.stringify(docs));
    });
});

router.get("/latest", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");

  Education.find()
    .sort({ date: -1 })
    .lean()
    .exec((err, docs) => {
      res.end(JSON.stringify(docs));
    });
});

module.exports = router;
