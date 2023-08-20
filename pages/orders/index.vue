<template>
  <MainLayout>
    <div id="OrdersPage" class="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
      <div class="bg-light w-full p-6 min-h-[150px] shadow-main">
        <div class="flex items-center text-xl">
          <Icon name="carbon:delivery" color="#009A66" size="35" />
          <span class="pl-4"> 
              {{ $t('labels.orders') }}
            </span>
        </div>
        <div v-if="orders">
          <div
            v-if="orders && orders.data"
            v-for="order in orders.data"
            class="text-sm pl-[50px]"
          >
            <div class="border-b py-1">
              <p>{{$t('labels.orderId')}} : {{ order.stripeId }}</p>
  
              <div class="pt-2"></div>
  
              <div v-for="item in order.orderItem">
                <NuxtLink
                  class="flex items-center gap-3 p-1 hover:underline hover:text-blue-500"
                  :to="`/product/${item.productId}`"
                >
                  <div class="flex flex-col md:flex-row gap-3">
                  <img width="40" height="40" :src="item.product.url" class="w-20 h-20" />
                <div>
                  <p>
                    {{ item.product.title }}
                  </p>
                  <p>
                    <div class="pt-2 pb-5 max-w-[40rem]">
                    {{ $t('labels.deliveryAddress') }}: {{ order.name }}, {{ order.address }},
                    {{ order.zipcode }}, {{ order.city }}, {{ order.country }}
              </div>
                  </p>
                </div>
              </div>
              </NuxtLink>
              </div>
            </div>
          </div>
          <div v-else class="flex items-center justify-center">
            {{ $t('labels.noOrderHistory') }}
          </div>
        </div>
        <!-- skelton loader -->
        <div v-else v-for="item in [1,2,3,4]" >
          <div  class=" pl-[50px] py-5 flex flex-col gap-3">
            <p class="w-64 rounded-sm h-3 skeleton"></p>
            <div class="flex gap-2 items-start">
              <div class="w-20 h-20 skeleton rounded-sm"/>
              <div class="flex flex-col gap-2">
                <div class="h-3 w-40 skeleton rounded-sm"/>
                <div class="h-3 w-[40rem] skeleton rounded-sm"/>
                <div class="h-3 w-[40rem] skeleton rounded-sm"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue"
import { useUserStore } from "~/stores/user"
const userStore = useUserStore()
const user = useSupabaseUser()

let orders = ref(null)

onBeforeMount(async () => {
  orders.value = await useFetch(
    `/api/prisma/get-all-orders-by-user/${user.value.id}`
  )
})

onMounted(() => {
  if (!user.value) {
    return navigateTo("/authentication")
  }

  setTimeout(() => (userStore.isLoading = false), 200)
})
</script>
