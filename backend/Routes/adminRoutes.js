const express = require("express");
const router = express.Router();
const Salon = require("../models/salonModel")

const { jwtAuthMiddleware, generateToken } = require("../jwt");

// Allows salon owners (admins) to add a salon.
router.post('/salonRegister', async (req, res) => {
  const { shopName, username, password, address, services } = req.body;

  try {
    const newSalon = new Salon({
      shopName,
      username,
      password,
      address,
      services, 
    });
    
    const response = await newSalon.save();
    
    // Create token (uncomment if needed)
    const payload = {
      id: response.id,
      shopName: response.shopName,
    };
    const token = generateToken(payload);
    
    // Return the created salon (and optionally the token)
    res.status(201).json({ response, token });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//   Fetch all salons with waiting times for users to view.
  router.get('/allSalons', async (req, res) => {
    try {
      const salons = await Salon.find();
      res.json(salons);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//find by token
  router.get('/salon', jwtAuthMiddleware, async (req, res) => {
    try {
        const salonData = req.user;
        console.log("Admin Data", salonData);  
        const salonId = salonData.id;

        const admin = await Salon.findById(salonId);
        if (!admin) {
          return res.status(404).json({ message: "Salon not found" });
        }
        res.status(200).json(admin); // Show full data of the admin salon
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//   Allows admins to update their salon's details (waiting times, etc.).
  router.put('/updateSalon',jwtAuthMiddleware, async (req, res) => {
    try {
      const salonData = req.user;
      const salonId = salonData.id;
      const updatedSalon = await Salon.findByIdAndUpdate(salonId, req.body, { new: true });
      res.json(updatedSalon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

  module.exports = router;