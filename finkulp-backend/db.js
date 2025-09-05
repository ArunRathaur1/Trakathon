const mongoose = require("mongoose");
require('dotenv').config();
const uri =
  "mongodb+srv://indreshverma:indresh@cluster0.z4mrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connect = async () => {
  await mongoose.connect(uri);
  console.log("connected to Mongoose");
};

module.exports = connect;
