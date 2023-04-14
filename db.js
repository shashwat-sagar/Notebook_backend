const mongoose = require("mongoose");
const mongoURI = process.env.DB || "mongodb://localhost:27017/inotebook";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo");
  });
};

module.exports = connectToMongo;
