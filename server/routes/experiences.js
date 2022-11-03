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

router.get("/profesional", (req, res, next) => {
  res.setHeader("Content-Type", "application/json")

  Experience.find({ voluntary: false })
    .lean()
    .exec((err, docs) => {
      res.end(JSON.stringify(docs))
    })
})

router.get("/voluntary", (req, res, next) => {
  res.setHeader("Content-Type", "application/json")

  Experience.find({ voluntary: true })
    .lean()
    .exec((err, docs) => {
      res.end(JSON.stringify(docs))
    })
})

router.get("/latest", (req, res, next) => {
  res.setHeader("Content-Type", "application/json")

  Experience.find()
    .sort({ date: -1 })
    .lean()
    .exec((err, docs) => {
      res.end(JSON.stringify(docs))
    })
})

module.exports = router
