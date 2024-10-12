const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel")

const { jwtAuthMiddleware, generateToken } = require("../jwt");

router.post("/signup", async (req, res) => {
    try {
      const data = req.body; // assuming the request body contains the user data
      // create a new user document using the mongoose model
      const newUser = new UserModel(data);
      // save the new user document to the database
      const response = await newUser.save();
      console.log("Data saved");
  
      //create tokens
      const payload = {
        id: response.id,
        username: response.username,
      };
      const token = generateToken(payload);
  
      console.log(JSON.stringify(payload));
      console.log("token is: ", token);
  
      res.status(200).json({ response, token });
    } catch (error) {
      console.error("Error saving user:", error);
      res.status(500).json({ error: "Failed to save user" });
    }
  });


  //login user
router.post("/login", async function (req, res) {
    try {
      const { username, password } = req.body;
      //find user username and password
      const user = await UserModel.findOne({ username: username });
  
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      //generate token
      const payload = {
        id: user.id,
        username: user.username,
      };
      const token = generateToken(payload);
      //return token
      res.status(200).json({ token });

    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).json({ error: "Failed to log in user" });
    }
  });

  


  
//get profile

  router.get('/profile',jwtAuthMiddleware, async (req,res) =>{
    try {
      
      const userData = req.user;
      console.log("User Data", userData);

      const userId = userData.id;
      console.log(userId)
      const user = await UserModel.findById(userId);
      res.status(200).json({user:user})
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).json({ error: "Failed to log in user" });
      
    }
  })

 module.exports = router;