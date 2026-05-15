<script setup>
import PageHeader from './PageHeader.vue'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <PageHeader :title="title" :subtitle="subtitle">
    <template v-if="$slots.crumb" #crumb><slot name="crumb"/></template>
  </PageHeader>
  <section class="section-y">
    <div class="container-yma">
      <div class="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">
        <div><slot/></div>
        <aside class="lg:sticky lg:top-25"><slot name="sidebar"/></aside>
      </div>
    </div>
  </section>
</template>
