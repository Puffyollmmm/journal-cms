<script setup>
import { reactive } from "vue";
import Signin from "./button/Signin.vue";

const navs = reactive([
  {
    label: "Home",
    path: "/home",
  },
  {
    label: "Routes",
    path: "/routes",
  },
  {
    label: "Pricing",
    path: "/pricing",
  },
  {
    label: "About",
    path: "/about",
  },
]);

function handleClick(route) {
  console.log("push to routes", route);
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-item !op-100">TravelRoute</div>
    <div class="navbar-sub">
      <div
        v-for="nav in navs"
        class="navbar-item"
        @click="handleClick(nav.path)"
      >
        {{ nav.label }}
      </div>
      
      <div class="pl-4 relative">
        <div class="w-[1px] left-0 h-[80%] top-[10%] bg-black op-50 rounded-2xl absolute" />
        <Signin />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1rem;
  border-radius: 28px;
  position: absolute;
  background-color: #ffffffa0;
  margin: 0;

  top: 20px;
  left: 50%;

  transform: translateX(-50%);
  width: 80%;
  max-width: 720px;

  backdrop-filter: blur(18px);
}

.navbar-sub {
  display: flex;

  gap: 1rem;
  align-items: center;
}

.navbar-item {
  opacity: 0.75;
  font-size: 14px;
  font-weight: medium;
  color: #111111;
  cursor: pointer;
}
</style>
