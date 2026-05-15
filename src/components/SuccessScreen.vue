<script setup>
import Icon from './Icon.vue'

defineProps({
  title: { type: String, required: true },
  message: { type: String, required: true },
  primary: { type: String, default: '' },
  secondary: { type: String, default: '' },
})

defineEmits(['primary', 'secondary'])
</script>

<template>
  <div class="bg-green-soft border-[1.5px] border-green rounded-xl p-12 text-center flex flex-col items-center gap-4 max-w-145">
    <div class="w-16 h-16 rounded-full bg-green text-white grid place-items-center">
      <Icon name="check" :size="32"/>
    </div>
    <h3 class="text-green-dark text-[28px] font-display font-normal">{{ title }}</h3>
    <p class="m-0 text-ink-2 text-base leading-relaxed max-w-110">{{ message }}</p>
    <div class="flex flex-wrap items-center gap-3 mt-6 justify-center">
      <button v-if="primary" class="btn btn-primary" @click="$emit('primary')">{{ primary }}</button>
      <button v-if="secondary" class="btn btn-ghost" @click="$emit('secondary')">{{ secondary }}</button>
    </div>
  </div>
</template>
