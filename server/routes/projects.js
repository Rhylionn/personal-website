const express = require("express")
const router = express.Router()

const Project = require("../models/Project")

router.get("/", (req, res, next) => {
  res.setHeader("Content-Type", "application/json")

  Project.find()
    .lean()
    .exec((err, docs) => {
      res.end(JSON.stringify(docs))
    })
})

router.get("/latest", (req, res, next) => {
  res.setHeader("Content-Type", "application/json")

  Project.find()
    .sort({ creation_date: -1 })
    .lean()
    .exec((err, docs) => {
      res.end(JSON.stringify(docs))
    })
})

module.exports = router
