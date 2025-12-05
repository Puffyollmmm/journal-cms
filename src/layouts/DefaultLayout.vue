<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="default-layout flex flex-col absolute inset-0 overflow-hidden z-1">
    <div class="top-[2.5%] sticky z-10">
      <Navbar />
    </div>
    <div class="default-layout-content overflow-y-scroll flex-1">
      <slot />

      <Footer />
    </div>
  </div>
</template>
