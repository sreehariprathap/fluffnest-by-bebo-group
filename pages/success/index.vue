<template>
  <MainLayout>
    <div id="SuccessPage" class="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
      <div class="bg-light w-full p-6 min-h-[150px] shadow-main rounded-md">
        <div class="flex items-center text-xl justify-center">
          <Icon
            name="clarity:success-standard-line"
            color="#009A66"
            size="90"
          />
        </div>
        <div class="flex flex-col justify-center py-5 gap-3 items-center">
          <h1 class="text-2xl font-bold">{{ $t('labels.paymentSuccess') }}</h1>
          <p class="text-lg"> {{ $t('texts.thankYouForPayment') }}</p>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue"
import { useUserStore } from "~/stores/user"
const userStore = useUserStore()

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 300)
})
</script>
