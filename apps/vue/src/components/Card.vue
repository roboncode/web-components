<script setup lang="ts">
defineProps(['title'])
</script>

<template>
  <div class="bg-dark-800 drop-shadow-xl rounded-lg overflow-hidden">
    <div class="bg-light-blue-600 p-4 py-2 text-lg font-bold text-white text-shadow-lg">{{title}}</div>
    <div class="font-medium p-4 bg-dark-600">
      <ul class="pl-4">
        <slot name="details"></slot>
      </ul>
    </div>
    <div class="p-2 bg-white/10">
      <slot />
    </div>
  </div>
</template>