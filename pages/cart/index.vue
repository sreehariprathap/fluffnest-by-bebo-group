<template>
  <MainLayout>
    <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <!-- no items section  -->
      <div v-if="false" class="h-[500px] flex items-center justify-center">
        <div class="pt-20">
          <!-- no items section icon  -->
          <img class="mx-auto" width="250" src="@/assets/cart-empty.webp" />

          <div class="text-xl text-center mt-4">No items yet?</div>

          <div v-if="true" class="flex text-center">
            <NuxtLink
              to="/auth"
              class="app-btn w-full text-white text-xl font-semibold p-1.5 py-2.5 rounded-md mt-4"
            >
              Sign in
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- items section  -->
      <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-2xl font-bold mb-2">Shopping Cart 5</div>
          </div>

          <div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
            <div class="text-red-500 font-bold">
              Welcome Deal applicable on 1 item only
            </div>
          </div>

          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products">
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
          <div id="Summary" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">Summary</div>
            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
              </div>
            </div>
            <button
              @click="goToCheckout"
              class="flex items-center justify-center bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >
              Checkout
            </button>
          </div>

          <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2">Payment methods</div>
            <div class="flex items-center justify-start gap-8 my-4">
              <div v-for="card in cards">
                <img class="h-6" :src="card" />
              </div>
            </div>

            <div class="border-b" />

            <div class="text-lg font-semibold mb-2 mt-2">Buyer Protection</div>
            <p class="my-2">
              Get full refund if the item is not as described or if is not
              delivered
            </p>
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

let selectedArray = ref([])

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 200)
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

const products = [
  {
    id: 1,
    title: "title 1",
    description: "this is a description",
    url: "https://tdc.imgix.net/catalog/product/1/s/1st_2.jpg?auto=format&fit=crop&w=720&auto=compress",
    price: 999,
  },
  {
    id: 2,
    title: "title 1",
    description: "this is a description",
    url: "https://tdc.imgix.net/catalog/product/1/s/1st_2.jpg?auto=format&fit=crop&w=720&auto=compress",
    price: 999,
  },
  {
    id: 3,
    title: "title 1",
    description: "this is a description",
    url: "https://tdc.imgix.net/catalog/product/1/s/1st_2.jpg?auto=format&fit=crop&w=720&auto=compress",
    price: 999,
  },
  {
    id: 4,
    title: "title 1",
    description: "this is a description",
    url: "https://tdc.imgix.net/catalog/product/1/s/1st_2.jpg?auto=format&fit=crop&w=720&auto=compress",
    price: 999,
  },
  {
    id: 5,
    title: "title 1",
    description: "this is a description",
    url: "https://tdc.imgix.net/catalog/product/1/s/1st_2.jpg?auto=format&fit=crop&w=720&auto=compress",
    price: 999,
  },
  {
    id: 6,
    title: "title 1",
    description: "this is a description",
    url: "https://tdc.imgix.net/catalog/product/1/s/1st_2.jpg?auto=format&fit=crop&w=720&auto=compress",
    price: 999,
  },
  {
    id: 7,
    title: "title 1",
    description: "this is a description",
    url: "https://tdc.imgix.net/catalog/product/1/s/1st_2.jpg?auto=format&fit=crop&w=720&auto=compress",
    price: 999,
  },
]
</script>