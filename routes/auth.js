const router = require("express").Router();
const User = require("./models/User");

//REGISTER
router.get("/register", async (req, res) => {
  try {
    const user = await new User({
      username: "kara",
      email: "k@y.com",
      password: "123456",
    });
    await user.save();
    res.send("ok");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
