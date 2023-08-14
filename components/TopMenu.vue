<template>
  <div
    id="top-menu"
    class="w-full bg-slate-100 border-b md:flex hidden justify-between items-center py-3 px-4"
  >
    <div>
      <img
        src="~/assets/fluffnest-light.png"
        alt="fluffnest logo"
        class="w-28 hover:scale-105 transform ease-in-out duration-200 cursor-pointer"
      />
    </div>
    <ul
      class="flex items-center justify-end text-xs text-dark-main font-light px-2 h-10 max-w-[1200px]"
    >
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
          isAccountMenu
            ? 'bg-white  z-40 shadow-xl'
            : 'border border-primary'
        "
      >
        <Icon name="ph:user-thin" size="19" />
        {{ $t("account") }}
        <Icon name="mdi:chevron-down" size="15" class="ml-5" />

        <div
          id="AccountMenu"
          v-if="true"
          class="absolute bg-white w-[213.5px] text-dark-main z-40 top-[38px] -left-[67.5px] border-none"
        >
          <div v-if="isAccountMenu">
            <div class="text-semibold text-[15px] my-4 px-3">
              Welcome to Bebo!
            </div>
            <div class="flex items-center gap-1 px-3 mb-3">
              <NuxtLink to="/auth" class="app-btn"> Login / Register </NuxtLink>
            </div>
          </div>
        </div>
      </li>

      <!-- <h1>{{ $t("hello", { name: "vue-i18n" }) }}</h1> -->
    </ul>
    <div>
      <form>
        <label for="locale-select" class="mr-3 app-list-text"
          >{{ $t("language") }} {{ " " }}
        </label>
        <select id="locale-select" v-model="$i18n.locale" class="app-dropdown">
          <option value="en">en</option>
          <option value="fr">fr</option>
          <option value="ja">ja</option>
        </select>
      </form>
    </div>
  </div>
</template>

<script setup>
let isAccountMenu = ref(false)
</script>
