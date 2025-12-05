<script setup>
import { computed, reactive } from "vue";
import Signin from "./button/Signin.vue";
import { useRoute } from "vue-router";

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

const route = useRoute()

function handleClick(route) {
  console.log("push to routes", route);
}

const shrink = computed(() => route.path === '/login')
</script>

<template>
  <nav class="navbar" :class="{ shrink }">
    <div @click="$router.push('/')" class="navbar-item pl-2 font-bold !op-100">TravelRoute</div>
    <div class="navbar-sub">
      <div
        v-for="nav in navs"
        class="navbar-item"
        @click="handleClick(nav.path)"
      >
        {{ nav.label }}
      </div>

      <div class="navbar-action pl-4 relative">
        <div class="w-px left-0 h-[80%] top-[10%] bg-black op-50 rounded-2xl absolute" />
        <Signin />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar.shrink .navbar-action {
  margin-right: -100px;

  opacity: 0;
  pointer-events: none;
}

.navbar .navbar-action {
  margin-right: 0px;

  transition: 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 0.5rem;
  border-radius: 28px;
  position: absolute;
  background-color: #ffffffa0;
  margin: 0;

  top: 0;
  left: 50%;

  width: 80%;
  max-width: 720px;

  overflow: hidden;
  transform: translateX(-50%);
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
