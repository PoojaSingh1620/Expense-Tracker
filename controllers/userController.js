const userModel = require("../models/userModel");
//login callback function
const loginController = async (req, res) => {
  try {
    const {email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return  res.status(404).send("User not found");
    }
    res.status(200).json({
        success:true,
        user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const registerController = async(req,res) => {
    try{
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
        success:true,
        newUser,
    });
    console.log("24");
    }catch(error) {
      console.log("23");
        res.status(400).json({
          success: false,
        
          error

        });
        console.log(error);
        console.log("23");
}
};

module.exports = { loginController, registerController };
