const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
require("dotenv").config();
connectToMongo();
const app = express();
const port = process.env.PORT;
const host = "https://notebook-backend.up.railway.app";
app.use(cors());
app.use(express.json());

// AVAILABLE ROUTES:

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
// app.use("/", (req, res) => {
//   res.send("Welcome to iNotebook backend");
// });

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${host}:${port}`);
});
