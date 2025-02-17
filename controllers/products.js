const testing = async (req, res) => {
  try {
    res.status(200).json({ msg: "Testing Successfully" });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { testing };
