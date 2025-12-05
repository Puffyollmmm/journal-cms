<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleClick() {
  router.push('/login')
}
</script>

<template>
  <div @click="handleClick" class="rounded-2xl select-none hover:op-85 cursor-pointer bg-black px-4 py-1 text-white text-sm">
    <span>Login</span>
  </div>
</template>