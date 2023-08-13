<template>
  <div
    id="top-menu"
    class="w-full bg-slate-100 border-b md:flex hidden justify-between items-center"
  >
    <ul
      class="flex gap-5 items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-[#FAFAFA] max-w-[1200px]"
    >
      <li
        class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
      >
        Sell on AliExpress
      </li>
      <li>
        <h1>{{ $t("hello", { name: "vue-i18n" }) }}</h1>
      </li>
    </ul>
    <div>
      <form>
        <label for="locale-select">{{ $t("language") }}: </label>
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
  </div>
</template>
