<template>
  <div class="flex h-screen items-center relative">
    <div class="container ">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="flex w-full justify-center mt-[-11.5rem]">
      <img
        src="~/assets/fluffnest-light.png"
        alt="fluffnest logo"
        class="w-16 hover:scale-105 transform ease-in-out duration-200 cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
.container {
  position: absolute;
  top: 35%;
  left: 50%;
  border-radius: 50%;
  height: 96px;
  width: 96px;
  animation: rotate_3922 1.2s linear infinite;
  background-color: #65C18C;
  background-image: linear-gradient(#65C18C, #36AE7C, #C1F4C5);
}

.container span {
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-color: #65C18C;
  background-image: linear-gradient(#65C18C, #36AE7C, #C1F4C5);
}

.container span:nth-of-type(1) {
  filter: blur(5px);
}

.container span:nth-of-type(2) {
  filter: blur(10px);
}

.container span:nth-of-type(3) {
  filter: blur(25px);
}

.container span:nth-of-type(4) {
  filter: blur(50px);
}

.container::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background-color: #ffffff;
  border: solid 5px #ffffff00;
  border-radius: 50%;
}

@keyframes rotate_3922 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
