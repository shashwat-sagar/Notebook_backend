const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://shashwatsagar19:6CqCdeHbAInEzlT7@cluster0.vdohf3f.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo");
  });
};

module.exports = connectToMongo;
