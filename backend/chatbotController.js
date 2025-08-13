    const fs = require("fs");
    const path = require("path");

    const knowledgeBasePath = path.join(__dirname, "../data/knowledgeBase.json");
    const knowledgeBase = JSON.parse(fs.readFileSync(knowledgeBasePath, "utf-8"));

    let conversationState = {};

    function detectIntent(message) {
      const msg = message.toLowerCase();
      if (msg.includes("serviço")) return "serviços";
      if (msg.includes("suporte")) return "suporte";
      if (msg.includes("contrata")) return "contratação";
      if (msg.includes("valor") || msg.includes("preço") || msg.includes("custa")) return "valores";
      return null;
    }

    function matchCommonQuestion(message) {
      const lowerMsg = message.toLowerCase();

      for (let questionKey in knowledgeBase.commonQuestions) {
        const entry = knowledgeBase.commonQuestions[questionKey];

        if (typeof entry === "string") {
          if (lowerMsg.includes(questionKey)) {
            return entry;
          }
        }

        if (entry.variacoes && Array.isArray(entry.variacoes)) {
          for (let variant of entry.variacoes) {
            if (lowerMsg.includes(variant.toLowerCase())) {
              if (Array.isArray(entry.respostas)) {
                const index = Math.floor(Math.random() * entry.respostas.length);
                return entry.respostas[index];
              }
            }
          }
        }
      }

      return null;
    }

    const handleChat = (req, res) => {
      console.log("[LOG CHATBOT] Funcao handleChat foi executada com sucesso."); // NOVO: Log de sucesso
      const { question, sessionId } = req.body;

      if (!question) {
        return res.status(400).json({ answer: "Pergunta inválida." });
      }

      if (!conversationState[sessionId]) {
        conversationState[sessionId] = { step: 0, intent: null, messages: 0, lastAnswer: null };
      }

      const state = conversationState[sessionId];
      state.messages += 1;

      if (state.messages > 15) {
        state.lastAnswer = knowledgeBase.limitReached;
        return res.json({ answer: knowledgeBase.limitReached });
      }

      let response = knowledgeBase.default;

      if (knowledgeBase.greetings[question.toLowerCase()]) {
        const resposta = knowledgeBase.greetings[question.toLowerCase()];
        if (state.lastAnswer === resposta) {
          return res.json({ answer: "Já cumprimentei você 😊. Como posso te ajudar agora?" });
        }
        state.lastAnswer = resposta;
        state.step = 0;
        state.intent = null;
        return res.json({ answer: resposta });
      }

      if (knowledgeBase.farewell[question.toLowerCase()]) {
        const resposta = knowledgeBase.farewell[question.toLowerCase()];
        if (state.lastAnswer === resposta) {
          return res.json({ answer: "Você já se despediu 👋. Posso encerrar a conversa?" });
        }
        state.lastAnswer = resposta;
        state.step = 0;
        state.intent = null;
        return res.json({ answer: resposta });
      }

      if (!state.intent) {
        state.intent = detectIntent(question);
      }

      if (state.intent && knowledgeBase.conversationFlow[state.intent]) {
        const flow = knowledgeBase.conversationFlow[state.intent];
        let showCTA = false;

        if (state.step === 0) {
          response = flow.step1;
          state.step = 1;
        } else if (state.step === 1) {
          response = flow.step2;
          state.step = 2;
        } else if (state.step === 2) {
          response = flow.step3;
          state.step = 3;
        } else if (state.step === 3) {
          response = flow.cta;
          showCTA = true;
          state.step = 0;
          state.intent = null;
        }

        if (state.lastAnswer === response) {
          response = "Vamos seguir? Me avise se quiser voltar ao início ou mudar o assunto.";
        }

        state.lastAnswer = response;
        return res.json({ answer: response, showCTAButton: showCTA });
      }

      const matchedResponse = matchCommonQuestion(question);
      if (matchedResponse) {
        if (state.lastAnswer === matchedResponse) {
          return res.json({ answer: "Você já perguntou isso 😉. Tem outra dúvida?" });
        }
        state.lastAnswer = matchedResponse;
        return res.json({ answer: matchedResponse });
      }

      for (let moduleKey in knowledgeBase.knowledgeModules || {}) {
        if (question.toLowerCase().includes(moduleKey.replace(/_/g, " ").toLowerCase())) {
          const resposta = knowledgeBase.knowledgeModules[moduleKey];
          if (state.lastAnswer === resposta) {
            return res.json({ answer: "Já mencionei isso. Posso detalhar melhor se quiser!" });
          }
          state.lastAnswer = resposta;
          return res.json({ answer: resposta });
        }
      }

      if (state.lastAnswer === response) {
        response = "Se quiser, posso te mostrar nossos serviços, valores ou suporte. Qual prefere?";
      }

      state.lastAnswer = response;
      return res.json({ answer: response });
    };

    module.exports = {
      handleChat,
    };
    
