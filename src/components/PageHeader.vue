<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <section class="bg-bg-soft py-18 border-b border-line relative overflow-hidden">
    <div class="container-yma">
      <div
        v-if="$slots.crumb"
        class="text-xs font-bold tracking-[0.12em] uppercase text-ink-3 mb-4 flex gap-2 items-center"
      >
        <slot name="crumb"/>
      </div>
      <h1 class="font-display font-normal text-burgundy tracking-tight leading-[1.08] mb-5 pb-1 text-[clamp(44px,5.5vw,72px)]">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-lg text-ink-2 max-w-145 leading-relaxed">{{ subtitle }}</p>
    </div>
  </section>
</template>
