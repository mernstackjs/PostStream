import jwt from "jsonwebtoken";
import User from "../src/model/userModel.js";

export async function authentication(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No access token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

    const user = await User.findById(decoded.ssid);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
}
