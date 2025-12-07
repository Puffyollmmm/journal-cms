<script setup>
const props = defineProps(['src', 'title', 'desc', 'score'])
</script>

<template>
  <div class="GalleryImage flex flex-col relative select-none">
    <img class="GalleryImage-Main" :src="src" alt="">
    <div class="GalleryImage-Content flex items-center px-3 py-1 rounded-[18px] absolute bottom-4 bg-white/50 w-[90%] left-[5%] h-12">
      <div class="w-[80%]">
        <p class="text-[14px] text-[#181818] font-medium">{{ title }}</p>
        <p class="w-full truncate line-clamp-1 text-[9px] text-[#282828]">{{ desc }}</p>
      </div>
      <div class="w-[20%] gap-1 text-black flex-row-reverse text-[12px] flex justify-end items-center">
        <span>{{ score }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#FFC300" d="m16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"/></svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.GalleryImage-Content {
  backdrop-filter: blur(18px) saturate(180%);
}

.GalleryImage-Main {
  border-radius: 28px;
  border: 1px solid rgba(239, 239, 239, 0.5);
  opacity: 1;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.125);
}
</style>
