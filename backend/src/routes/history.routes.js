const express = require('express')
const  historyController = require('../controller/history.controller')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

// Save a new result
router.post("/save", authMiddleware, historyController.saveResult);

// Get all saved results for a user
router.get("/getSavedResult", authMiddleware, historyController.getAllSavedResult );

// Delete a saved result
router.delete("/delete/:id", authMiddleware, historyController.deleteHistory);


module.exports = router