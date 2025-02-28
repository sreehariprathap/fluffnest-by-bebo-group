<template>
  <MainLayout>
    <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[33%]">
          <img
            v-if="currentImage"
            class="rounded-lg object-fit shadow-main"
            :src="currentImage"
          />
          <div
            v-if="images[0] !== ''"
            class="flex items-center justify-center mt-2"
          >
            <div v-for="image in images" class="w-20 h-20">
              <img
                @mouseover="currentImage = image"
                @click="currentImage = image"
                class="rounded-md object-fit border-[3px] cursor-pointer"
                :class="currentImage === image ? 'border-sky-400' : ''"
                :src="image"
              />
            </div>
          </div>
        </div>
        <div class="md:w-[63%] bg-light shadow-main p-3 rounded-lg">
          <div v-if="product && product.data">
            <p class="mb-2 app-product-title text-3xl">{{ product.data.title }}</p>
            <p class="font-light text-[12px] mb-2">
              {{ product.data.description }}
            </p>
          </div>

          <div class="flex items-center pt-1.5">
            <p class="text-danger">{{ $t('labels.percentageOff', { percentage: '5' }) }}</p>
          </div>

          <div class="rating my-3 disabled:">
            <input
              type="radio"
              :disabled="true"
              name="rating-2"
              class="mask mask-star-2 bg-warning"
            />
            <input
              type="radio"
              name="rating-2"
              :disabled="true"
              class="mask mask-star-2 bg-warning"
              
            />
            <input
              type="radio"
              name="rating-2"
              :disabled="true"
              class="mask mask-star-2 bg-warning"
            />
            <input
              type="radio"
              name="rating-2"
              :disabled="true"
              class="mask mask-star-2 bg-warning"
            />
            <input
              type="radio"
              name="rating-2"
              :disabled="true"
              class="mask mask-star-2 bg-warning"
              checked
            />
          </div>

          <div class="border-b" />

          <div class="flex items-center justify-start gap-2 my-2">
            <div class="text-3xl font-bold">$ {{ priceComputed/100 }}</div>
          </div>

          <p class="text-success text-xs font-semibold pt-1">
            {{ $t('labels.FreeDelivery', { price: '25' }) }}
          </p>

          <p class="text-success text-xs font-semibold pt-1"> {{ $t('labels.freeShipping') }}</p>

          <div class="py-2" />

          <div class="flex justify-center">
            <button
              @click="isInCart ? goToCart() : addToCart()"
              class="app-btn btn-wide"
            >
              <div>{{ isInCart ? $t('buttons.goToCart') :  $t('buttons.addToCart')}}  </div>
            </button>
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
let priceComputed = 0

const route = useRoute()

let product = ref(null)
let currentImage = ref(null)

onBeforeMount(async () => {
  product.value = await useFetch(
    `/api/prisma/get-product-by-id/${route.params.id}`
  )
})

watchEffect(() => {
  if (product.value && product.value.data) {
    currentImage.value = product.value.data.url
    images.value[0] = product.value.data.url
    userStore.isLoading = false
    priceComputed = product.value.data.price
  }
})

const isInCart = computed(() => {
  let res = false
  userStore.cart.forEach((prod) => {
    if (route.params.id == prod.id) {
      res = true
    }
  })
  return res
})

const images = ref([""])

const addToCart = () => {
  userStore.cart.push(product.value.data)
}
const goToCart = () => {
  return navigateTo("/cart")
}
</script>
