<template>
  <div class="w-full static bottom-0">
    <div id="FooterMain" class="w-full bg-slate-50 mt-10 pb-2">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="md:flex gap-4 justify-between w-full">
          <div class="md:w-[50%] pt-4">
            <div class="text-lg font-semibold text-dark-main">
              {{ $t("footer.help") }}
            </div>
            <div class="text-dark-main text-sm">
              {{ $t("footer.helpCenter") }}
            </div>
          </div>
          <div class="md:w-[50%] pt-4">
            <div class="text-lg font-semibold text-dark-main">
              {{ $t("footer.fluffNestMultiLanguage") }}
            </div>
            <div class="text-dark-main text-sm">
              {{ $t("footer.languages") }}
            </div>
          </div>
        </div>

        <div class="md:flex gap-4 justify-between w-full">
          <div class="md:w-[50%] pt-4">
            <div class="text-lg font-semibold text-dark-main">
              {{ $t("footer.browseByCategory") }}
            </div>
            <div class="text-dark-main text-sm">
              {{ $t("footer.popular") }}
            </div>
          </div>
          <div class="md:w-[50%] pt-4">
            <div class="text-lg font-semibold text-dark-main">
              {{ $t("footer.beboGroup") }}
            </div>
            <div class="text-dark-main text-sm">
              {{ $t("footer.beboGroupSites") }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="FooterSub" class="w-full bg-slate-600 text-sm text-gray-400">
      <div class="max-w-[1200px] mx-auto p-4">
        {{ $t("footerSub.intellectualProtection") }} -
        {{ $t("footerSub.privacyPolicy") }} - {{ $t("footerSub.sitemap") }} -
        {{ $t("footerSub.termsOfUse") }} -
        {{ $t("footerSub.infoForEUConsumers") }} -
        {{ $t("footerSub.transactionServicesAgreement") }} -
        {{ $t("footerSub.termsAndConditionsEU") }}
        {{ $t("footerSub.allRightsReserved") }}
        {{ $t("footerSub.increaseValueTelecom") }}
      </div>
    </div>
  </div>
</template>
