const express = require("express");
const path = require("path");
const cors = require("cors");
const db = require("./core/database");
const dotenv = require("dotenv");
const helmet = require("helmet");
const https = require("https");
const http = require("http");

const fs = require("fs");
dotenv.config();

const app = express();

// Define static route
app.use("/static", express.static(path.join(__dirname, "public")));

let options = {
  key: fs.readFileSync("/etc/letsencrypt/live/thomasbd.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/thomasbd.com/cert.pem"),
};

app.use(helmet());

// Enable cors
app.use(
  cors({
    origin: "*",
  })
);

app.use("/educations", require("./routes/educations"));
app.use("/projects", require("./routes/projects"));
app.use("/experiences", require("./routes/experiences"));

https.createServer(options, app).listen(process.env.PORT);
