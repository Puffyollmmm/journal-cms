<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="default-layout flex flex-col absolute inset-0 overflow-hidden z-1">
    <div class="top-[2.5%] sticky z-10">
      <Navbar />
    </div>
    <div class="default-layout-content min-h-full overflow-y-auto flex-1">
      <slot />

      <Footer v-if="!route.meta?.fullscreen" />
    </div>
  </div>
</template>
