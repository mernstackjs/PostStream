import jwt from "jsonwebtoken";

export function generateToken(userId) {
  return jwt.sign({ ssid: userId }, process.env.JWT_SECRET_TOKEN, {
    expiresIn: "1d",
  });
}
