<!-- <script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script> -->

<template>
    <!-- <header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
        <nav v-if="canLogin" class="-mx-3 flex flex-1 justify-end">
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
                Dashboard
            </Link>

            <template v-else>
                <Link
                    :href="route('login')"
                    class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Log in
                </Link>

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Register
                </Link>
            </template>
        </nav>
    </header> -->


    <MfpPopup />
    <EdreaPopup />
    <AboutPopup />
    <PreloaderComponent />
    <div
      class="edrea_tm_all_wrap"
      data-magic-cursor="show"
      data-enter="fadeInUp"
      data-exit=""
    >
      <!-- WAVE DOTS -->
      <div class="waves"></div>
      <!-- WAVE DOTS -->
  
      <!-- SETTINGS -->
      <SettingsComponent />
      <!-- HEADER -->
      <HeaderComponent />
      <!-- /HEADER -->
  
      <!-- CONTENT -->
      <div class="edrea_tm_content">
        <!-- HOME -->
        <HomeComponent />
        <!-- /HOME -->
  
        <!-- ABOUT -->
        <AboutComponent />
        <!-- /ABOUT -->
  
        <!-- PORTFOLIO -->
        <PortfolioComponent />
        <!-- /PORTFOLIO -->
  
        <!-- NEWS -->
        <NewsComponent />
        <!-- /NEWS -->
  
        <!-- CONTACT -->
        <ContactComponent />
        <!-- /CONTACT -->
      </div>
      <!-- /CONTENT -->
  
      <!-- MAGIC CURSOR -->
      <CursorComponent />
      <!-- /MAGIC CURSOR -->
    </div>
  </template>
  
  <script>
  import PreloaderComponent from "../src/components/layout/PreloaderComponent.vue";
  
  import AboutPopup from "../src/components/popup/AboutPopup.vue";
  import EdreaPopup from "../src/components/popup/EdreaPopup.vue";
  import MfpPopup from "../src/components/popup/MfpPopup.vue";
  import AboutComponent from "../src/components/AboutComponent.vue";
  import ContactComponent from "../src/components/ContactComponent.vue";
  import HomeComponent from "../src/components/HomeComponent.vue";
  import CursorComponent from "../src/components/layout/CursorComponent.vue";
  import HeaderComponent from "../src/components/layout/HeaderComponent.vue";
  import SettingsComponent from "../src/components/layout/SettingsComponent.vue";
  import NewsComponent from "../src/components/NewsComponent.vue";
  import PortfolioComponent from "../src/components/PortfolioComponent.vue";
  import { dataImage, imgToSVG } from "../src/utilits";
  import { waves } from "../src/waves.js";
  
  export default {
    name: `Welcome`,
    mounted() {
      waves();
      imgToSVG();
      dataImage();
    },
    components: {
      HomeComponent,
      HomeComponent,
      AboutComponent,
      PortfolioComponent,
      NewsComponent,
      ContactComponent,
      HeaderComponent,
      SettingsComponent,
      CursorComponent,
      PortfolioComponent,
      PreloaderComponent,
      MfpPopup,
      EdreaPopup,
      AboutPopup,
    },
  };
  </script>