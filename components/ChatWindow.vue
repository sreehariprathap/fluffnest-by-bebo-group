<template>
  <div>
    <!-- Chat Window Popup with transition -->
    <transition name="chat-transition">
      <div
        v-if="isOpen"
        class="bg-white w-[300px] h-[320px] border border-gray-300 rounded-lg flex flex-col fixed bottom-10 right-10"
      >
        <!-- Header with title and close icon -->
        <div class="w-full h-[40px] flex items-center justify-between">
          <a class="text-gray-700 whitespace-nowrap ml-[10px] select-none">How can we help you 😃</a>
          <div
            class="w-[40px] h-[40px] flex justify-center items-center relative cursor-pointer"
            @click="closeChat"
          >
            <div class="absolute w-[20px] h-[3px] bg-gray-700 rounded-full rotate-45"></div>
            <div
              class="absolute w-[20px] h-[3px] bg-gray-700 rounded-full"
              style="transform: rotate(135deg)"
            ></div>
          </div>
        </div>
        <!-- Chat Body -->
        <div class="bg-gray-100 w-full h-[210px] overflow-auto">
          <LottieAnimation/>
        </div>
        <!-- Footer with input -->
        <div class="bg-gray-200 w-full h-[70px] flex">
          <div
            class="flex items-center mt-[15px] ml-[10px] bg-white rounded h-[40px] w-[280px] gap-[5px] border border-gray-300"
          >
            <input
              placeholder="Send a message."
              type="text"
              class="input focus:outline-none border-none bg-transparent h-[40px] w-[230px] text-black truncate"
            />
            <div class="w-[30px] h-[30px] flex items-center justify-center cursor-pointer ">
              <svg
                class="w-[17px] "
                fill="#38bdf8"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      fill="#343541"
                      d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808
                      L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193
                      c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409
                      C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Chat Button with Icon wrapped in a transition -->
    <transition name="button-transition">
      <button
        v-if="!isOpen"
        @click="openChat"
        class="fixed bottom-10 right-10 bg-primary text-white p-3 rounded-full focus:outline-none hover:animate-pulse"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M18 13a1 1 0 01-1 1H6l-4 4V4a1 1 0 011-1h10a1 1 0 011 1v9z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ChatWindow",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openChat() {
      this.isOpen = true;
    },
    closeChat() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
/* Chat window transition */
.chat-transition-enter-active,
.chat-transition-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.chat-transition-enter {
  opacity: 0;
  transform: translateY(10px);
}
/* For close animation, slide down further */
.chat-transition-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Button transition */
.button-transition-enter-active,
.button-transition-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.button-transition-enter {
  opacity: 0;
  transform: scale(0.9);
}
.button-transition-enter-to {
  opacity: 1;
  transform: scale(1);
}
.button-transition-leave {
  opacity: 1;
  transform: scale(1);
}
.button-transition-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
