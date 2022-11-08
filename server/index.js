const express = require("express")
const path = require("path")
const cors = require("cors")
const db = require("./core/database")
const dotenv = require("dotenv")
const helmet = require("helmet")
dotenv.config()

const app = express()

// Define static route
app.use("/static", express.static(path.join(__dirname, "public")))

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
)

// Enable cors
app.use(
  cors({
    origin: process.env.CLIENT,
  })
)

app.use("/educations", require("./routes/educations"))
app.use("/projects", require("./routes/projects"))
app.use("/experiences", require("./routes/experiences"))

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
