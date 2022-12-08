const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/inotebook" ||
  "mongodb://mongo:S3M0jCiDKr8fmTBInUeB@containers-us-west-29.railway.app:6896";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo");
  });
};

module.exports = connectToMongo;
