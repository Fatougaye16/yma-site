<script setup>
import Icon from './Icon.vue'

defineProps({
  steps: { type: Array, required: true },
  why: { type: Array, default: null },
  contact: { type: Boolean, default: false },
})
</script>

<template>
  <div class="p-7 bg-bg-soft rounded-2xl mb-6">
    <h3 class="text-[13px] tracking-widest uppercase text-burgundy mb-4 font-bold">What happens next</h3>
    <ol class="list-none p-0 m-0 flex flex-col gap-3.5">
      <li v-for="(s, i) in steps" :key="i" class="flex gap-3.5 items-start">
        <span
          class="w-6.5 h-6.5 rounded-full bg-burgundy text-white grid place-items-center shrink-0 text-[13px] font-bold"
          >{{ i + 1 }}</span
        >
        <div>
          <div class="font-bold text-sm text-ink">{{ s.t }}</div>
          <div class="text-[13px] text-ink-3 mt-0.5 leading-normal">{{ s.d }}</div>
        </div>
      </li>
    </ol>
  </div>

  <div v-if="why" class="p-6 bg-white border border-line rounded-xl mb-6">
    <h3 class="text-[13px] tracking-widest uppercase text-burgundy mb-4 font-bold">Why join</h3>
    <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
      <li v-for="(w, i) in why" :key="i" class="flex gap-2.5 text-sm text-ink-2">
        <span class="text-green-dark shrink-0 mt-0.5"><Icon name="check" :size="14" /></span>
        <span>{{ w }}</span>
      </li>
    </ul>
  </div>

  <div v-if="contact" class="p-6 bg-white border border-line rounded-xl">
    <h3 class="text-[13px] tracking-widest uppercase text-burgundy mb-4 font-bold">Questions?</h3>
    <div class="text-sm text-ink-2 leading-relaxed">
      <div class="flex items-center gap-2"><Icon name="mail" :size="14" /> <span>hello@yma.gm</span></div>
      <div class="flex items-center gap-2 mt-2"><Icon name="wa" :size="14" /> <span>+220 700 0000</span></div>
    </div>
  </div>
</template>
