const mongoose = require("mongoose")

const projectSchema = mongoose.Schema(
  {
    technologies: Array,
    repoLink: String,
    creation_date: Date,
    en: {
      title: String,
      description: String,
    },
    fr: {
      title: String,
      description: String,
    },
  },
  { collection: "projects" }
)

module.exports = mongoose.model("Project", projectSchema)
