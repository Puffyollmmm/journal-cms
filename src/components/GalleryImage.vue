<script setup>
const props = defineProps(['src'])
</script>

<template>
  <img :src="src" alt="">
</template>

<style scoped>
img {
    border-radius: 28px;
    border: 1px solid rgba(239, 239, 239, 0.5);
    opacity: 1;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.125);
}
</style>
