const express = require("express")
const path = require("path")
const cors = require("cors")
const db = require("./core/database")

const app = express()

// Define static route
app.use("/static", express.static(path.join(__dirname, "public")))

// Enable cors
app.use(cors())

app.use("/educations", require("./routes/educations"))
app.use("/projects", require("./routes/projects"))

app.listen(5000, () => {
  console.log("Listening on port 5000")
})
