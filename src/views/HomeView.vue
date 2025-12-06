<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="HomeView">
    <div class="HomeView-Background"></div>
    <div class="title">
      <div>Explore Your<br>Favorite Journey</div>
    </div>
  </div>
</template>

<style>
.bg {
  width: 100%;
  display: block;
}

.HomeView {
  position: absolute;

  inset: 0;
  overflow: hidden;
}

.HomeView-Background {
  z-index: -1;
  position: absolute;

  top: 0;
  left: 50%;

  width: 100%;
  height: 100%;

  transform: translateX(-50%);

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('@/assets/Guidance-Background.png'), linear-gradient(to bottom, #018DCE 0%, #027EB4 100%);
}

.title {
  text-align: center;
  justify-content: center;
  align-items: center;

  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  width: 60%;
/* border: 1.5px solid rgba(0, 0, 0, 0.2); */

  font-size: 72px;
  font-weight: bold;
  color: #FFFFFF;
  opacity: 0.75;
}

</style>
