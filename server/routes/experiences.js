const express = require("express")
const router = express.Router()

const Experience = require("../models/Experience")

router.get("/", (req, res, next) => {
  res.setHeader("Content-Type", "application/json")

  Experience.find()
    .lean()
    .exec((err, docs) => {
      res.end(JSON.stringify(docs))
    })
})

module.exports = router
