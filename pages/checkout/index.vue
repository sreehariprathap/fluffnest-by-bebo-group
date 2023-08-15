<template>
  <MainLayout>
    <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <h1 class="text-xl font-semibold mb-2">Shipping Address</h1>
            <!-- select address  -->
            <div v-if="true">
              <NuxtLink
                to="/address"
                class="flex items-center pb-2 text-blue-500 hover:text-red-400"
              >
                <Icon name="mdi:plus" size="18" class="mr-2" />
                Update Address
              </NuxtLink>
              <div class="pt-2 border-t">
                <div class="underline pb-1">Delivery Address</div>
                <ul class="text-xs">
                  <li class="flex items-center gap-2">
                    <h1>
                      Contact name: <span class="font-bold">Dummy address</span>
                    </h1>
                  </li>
                  <li class="flex items-center gap-2">
                    <h1>
                      Address: <span class="font-bold">Dummy address</span>
                    </h1>
                  </li>
                  <li class="flex items-center gap-2">
                    <h1>
                      Zip Code: <span class="font-bold">Dummy address</span>
                    </h1>
                  </li>
                  <li class="flex items-center gap-2">
                    <h1>City: <span class="font-bold">Dummy address</span></h1>
                  </li>
                </ul>
              </div>
            </div>
            <!-- add address  -->
            <NuxtLink
              v-else
              to="/address"
              class="flex items-center text-blue-500 hover:text-red-400"
            >
              <Icon name="mdi:plus" size="18" class="mr-2" />
              Add New Address
            </NuxtLink>
          </div>

          <!-- checkout item  -->
          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products">
              <CheckoutItem :product="product" />
            </div>
          </div>
        </div>

        <!-- payment summary section  -->
        <div class="md:hidden block my-4" />
        <div class="md:w-[35%]">
          <div id="PlaceOrder" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">Summary</div>

            <div class="flex items-center justify-between my-4">
              <div class="">Total Shipping</div>
              <div class="">Free</div>
            </div>

            <div class="border-t" />

            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $ <span class="font-extrabold">{{ total / 100 }}</span>
              </div>
            </div>

            <form @submit.prevent="pay()">
              <div
                class="border border-gray-500 p-2 rounded-sm"
                id="card-element"
              />

              <p
                id="card-error"
                role="alert"
                class="text-red-700 text-center font-semibold"
              />

              <button
                :disabled="isProcessing"
                type="submit"
                class="mt-4 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
                :class="isProcessing ? 'opacity-70' : 'opacity-100'"
              >
                <Icon v-if="isProcessing" name="eos-icons:loading" />
                <div v-else>Place order</div>
              </button>
            </form>
          </div>

          <div class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2 mt-2">FluffNest</div>
            <p class="my-2">
              FluffNest keeps your information and payment safe
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
const route = useRoute()

let stripe = null
let elements = null
let card = null
let form = null
let total = ref(0)
let clientSecret = null
let currentAddress = ref(null)
let isProcessing = ref(false)

onMounted(async () => {
  isProcessing.value = true

  userStore.checkout.forEach((item) => {
    total.value += item.price
  })
})

watch(
  () => total.value,
  () => {
    if (total.value > 0) {
      stripeInit()
    }
  }
)

const stripeInit = async () => {}

const pay = async () => {}

const createOrder = async () => {}

const showError = async () => {}

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
