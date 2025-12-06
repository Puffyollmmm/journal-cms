<template>
    <div class="PageSideLayout w-full min-h-full flex">
        <div v-if="$slots.side" class="PageSideLayout-Side w-[220px]">
          <slot name="side" />
        </div>

        <div class="PageSideLayout-Main w-full h-auto min-h-full flex-1">
          <slot />
        </div>

        <div class="PageSideLayout-Background -z-1 absolute inset-0">
          <slot name="background" />
        </div>
    </div>
</template>

<style>

</style>