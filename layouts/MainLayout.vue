<template>
  <div
    id="MainLayout"
    class="w-full fixed z-50 h-full min-h-screen overflow-y-scroll bg-gray-100"
  >
    <TopMenu />
    <Loading v-if="userStore.isLoading" />
    <div class="py-5">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup>
import { useUserStore } from "~/stores/user"
const userStore = useUserStore()
</script>
