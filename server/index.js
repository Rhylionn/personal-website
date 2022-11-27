const express = require("express");
const path = require("path");
const cors = require("cors");
const db = require("./core/database");
const dotenv = require("dotenv");
const helmet = require("helmet");
const https = require("https");

const fs = require("fs");
dotenv.config();

const app = express();

// Define static route
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
);

// Enable cors
app.use(
  cors({
    origin: "*",
  })
);

app.use("/educations", require("./routes/educations"));
app.use("/projects", require("./routes/projects"));
app.use("/experiences", require("./routes/experiences"));

https
  .createServer(
    {
      key: fs.readFileSync("/etc/letsencrypt/live/thomasbd.site/privkey.pem"),
      cert: fs.readFileSync("/etc/letsencrypt/live/thomasbd.site/cert.pem"),
    },
    app
  )
  .listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
