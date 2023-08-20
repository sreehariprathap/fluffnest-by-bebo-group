<template>
  <MainLayout>
    <div id="AddressPage" class="mt-4 max-w-[500px] mx-auto px-2">
      <div class="mx-auto bg-light shadow-main rounded-lg p-3">
        <div class="text-xl text-bold mb-2">{{ $t('labels.addressDetails') }}</div>
        <form @submit.prevent="submit()">
          <TextInput
            class="w-full"
            :placeholderKey="'placeholders.name'"
            v-model:input="contactName"
            inputType="text"
            :error="error && error.type == 'contactName' ? $t(error.message) : ''"
          />

          <TextInput
            class="w-full mt-2"
            :placeholderKey="'placeholders.address'"
            v-model:input="address"
            inputType="text"
            :error="error && error.type == 'address' ? $t(error.message) : ''"
          />

          <TextInput
            class="w-full mt-2"
            :placeholderKey="'placeholders.zip'"
            v-model:input="zipCode"
            inputType="text"
            :error="error && error.type == 'zipCode' ? $t(error.message) : ''"
          />

          <TextInput
            class="w-full mt-2"
            :placeholderKey="'placeholders.city'"
            v-model:input="city"
            inputType="text"
            :error="error && error.type == 'city' ? $t(error.message) : ''"
          />

          <TextInput
            class="w-full mt-2"
            :placeholderKey="'placeholders.country'"
            v-model:input="country"
            inputType="text"
            :error="error && error.type == 'country' ? $t(error.message) : ''"
          />

          <div class="flex justify-center">
            <button
              :disabled="isWorking"
              type="submit"
              class="app-btn my-4 bg-sky-400 flex justify-center"
            >
              <p v-if="!isWorking">{{ $t('buttons.updateAddress') }}</p>
              <Icon v-else name="eos-icons:loading" size="25" class="mr-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue"
import { useUserStore } from "@/stores/user"
const userStore = useUserStore()

const user = useSupabaseUser()

let contactName = ref(null)
let address = ref(null)
let zipCode = ref(null)
let city = ref(null)
let country = ref(null)

let currentAddress = ref(null)
let isUpdate = ref(false)
let isWorking = ref(false)
let error = ref(null)

watchEffect(async () => {
  currentAddress.value = await useFetch(
    `/api/prisma/get-address-by-user/${user.value.id}`
  )
  if (currentAddress.value.data) {
    contactName.value = currentAddress.value.data.name
    address.value = currentAddress.value.data.address
    zipCode.value = currentAddress.value.data.zipcode
    city.value = currentAddress.value.data.city
    country.value = currentAddress.value.data.country
    isUpdate.value = true
  }
  userStore.isLoading = false
})

const submit = async () => {
  isWorking.value = true
  error.value = null

  if (!contactName.value) {
    error.value = {
      type: "contactName",
      message: "errors.contactName",
    }
  } else if (!address.value) {
    error.value = {
      type: "address",
      message: "errors.address",
    }
  } else if (!zipCode.value) {
    error.value = {
      type: "zipCode",
      message: "errors.zipCode",
    }
  } else if (!city.value) {
    error.value = {
      type: "city",
      message: "errors.city",
    }
  } else if (!country.value) {
    error.value = {
      type: "country",
      message: "errors.country",
    }
  }

  if (error.value) {
    isWorking.value = false
    return
  }
  if (isUpdate.value) {
    await useFetch(
      `/api/prisma/update-address/${currentAddress.value.data.id}`,
      {
        method: "PATCH",
        body: {
          userId: user.value.id,
          name: contactName.value,
          address: address.value,
          zipCode: zipCode.value,
          city: city.value,
          country: country.value,
        },
      }
    )

    isWorking.value = false

    return navigateTo("/checkout")
  }

  await useFetch(`/api/prisma/add-address/`, {
    method: "POST",
    body: {
      userId: user.value.id,
      name: contactName.value,
      address: address.value,
      zipCode: zipCode.value,
      city: city.value,
      country: country.value,
    },
  })

  isWorking.value = false

  return navigateTo("/checkout")
}
</script>
