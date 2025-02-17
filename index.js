const port = process.env.PORT || 4000;
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const product_route = require("./routes/router");
const ConnectMongoose = require("./services/ConnectMongoose/ConnectMongoose");

// Connect to MongoDB
ConnectMongoose();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Shop Mate Running");
});

app.use("/api/product", product_route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
