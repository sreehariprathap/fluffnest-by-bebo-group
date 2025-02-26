<template>
  <div>
    <transition name="chat-transition">
      <div
        v-if="isOpen"
        class="bg-white w-80 h-80 border border-gray-300 rounded-xl fixed bottom-4 right-4 flex flex-col"
      >
        <div class="flex justify-between items-center p-2 bg-gray-200">
          <a class="text-lg font-semibold">How can i help you ✨</a>
          <div class="cursor-pointer text-black" @click="closeChat">✖</div>
        </div>
        <div class="flex-1 overflow-y-auto p-2 space-y-2">
          <div
            v-if="messages.length === 0"
            class="flex justify-center items-center h-full"
          >
            <img src="~/assets/fluff-ai.png" alt="Company Logo" class="w-56  opacity-100" />
          </div>
          <div v-else>
            <div
              v-for="(message, index) in messages"
              :key="index"
              :class="message.isUser ? 'chat chat-end' : 'chat chat-start'"
            >
              <div
                :class="
                  message.isUser
                    ? 'chat-bubble chat-bubble-white bg-slate-50 text-dark-main shadow'
                    : 'chat-bubble chat-bubble-white bg-primary text-white shadow'
                "
              >
                {{ message.text }}
              </div>
            </div>
            <div v-if="isThinking" class="text-center font-bold text-xl">
              <Thinking />
            </div>
          </div>
        </div>

        <div class="flex p-2 bg-gray-100">
          <input
            v-model="inputText"
            @keyup.enter="sendMessage"
            placeholder="Ask me something..."
            class="input flex-1 p-1 border border-gray-300 rounded"
          />

          <button class="btn-magic" @click="sendMessage">
            <svg
              height="24"
              width="24"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              data-name="Layer 1"
              id="Layer_1"
              class="sparkle"
            >
              <path
                d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"
              ></path>
            </svg>

            <span class="text">Send</span>
          </button>
        </div>
      </div>
    </transition>
    <button
      v-if="!isOpen"
      @click="openChat"
      class="fixed bottom-4 right-4 btn-magic w-16 h-16 text-white p-2 rounded-full cursor-pointer flex justify-center items-center shadow"
    >
      <svg
        height="32"
        width="32"
        fill="#FFFFFF"
        viewBox="0 0 24 24"
        data-name="Layer 1"
        id="Layer_1"
        class="sparkle"
      >
        <path
          d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
import { GoogleGenerativeAI } from "@google/generative-ai";
import { companyInfo, products } from "../resources/resources.js";

export default {
  name: "ChatWindow",
  data() {
    return {
      isOpen: false,
      inputText: "",
      messages: [],
      isThinking: false,
      genAI: null,
    };
  },
  async created() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Missing Gemini API Key in .env file.");
      return;
    }
    this.genAI = new GoogleGenerativeAI(apiKey);
  },
  methods: {
    openChat() {
      this.isOpen = true;
    },
    closeChat() {
      this.isOpen = false;
    },
    async sendMessage() {
      if (!this.inputText.trim()) return;
      const userMessage = { text: this.inputText, isUser: true };
      this.messages.push(userMessage);
      this.inputText = "";
      this.isThinking = true;

      const companyData = `
      You are an AI assistant for ${companyInfo.name}.
      ${companyInfo.description}
      Features: ${companyInfo.features.join(", ")}
      Products:
      ${products
        .map((p) => `- ${p.title}: $${p.price} - ${p.description}`)
        .join("\n")}
      Rules:
      - Don't show any sensitive information
      - Don't show any personal information
      - Don't show formatting (**bold**, _italic_, etc.)
      `;

      const modifiedPrompt = `User Query: "${userMessage.text}"
      Answer based on the data below:
      ${companyData}`;

      try {
        const model = this.genAI.getGenerativeModel({
          model: "gemini-2.0-flash",
        });
        const result = await model.generateContent(modifiedPrompt);
        const responseText = result.response.text();
        this.messages.push({ text: responseText, isUser: false });
      } catch (error) {
        console.error("Error fetching response:", error);
        this.messages.push({
          text: "Error getting response from Gemini.",
          isUser: false,
        });
      }
      this.isThinking = false;
    },
  },
};
</script>

<style>
.chat-transition-enter-from,
.chat-transition-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.chat-transition-enter-to,
.chat-transition-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.chat-transition-enter-active,
.chat-transition-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
/* From Uiverse.io by AlimurtuzaCodes */
.btn-magic {
  border: none;
  padding: 0 1em;
  margin: 2px 15px;
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #1c1a1c;
  cursor: pointer;
  transition: all 450ms ease-in-out;
}

.sparkle {
  fill: #fff;
  transition: all 800ms ease;
}

.text {
  font-weight: 600;
  color: #fff;
  font-size: medium;
}

.btn-magic:hover {
  background: linear-gradient(0deg, #38bdf8, #2563eb);
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
    inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px 4px rgba(255, 255, 255, 0.2), 0px 0px 180px 0px #2563eb;
  transform: translateY(-1px);
}

.btn-magic:hover .text {
  color: white;
}

.btn-magic:hover .sparkle {
  fill: white;
  transform: scale(1.1);
}
</style>
