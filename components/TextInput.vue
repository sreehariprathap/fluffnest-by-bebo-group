<template>
  <div>
    <client-only>
      <div class="form-control">
        <label class="label">
          <span class="text-[12px]">{{ $t(placeholderKey) }}</span>
        </label>
        <input
          :placeholder="$t(placeholderKey)"
          :maxlength="max"
          type="text"
          class="input input-sm input-bordered w-full"
          @focus="isFocused = true"
          @blur="isFocused = false"
          :class="
            ({ 'border-gray-900': isFocused }, { 'border-danger': error })
          "
          :type="inputType"
          v-model="inputComputed"
          autocomplete="off"
        />
      </div>
    </client-only>
    <span v-if="error" class="text-danger text-[14px] font-semibold">
      {{ error }}
    </span>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:input"])
const props = defineProps([
  "input",
  "placeholderKey",
  "max",
  "inputType",
  "error",
])
const { input, placeholderKey, max, inputType, error } = toRefs(props)
let isFocused = ref(false)
const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit("update:input", val),
})
</script>
