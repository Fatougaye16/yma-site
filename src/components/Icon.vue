<script setup>
import { computed } from 'vue'
import { ICONS } from '../icons.js'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: null },
})

const icon = computed(() => ICONS[props.name])
const dim = computed(() => props.size ?? icon.value?.defaultSize ?? 18)
</script>

<template>
  <svg
    v-if="icon && icon.type === 'stroke'"
    :width="dim" :height="dim"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="icon.sw"
    stroke-linecap="round"
    :stroke-linejoin="icon.noJoin ? undefined : 'round'"
    v-html="icon.body"
  />
  <svg
    v-else-if="icon"
    :width="dim" :height="dim"
    viewBox="0 0 24 24"
    fill="currentColor"
    v-html="icon.body"
  />
</template>
