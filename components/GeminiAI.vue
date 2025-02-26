<template>
    <div class="flex flex-col h-screen p-4 bg-gray-100">
      <div class="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-md">
        <div v-for="(message, index) in messages" :key="index" :class="{ 'text-right': message.isUser, 'text-left': !message.isUser }">
          <p :class="{ 'bg-blue-500 text-white': message.isUser, 'bg-gray-300': !message.isUser }" class="inline-block p-2 rounded-lg max-w-xs">
            {{ message.text }}
          </p>
        </div>
      </div>
      <div class="mt-4 flex">
        <input v-model="inputText" @keyup.enter="sendMessage" placeholder="Type a message..." class="flex-1 p-2 border rounded-lg" />
        <button @click="sendMessage" class="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  import { GoogleGenerativeAI } from "@google/generative-ai";
  
  export default {
    data() {
      return {
        inputText: '',
        messages: [],
        genAI: null,  // Gemini AI instance
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
      async sendMessage() {
        if (!this.inputText.trim()) return;
        const userMessage = { text: this.inputText, isUser: true };
        this.messages.push(userMessage);
        const userInput = this.inputText;
        this.inputText = '';
  
        try {
          const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
          const result = await model.generateContent(userInput);
          const responseText = result.response.text();
  
          this.messages.push({ text: responseText, isUser: false });
        } catch (error) {
          console.error('Error fetching response:', error);
          this.messages.push({ text: 'Error getting response from Gemini.', isUser: false });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .text-right {
    text-align: right;
  }
  .text-left {
    text-align: left;
  }
  </style>
  