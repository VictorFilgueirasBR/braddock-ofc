// src/routes/chatbotRoutes.js

const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotController');

// Define a rota de chat.
router.post('/chat', chatbotController.handleChat);

module.exports = router;

