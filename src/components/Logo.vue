<script setup>
defineProps({
  inFooter: { type: Boolean, default: false },
})
</script>

<template>
  <div class="flex items-center gap-3 cursor-pointer" @click="$emit('go', 'home')">
    <img src="../assets/yma-logo.jpg" alt="YMA Logo" class="w-11 h-11 rounded-[10px] object-contain shrink-0" />
    <div class="flex flex-col leading-[1.05]">
      <span :class="['font-display text-[22px] font-normal tracking-tight', inFooter ? 'text-white' : 'text-burgundy']"
        >YMA</span
      >
      <span :class="['text-[10px] font-bold tracking-[0.16em] uppercase', inFooter ? 'text-white/55' : 'text-ink-3']"
        >Young Mathematicians · GM</span
      >
    </div>
  </div>
</template>
