<script setup>
import { ref } from 'vue'

function handleHomeClick(){
  console.log('Home Clicked')
}

function handleRoutesClick(){
  console.log('Routes Clicked')
}

function handlePricingClick(){
  console.log('Pricing Clicked')
}

function handleAboutClick(){
  console.log('About Clicked')
}



</script>

<template>
  <div class="HomeView">
    <div class="HomeView-Background"></div>
    <div class="navbar">
      <div class="navbar-item">Journal</div>
      <div class="navbar-sub">
        <div class="navbar-item" @click="handleHomeClick">
          Home
        </div>
        <div class="navbar-item" @click="handleRoutesClick">
          Routes
        </div>
        <div class="navbar-item" @click="handlePricingClick">
          Pricing
        </div>
        <div class="navbar-item" @click="handleAboutClick">
          About
        </div>
      </div>
    </div>
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

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1rem;
  border-radius: 28px;
  position: absolute;
  background-color: #FFFFFFA0;
  margin: 0;

  top: 20px;
  left: 50%;

  transform: translateX(-50%);
  width: 60%;

  backdrop-filter: blur(18px);
}

.navbar-sub {
  display: flex;

  gap: 1rem;
  align-items: center;
}

.navbar-item {
  font-size: 18px;
  font-weight: medium;
  color: #111111;
  cursor: pointer;
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
/* 
  border: 1.5px solid rgba(0, 0, 0, 0.2); */

  font-size: 72px;
  font-weight: bold;
  color: #FFFFFF;
  opacity: 0.75;
}

</style>
