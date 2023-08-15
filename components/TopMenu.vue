<template>
  <div
    id="top-menu"
    class="w-full bg-slate-100 border-b flex flex-col justify-end items-center"
  >
    <div class="hidden md:flex justify-end w-full px-4 border-b py-1">
      <ul class="flex items-center text-xs text-dark-main font-light px-2 h-10">
        <li class="px-3 app-list-text text-sm font-normal">
          {{ $t("sellOnBebo") }}
        </li>
        <li class="">|</li>
        <li class="px-3 app-list-text text-sm font-normal">
          {{ $t("help") }}
        </li>
        <li class="">|</li>
        <li class="px-3 app-list-text text-sm font-normal">
          {{ $t("buyerProtection") }}
        </li>
        <li class="">|</li>
        <li
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
          class="relative flex items-center px-3 h-full text-sm font-normal app-list-text border-none gap-2"
          :class="
            isAccountMenu ? 'bg-white  z-40 shadow-xl' : 'border border-primary'
          "
        >
          <Icon name="ph:user-thin" size="19" />
          {{ $t("account") }}
          <Icon name="mdi:chevron-down" size="15" class="ml-5" />

          <div
            id="AccountMenu"
            v-if="true"
            class="absolute bg-white w-[213.5px] text-dark-main z-40 top-[38px] -left-[68.5px] border-none hover:border shadow-2xl"
          >
            <div
              v-if="isAccountMenu"
              class="px-3 py-2 flex flex-col items-start"
            >
              <div class="text-semibold text-[15px] my-4">
                {{ $t("welcome") }}
              </div>
              <div class="flex items-center gap-1 mb-3 w-full">
                <NuxtLink to="/auth" class="app-btn">
                  Login / Register
                </NuxtLink>
              </div>
              <div class="h-[0.1px] bg-dark-main w-full my-3"></div>
              <div v-if="true">
                <ul class="flex flex-col gap-3">
                  <li class="px-3 app-list-text text-sm font-normal">
                    {{ $t("myOrders") }}
                  </li>
                  <li
                    class="px-3 app-list-text text-red-400 text-sm font-normal"
                  >
                    {{ $t("signOut") }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div>
            <form>
              <!-- <label for="locale-select" class="mr-3 app-list-text"
                >{{ $t("language") }} {{ " " }}
              </label> -->
              <select
                id="locale-select"
                v-model="$i18n.locale"
                class="app-dropdown"
              >
                <option value="en">en</option>
                <option value="fr">fr</option>
                <option value="ja">ja</option>
              </select>
            </form>
          </div>
        </li>

        <!-- <h1>{{ $t("hello", { name: "vue-i18n" }) }}</h1> -->
      </ul>
    </div>
    <div class="navbar bg-slate-100 px-4 flex gap-10 justify-between">
      <!-- logo -->
      <div>
        <img
          src="~/assets/fluffnest-light.png"
          alt="fluffnest logo"
          class="w-28 hover:scale-105 transform ease-in-out duration-200 cursor-pointer"
        />
      </div>
      <!-- searchbox  -->
      <div class="max-w-[700px] w-full md:block hidden">
        <div class="relative">
          <div
            class="flex items-center border-2 border-primary rounded-md w-full"
          >
            <input
              class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none input input-sm"
              placeholder="kitchen accessories"
              type="text"
              v-model="searchItem"
            />
            <Icon
              v-if="isSearching"
              name="eos-icons:loading"
              size="25"
              class="mr-2"
            />
            <button class="flex items-center h-[100%] p-1.5 px-2 bg-primary">
              <Icon name="ph:magnifying-glass" size="20" color="#ffffff" />
            </button>
          </div>

          <div class="absolute bg-white max-w-[700px] h-auto w-full">
            <div
              v-if="items && items.data"
              v-for="item in items.data"
              class="p-1"
            >
              <NuxtLink
                :to="`/item/${item.id}`"
                class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
              >
                <div class="flex items-center">
                  <img class="rounded-md" width="40" :src="item.url" />
                  <div class="truncate ml-2">{{ item.title }}</div>
                </div>
                <div class="truncate">${{ item.price / 100 }}</div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- cart  -->
      <NuxtLink to="/cart" class="flex items-center">
        <button
          class="relative md:block hidden"
          @mouseenter="isCartHover = true"
          @mouseleave="isCartHover = false"
        >
          <span
            class="absolute flex items-center justify-center -right-[3px] top-0 bg-primary h-[17px] min-w-[17px] text-xs text-white px-0.5 rounded-full"
          >
            <!-- {{ userStore.cart.length }} -->
            5
          </span>
          <div class="min-w-[40px]">
            <Icon
              name="ph:shopping-cart-simple-light"
              size="33"
              :class="isCartHover ? 'text-primary' : ''"
            />
          </div>
        </button>
      </NuxtLink>
      <!-- responsive menu  -->
      <button
        @click="userStore.isMenuOverlay = true"
        class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200"
      >
        <Icon name="radix-icons:hamburger-menu" size="33" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user"
const userStore = useUserStore()

let isAccountMenu = ref(false)
let isSearching = ref(false)
let searchItem = ref("")
let isCartHover = ref(false)
let items = ref(null)
</script>
