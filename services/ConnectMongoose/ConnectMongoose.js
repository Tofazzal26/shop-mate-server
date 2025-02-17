const mongoose = require("mongoose");

const ConnectMongoose = async () => {
  try {
    if (!process.env.DB_USER && !process.env.DB_PASS) {
      console.error(" --- ## --- MONGODB_URI is not set in env --- ## ---");
      process.exit(1);
    }

    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rgxjhma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const res = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${res.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = ConnectMongoose;
