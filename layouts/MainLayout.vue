<template>
  <div
    id="MainLayout"
    class="w-full fixed z-50 h-full min-h-screen overflow-y-scroll bg-white"
  >
    <TopMenu />
    <Loading v-if="userStore.isLoading" />
    <div class="py-5 min-h-[45vh]">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup>
import { useUserStore } from "~/stores/user"
const userStore = useUserStore()
</script>
