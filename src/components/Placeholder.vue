<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, default: '' },
  tone: { type: String, default: 'soft' },
  aspect: { type: String, default: null },
  className: { type: String, default: '' },
  src: { type: String, default: null },
  alt: { type: String, default: '' },
  eager: { type: Boolean, default: false },
  imgClass: { type: String, default: '' },
})

const hasImage = computed(() => Boolean(props.src))

const toneClasses = computed(() => {
  if (props.tone === 'burgundy') {
    return 'text-white/85 bg-[linear-gradient(135deg,#a32525,#771b1c)]'
  }
  if (props.tone === 'green') {
    return 'text-white/90 bg-[linear-gradient(135deg,#a5cc52,#80a13a)]'
  }
  return 'text-ink-3 bg-bg-soft-2'
})

// Stripes mark a slot as awaiting real art — suppressed once an image lands.
const stripeClasses = computed(() => {
  const base = "before:content-[''] before:absolute before:inset-0"
  if (props.tone === 'burgundy') return `${base} before:ph-stripes-light`
  if (props.tone === 'green') return `${base} before:ph-stripes-green`
  return `${base} before:ph-stripes`
})

const labelToneClasses = computed(() => {
  if (props.tone === 'burgundy' || props.tone === 'green') {
    return 'bg-white/15 border-white/25 text-white/90'
  }
  return 'bg-white/85 border-line text-ink-3'
})

const aspectStyle = computed(() => (props.aspect ? { aspectRatio: props.aspect } : {}))
</script>

<template>
  <div
    :class="[
      'relative overflow-hidden rounded-xl flex items-end p-4',
      toneClasses,
      hasImage ? '' : stripeClasses,
      className,
    ]"
    :style="aspectStyle"
  >
    <img
      v-if="hasImage"
      :src="src"
      :alt="alt"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
      :decoding="eager ? 'sync' : 'async'"
      :class="['absolute inset-0 w-full h-full object-cover', imgClass]"
    />
    <span
      v-if="label && !hasImage"
      :class="['relative font-mono text-[11px] tracking-wide px-2.5 py-1.5 rounded-md border', labelToneClasses]"
      >{{ label }}</span
    >
    <slot />
  </div>
</template>
