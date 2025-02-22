<template>
  <MainLayout>
    <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <!-- no items section  -->
      <div
        v-if="!userStore.cart.length"
        class="h-[500px] flex items-center justify-center"
      >
        <div class="pt-20">
          <!-- no items section icon  -->
          <img class="mx-auto" width="250" src="@/assets/cart-empty.webp" />

          <div class="text-xl text-center mt-4">
            {{ $t('labels.noItems') }}
          </div>

          <div v-if="!user" class="flex text-center">
            <NuxtLink
              to="/authentication"
              class="app-btn w-full text-light text-xl font-semibold p-1.5 py-2.5 rounded-md mt-4"
            >
            {{ $t('buttons.login') }}

            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- items section  -->
      <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-light shadow-main rounded-lg p-4">
            <div class="text-2xl font-bold mb-2">
              {{ $t('labels.shoppingCart') }} ({{ userStore.cart.length }})
            </div>
          </div>

          <div id="Items" class="bg-light shadow-main rounded-lg p-4 mt-4">
            <div v-for="product in userStore.cart">
              <CartItem
                :product="product"
                :selectedArray="selectedArray"
                @selectedRadio="selectedRadioFunc"
              />
            </div>
          </div>
        </div>
        <!-- side menu  -->
        <div class="md:hidden block my-4" />
        <div class="md:w-[35%]">
          <div id="Summary" class="bg-light shadow-main rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">              {{ $t('labels.summary') }}
              </div>
            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">              
                {{ $t('labels.total') }}
              </div>
              <div class="text-2xl font-semibold">
                $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
              </div>
            </div>
            <button
              @click="goToCheckout"
              class="flex items-center justify-center bg-primary app-btn w-full text-light text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >
              {{ $t('labels.checkout') }}
            </button>
          </div>

          <div id="PaymentProtection" class="bg-light shadow-main rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2">{{ $t('labels.paymentMethods') }}</div>
            <div class="flex items-center justify-start gap-8 my-4">
              <div v-for="card in cards">
                <img class="h-6" :src="card" />
              </div>
            </div>

            <div class="border-b" />

            <div class="text-lg font-semibold mb-2 mt-2">{{ $t('labels.buyerProtection') }}</div>
            <p class="my-2">
              {{ $t('texts.buyerProtection') }}
 
            </p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue"
import { useUserStore } from "@/stores/user"
const userStore = useUserStore()
const user = useSupabaseUser()

let selectedArray = ref([])

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 200)
  // add all items in store to selected array and toggle the radio button 
  userStore.cart.forEach((item) => {
    selectedArray.value.push(item)
  })
})

const cards = ref(["visa.png", "mastercard.png", "paypal.png", "applepay.png"])

const totalPriceComputed = computed(() => {
  let price = 0
  userStore.cart.forEach((prod) => {
    price += prod.price
  })
  return price / 100
})

const selectedRadioFunc = (e) => {
  if (!selectedArray.value.length) {
    selectedArray.value.push(e)
    return
  }

  selectedArray.value.forEach((item, index) => {
    if (e.id != item.id) {
      selectedArray.value.push(e)
    } else {
      selectedArray.value.splice(index, 1)
    }
  })
}

const goToCheckout = () => {
  let ids = []
  userStore.checkout = []

  selectedArray.value.forEach((item) => ids.push(item.id))

  let res = userStore.cart.filter((item) => {
    return ids.indexOf(item.id) != -1
  })

  res.forEach((item) => userStore.checkout.push(toRaw(item)))

  return navigateTo("/checkout")
}
</script>
