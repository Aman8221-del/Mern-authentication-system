const express = require("express");
const router = express.Router();
const model = require("../model/schema");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt")

router.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    const existinguser = await model.findOne({ email: data.email });
    if (existinguser) {
      return res.status(400).json({ message: "email already used" });
    }

    const newuser = new model(data);
    const response = await newuser.save();
    res.status(200).json({ message: "user created", response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
   const { email, password } = req.body;
    const user = await model.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const passwordmatch = await bcrypt.compare(password, user.password);
    if (!passwordmatch) {
      return res.status(404).json({ message: "invalid password" });
    }
    const token = jwt.sign({ id: user._id }, "mysecretkey", {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({
        message: "login successfully",
        token,
        user: { id: user._id, email: user.email },
      });
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"Internal server error"})
  }
});

module.exports = router;

// exports.loginuser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await usermodel.findOne({ email });
//     if (!user) {
//       return res.status(400).json({
//         message: "user not found",
//       });
//     }

//     const ismatch = await bcrypt.compare(password, user.password);
//     if (!ismatch) {
//       return res.status(400).json({
//         message: "invalid password",
//       });
//     }

//     const token = jwt.sign({ id: user._id }, "mysecretkey", {
//       expiresIn: "10s",
//     });

//     res.json({
//       message: "login successfull",
//       token,
//       user: {
//         id: user._id,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "server internal error",
//     });
//   }
// };

// exports.updateruser = async(req,res)=>{
//   try {
//      const userid=usermodel.findById(req.params.id)
//      const updateddata=req.body

//      const response=await usermodel.findByIdAndUpdate(userid, updateddata,{
//       new:true,
//       runValidators:true
//      })
//      if(!response){
//       res.status(404).json({message:"user not found"})
//      }
//     res.status(200).json({message:"data updated successfully", response})

//   } catch (error) {
//   console.log(error)
//   res.status(500).json({message:"internal server error"})
//   }
// }
