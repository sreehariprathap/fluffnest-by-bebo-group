<template>
  <div :id="`ProductComponent${product.id}`" class="app-card">
    <NuxtLink :to="`/product/${product.id}`">
      <img class="rounded-t" :src="product.url" />

      <div class="text-container">
        <div id="ProductDetails">
          <p class="app-product-title line-clamp-1">
            {{ product.title.substring(0, 60) }}
          </p>
          <div class="flex items-center gap-1 relative my-1">
            <span
              class="bg-danger text-white text-[9px] font-semibold px-1.5 rounded-sm"
              >Welcome Deal</span
            >
            <span
              class="bg-light border text-warning text-[9px] font-semibold px-1.5 rounded-sm"
              >Top Selling</span
            >
          </div>
          <span class="relative -top-1.5 text-danger text-xs font-semibold">
            Extra 5% off
          </span>
          <div class="flex items-end gap-2">
            <h1 class="text-xl font-medium">${{ priceComputed }}</h1>
            <h1 class="text-sm mb-0.5 font-light line-through text-gray-600">
              {{ oldPriceComputed }}
            </h1>
          </div>

          <p class="flex items-center pt-0.5 text-xs text-[#252525]">
            5,000+ sold
            <Icon
              name="material-symbols:star-rate"
              color="#FF8400"
              class="ml-1.5"
            />
            <span class="text-[#FF8400]"> 4.7 </span>
          </p>

          <p class="pb-1">
            <span class="text-primary text-xs font-semibold"
              >Free Shipping</span
            >
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(["product"])
const { product } = toRefs(props)

const priceComputed = computed(() => {
  return product.value.price / 100
})

const oldPriceComputed = computed(() => {
  let res = (product.value.price + product.value.price / 20) / 100
  return res.toFixed(2)
})
</script>
