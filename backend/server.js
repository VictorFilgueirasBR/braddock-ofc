    const express = require("express");
    const cors = require("cors");
    const dotenv = require("dotenv");
    const mongoose = require("mongoose");
    const chatbotController = require("./controllers/chatbotController");


    dotenv.config();
    const app = express();

    // === Conexão com MongoDB Atlas ===
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("✅ Conectado ao MongoDB Atlas"))
      .catch((err) => {
        console.error("❌ Erro ao conectar ao MongoDB:", err.message);
        process.exit(1); // encerra a aplicação em caso de falha
      });

    app.use(cors());
    app.use(express.json());
    app.use("/uploads", express.static("uploads"));

    // === NOVO: Middleware para logar todas as requisições ===
    app.use((req, res, next) => {
      console.log(`[LOG SERVER] Requisicao recebida: ${req.method} ${req.originalUrl}`);
      next();
    });

    // Rota principal
    app.get("/", (req, res) => {
      res.send("API funcionando 🚀");
    });

    // === Endpoint do chatbot ===
    app.post("/api/chat", chatbotController.handleChat);


    // Tratamento de rota não encontrada
    app.use((req, res) => {
      console.log(`[LOG SERVER] Rota nao encontrada para: ${req.method} ${req.originalUrl}`);
      res.status(404).json({ message: "Rota não encontrada." });
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
    
