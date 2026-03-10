const usermodel = require("../model/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createuser = async (req, res) => {
  try {
    const data = req.body;
    const existinguser = await usermodel.findOne({ email: data.email});
    if (existinguser) {
      return res.status(400).json({
        message: "user already exists",
      });
    }

    const newuser = new usermodel(data);
    const response = await newuser.save();
    res.status(200).json({ message: "user created", response });
  } catch (error) {
    console.log(error);
    res.status(500).json("internal error");
  }
};

exports.loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }

    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
      return res.status(400).json({
        message: "invalid password",
      });
    }

    const token = jwt.sign({ id: user._id }, "mysecretkey", {
      expiresIn: "10s",
    });

    res.json({
      message: "login successfull",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "server internal error",
    });
  }
};
