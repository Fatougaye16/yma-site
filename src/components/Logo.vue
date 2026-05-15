<script setup>
defineProps({
  inFooter: { type: Boolean, default: false },
})
</script>

<template>
  <div class="flex items-center gap-3 cursor-pointer" @click="$emit('go', 'home')">
    <div class="w-10 h-10 rounded-[10px] bg-burgundy grid place-items-center text-white shrink-0">
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <path d="M5 24 L11 8 L16 18 L21 8 L27 24" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <circle cx="16" cy="24" r="2" fill="#95ba45"/>
      </svg>
    </div>
    <div class="flex flex-col leading-[1.05]">
      <span
        :class="[
          'font-display text-[22px] font-normal tracking-tight',
          inFooter ? 'text-white' : 'text-burgundy',
        ]"
      >YMA</span>
      <span
        :class="[
          'text-[10px] font-bold tracking-[0.16em] uppercase',
          inFooter ? 'text-white/55' : 'text-ink-3',
        ]"
      >Young Mathematicians · GM</span>
    </div>
  </div>
</template>
