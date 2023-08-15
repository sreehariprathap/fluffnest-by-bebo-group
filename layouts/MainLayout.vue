<template>
  <div id="MainLayout" class="w-full fixed z-50 h-full min-h-screen overflow-y-scroll">
    <TopMenu />
    <Loading v-if="false" />
    <slot />
    <Footer />
  </div>
</template>
