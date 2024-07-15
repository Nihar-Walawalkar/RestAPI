const mongoose = require("mongoose");

const connectDB = (uri) => {
  // console.log("connect database");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
