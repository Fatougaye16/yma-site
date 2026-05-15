<script setup>
import { ref, computed } from 'vue'
import Icon from './Icon.vue'

const items = [
  {
    quote:
      'YMA changed how I see math. I used to think it was about memorising rules. Now I solve problems for fun, and I am teaching my younger sister.',
    name: 'Fatoumata Jallow',
    role: 'Student · Grade 11, Nusrat SSS',
    initial: 'FJ',
  },
  {
    quote:
      'Our regional finalists this year were all girls from rural schools — none of them had seen an olympiad problem before joining YMA workshops.',
    name: 'Mr. Lamin Touray',
    role: 'Math teacher · Armitage High School',
    initial: 'LT',
  },
  {
    quote: 'The volunteers are patient and the problems are genuinely beautiful. I look forward to Saturdays.',
    name: 'Ebrima Sanyang',
    role: 'Student · Grade 9, Banjul SSS',
    initial: 'ES',
  },
]
const i = ref(0)
const t = computed(() => items[i.value])
function prev() {
  i.value = (i.value - 1 + items.length) % items.length
}
function next() {
  i.value = (i.value + 1) % items.length
}
</script>

<template>
  <div class="bg-bg-soft rounded-2xl p-14 max-md:p-7 relative">
    <span class="eyebrow mb-6">What students say</span>
    <p
      class="font-display font-normal text-[clamp(24px,2.6vw,34px)] leading-[1.3] text-ink tracking-tight mb-8 mt-6 max-w-200 before:content-['“'] before:text-burgundy before:mr-1 after:content-['”'] after:text-burgundy after:ml-0.5"
    >
      {{ t.quote }}
    </p>
    <div class="flex items-center gap-3.5">
      <div class="w-12 h-12 rounded-full bg-green grid place-items-center text-white font-bold text-base shrink-0">
        {{ t.initial }}
      </div>
      <div>
        <div class="font-bold text-ink text-[15px]">{{ t.name }}</div>
        <div class="text-[13px] text-ink-3">{{ t.role }}</div>
      </div>
    </div>
    <div class="md:absolute md:top-8 md:right-8 mt-6 md:mt-0 flex gap-2">
      <button
        class="w-10 h-10 rounded-full bg-white border border-line grid place-items-center transition-all duration-180 text-ink-2 hover:bg-burgundy hover:text-white hover:border-burgundy"
        @click="prev"
      >
        <Icon name="arrowL" />
      </button>
      <button
        class="w-10 h-10 rounded-full bg-white border border-line grid place-items-center transition-all duration-180 text-ink-2 hover:bg-burgundy hover:text-white hover:border-burgundy"
        @click="next"
      >
        <Icon name="arrowR" />
      </button>
    </div>
  </div>
</template>
