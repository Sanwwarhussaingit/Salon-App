const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = (req, res, next) => {
    
    // check request header has authorization on not
    const authorization = req.headers.authorization
    if (!authorization) return res.status(401).json({ error: "token not found" }); // Unauthorized if no authorization header

  const token = req.headers["authorization"]?.split(" ")[1]; // Get token from Authorization header
  if (!token) return res.sendStatus(401).json({ error: "Unauthorized" }); // Unauthorized if no token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    //attach user information to the request object
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "invalid token" });
  }
};

const generateToken = (userData) => {
  //generate a jwt token using userdata
  return jwt.sign(userData, process.env.JWT_SECRET_KEY);
};

module.exports = { jwtAuthMiddleware, generateToken };
