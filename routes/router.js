const express = require("express");
const router = express.Router();
const { testing } = require("../controllers/products");

router.get("/AllTesting", testing);

module.exports = router;
