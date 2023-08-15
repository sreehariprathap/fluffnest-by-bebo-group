<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px); /* Apply blur effect to background */
  z-index: 9999; /* Ensure it's on top of other content */
}

.loader {
  border: 4px solid rgba(255, 255, 255, 0.3); /* Light border */
  border-top: 4px solid #fff; /* White top border */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite; /* Rotate animation */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
