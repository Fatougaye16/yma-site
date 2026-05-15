<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function go(n) { router.push({ name: n }) }
</script>

<template>
  <section class="section-y min-h-[60vh] grid place-items-center">
    <div class="container-yma text-center max-w-140">
      <div class="font-display text-[clamp(96px,14vw,180px)] text-burgundy leading-none mb-4">404</div>
      <svg width="120" height="60" viewBox="0 0 120 60" class="mx-auto mb-6 block opacity-50">
        <text x="60" y="44" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="44" fill="#8f2021" opacity="0.7">∅</text>
      </svg>
      <h2 class="font-display font-normal text-4xl text-ink mb-3">This page is the empty set.</h2>
      <p class="text-ink-3 text-[17px] mb-8">Nothing here — try one of the routes below.</p>
      <div class="flex flex-wrap items-center gap-3 justify-center">
        <button class="btn btn-primary" @click="go('home')">Back to home</button>
        <button class="btn btn-ghost" @click="go('programs')">See programs</button>
      </div>
    </div>
  </section>
</template>
