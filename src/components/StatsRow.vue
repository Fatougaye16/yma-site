<script setup>
import Icon from './Icon.vue'

const stats = [
  { num: '2,400+', label: 'Students reached', meta: 'Since 2019, across 6 regions', icon: 'users' },
  { num: '64', label: 'Events organized', meta: 'Workshops, olympiads, and clinics', icon: 'calendar' },
  { num: '38', label: 'Schools visited', meta: 'Urban and rural partner schools', icon: 'school' },
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 border-t border-b border-line">
    <div
      v-for="(s, i) in stats"
      :key="i"
      class="px-8 py-12 flex flex-col gap-2 border-b md:border-b-0 md:border-r border-line last:border-b-0 md:last:border-r-0 max-md:px-0 max-md:py-8"
    >
      <div class="w-9 h-9 grid place-items-center text-green-dark mb-3">
        <Icon :name="s.icon" :size="28" />
      </div>
      <div
        class="font-display font-normal text-5xl sm:text-6xl lg:text-7xl text-green-dark leading-none tracking-tight"
      >
        {{ s.num }}
      </div>
      <div class="text-sm text-ink font-semibold">{{ s.label }}</div>
      <div class="text-[13px] text-ink-3">{{ s.meta }}</div>
    </div>
  </div>
</template>
