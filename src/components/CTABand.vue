<script setup>
import { useRouter } from 'vue-router'
import MathPatterns from './MathPatterns.vue'

const router = useRouter()
function go(name) {
  router.push({ name })
}
</script>

<template>
  <section class="bg-burgundy text-white py-22 relative overflow-hidden">
    <MathPatterns variant="band" />
    <div class="container-yma grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-center relative z-10">
      <div>
        <span class="eyebrow text-green! before:bg-green!">Get involved</span>
        <h2
          class="font-display font-normal text-white tracking-tight leading-[1.12] mb-5 pb-0.5 mt-4 text-[clamp(34px,4vw,56px)]"
        >
          Volunteer or <em class="text-green italic">partner</em> with us.
        </h2>
        <p class="text-white/80 text-[17px] max-w-120">
          Lend a few hours a month, sponsor a workshop, or co-design a national outreach. There's a way for every skill.
        </p>
      </div>
      <div class="flex gap-3 md:justify-self-end flex-wrap">
        <button
          class="btn btn-lg bg-transparent text-green border-[1.5px] border-green hover:bg-green hover:text-white"
          @click="go('volunteer')"
        >
          Volunteer With Us
        </button>
        <button
          class="btn btn-lg bg-white text-burgundy hover:bg-burgundy-soft hover:-translate-y-px"
          @click="go('partner')"
        >
          Become a Partner
        </button>
      </div>
    </div>
  </section>
</template>
