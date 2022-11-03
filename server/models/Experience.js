const mongoose = require("mongoose")

const experienceSchema = mongoose.Schema({
  image: String,
  voluntary: Boolean,
  name: String,
  date: Date,
  duration: Number,
  en: {
    subject: String,
    description: String,
    tasks: Array,
  },
  fr: {
    subject: String,
    description: String,
    tasks: Array,
  },
})

module.exports = mongoose.model("Experience", experienceSchema)
