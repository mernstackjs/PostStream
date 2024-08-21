import User from "../model/userModel.js";

export const Register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(404).json({
      success: false,
      message: "fadlan geli xogta lagaa rabo oo dhamays tiran",
    });
  }

  const isFound = await User.findOne({ email });
  if (isFound) {
    res.status(400).json({
      success: false,
      message: "userkan hore ayaa loo diwaan geliyey",
    });
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  res.status(201).json({
    success: true,
    message: "Userka waa la diwaan geliyey",
    user,
  });
};
