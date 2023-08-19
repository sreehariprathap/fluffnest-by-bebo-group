<template>
  <div id="AuthPage" class="w-full h-[100vh] bg-white">
    <div
      class="w-full flex items-center justify-center p-5 border-b border-b-gray-300"
    >
      <NuxtLink to="/" class="min-w-[170px]">
        <img width="170" src="@/assets/fluffnest-light.png" />
      </NuxtLink>
    </div>
    <div class="max-w-[400px] mx-auto px-2">
      <div class="text-center my-6 font-bold capitalize">
        {{ $t("buttons.login/register") }}
      </div>

      <!-- login with providers  -->
      <div class="flex gap-2 justify-center">
        <button
          @click="login('google')"
          class="bg-slate-100 p-2 rounded-full h-10 w-10 shadow-md"
        >
          <img class="w-full" src="/google-logo.png" />
        </button>

        <button
          @click="login('github')"
          class="bg-slate-100 p-2 rounded-full h-10 w-10 shadow-md"
        >
          <img class="w-full" src="/github-logo.png" />
        </button>
      </div>
      <div class="divider mt-8">{{ $t('labels.or') }}</div>
      <!-- login with form  -->
      <div>
  <div class="form-control">
    <label class="label">
      <span class="text-[12px]">{{ $t('labels.email') }}</span>
    </label>
    <input
      type="text"
      :placeholder=" $t('placeholders.email')"
      class="input input-sm input-bordered"
    />
  </div>
  <div class="form-control">
    <label class="label">
      <span class="text-[12px]">{{ $t('labels.password') }}</span>
    </label>
    <input
      type="password"
      :placeholder="$t('placeholders.password')"
      class="input input-sm input-bordered"
    />
    <label class="label justify-end">
      <a href="#" class="label-text-alt link link-hover text-[12px]">
        {{ $t('labels.forgotPassword') }}</a
      >
    </label>
  </div>
  <div class="flex py-3 justify-center btn-lg mb-3">
    <button class="app-btn">{{ $t('buttons.login') }}</button>
  </div>
</div>

    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(() => {
  if (user.value) {
    return navigateTo("/")
  }
})

const login = async (prov) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
    redirectTo: window.location.origin,
  })
}
</script>
