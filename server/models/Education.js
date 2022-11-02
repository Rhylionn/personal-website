const mongoose = require("mongoose")

const educationSchema = mongoose.Schema(
  {
    img: String,
    date: Date,
    en: {
      name: String,
      description: String,
      courseWork: Array,
    },
    fr: {
      name: String,
      description: String,
      courseWork: Array,
    },
  },
  { collection: "educations" }
)

module.exports = mongoose.model("Education", educationSchema)
