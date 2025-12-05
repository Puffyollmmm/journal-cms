<template>
    <div class="PageSideLayout w-full h-full flex">
        <div v-if="$slots.side" class="PageSideLayout-Side w-[220px]">
          <slot name="side" />
        </div>

        <div class="PageSideLayout-Main overflow-hidden w-full h-full flex-1">
          <slot />
        </div>

        <div class="PageSideLayout-Background -z-1 absolute inset-0">
          <slot name="background" />
        </div>
    </div>
</template>

<style>

</style>