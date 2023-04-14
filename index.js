const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
require("dotenv").config();
connectToMongo();
const app = express();
const port = process.env.PORT || 5000;
const host = "http://localhost";
app.use(cors());
app.use(express.json());

// AVAILABLE ROUTES:

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("/", (req, res) => {
  res.send("<h1>Welcome to iNotebook backend</h1>");
});

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${host}:${port}`);
});
