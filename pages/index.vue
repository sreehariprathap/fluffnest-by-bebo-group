<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2"
        v-if="products"
      >
        <div
          v-if="products.data"
          v-for="product in products.data"
          :key="product"
        >
          <ProductCard :product="product" />
        </div>
        <div v-else v-for="product in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]">
          <div class="h-52 w-44 flex flex-col gap-2 app-card">
            <div class="w-full h-32 skeleton rounded-md" />
            <div class="h-3 w-full skeleton rounded-md" />
            <div class="flex gap-3">
              <div class="h-3 w-[50%] skeleton rounded-md" />
              <div class="h-3 w-[50%] skeleton rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="flex justify-center w-full">
      <button class="btn" @click="onClickPreviousPage">Previous</button>
      <button class="btn" @click="onClickNextPage">Next</button>
    </div> -->
  </MainLayout>
</template>
<script setup>
import MainLayout from "@/layouts/MainLayout.vue"
import { useUserStore } from "@/stores/user"
const userStore = useUserStore()

let products = ref(null)


onBeforeMount(async () => {
  products.value = await useFetch("/api/prisma/get-all-products")
  setTimeout(() => (userStore.isLoading = false), 1000)
})


</script>
