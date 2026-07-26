<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Placeholder from '../components/Placeholder.vue'
import PageHeader from '../components/PageHeader.vue'
import CTABand from '../components/CTABand.vue'

const router = useRouter()
function go(name) {
  router.push({ name })
}

const filter = ref('all')

const items = [
  {
    tag: 'Workshops',
    cat: 'workshops',
    date: 'May 2026',
    cap: 'Saturday club, Geometry session',
    h: 280,
    tone: 'soft',
    img: 'workshop-pipeline.jpg',
  },
  {
    tag: 'Competitions',
    cat: 'competitions',
    date: 'May 2026',
    cap: 'Greater Banjul Regional Round',
    h: 360,
    tone: 'burgundy',
    img: 'gbr-round.jpg',
  },
  {
    tag: 'Workshops',
    cat: 'workshops',
    date: 'Apr 2026',
    cap: 'Easter bootcamp · Number theory',
    h: 240,
    tone: 'green',
    img: 'easter-bootcamp.jpg',
  },
  {
    tag: 'Workshops',
    cat: 'workshops',
    date: 'Mar 2026',
    cap: 'Teacher clinic Vol. 12',
    h: 260,
    tone: 'soft',
    img: 'teacher-clinic.jpg',
  },
  {
    tag: 'Competitions',
    cat: 'competitions',
    date: 'Feb 2026',
    cap: 'Awards night, GMO 2025',
    h: 360,
    tone: 'burgundy',
    img: 'awards-night.jpg',
  },
  {
    tag: 'Workshops',
    cat: 'workshops',
    date: 'Jan 2026',
    cap: 'New Year problem set launch',
    h: 220,
    tone: 'green',
    img: 'problem-set.jpg',
  },
]

const filters = [
  { k: 'all', l: 'All' },
  { k: 'workshops', l: 'Workshops' },
  { k: 'competitions', l: 'Competitions' },
]

const filtered = computed(() => (filter.value === 'all' ? items : items.filter((i) => i.cat === filter.value)))

</script>

<template>
  <PageHeader
    title="Gallery"
    subtitle="Moments from the field — workshops, olympiads, school visits and quiet sessions of problem-solving."
  >
    <template #crumb>
      <a class="cursor-pointer hover:text-burgundy" @click="go('home')">Home</a> / <span>Gallery</span>
    </template>
  </PageHeader>

  <section class="section-y">
    <div class="container-yma">
      <div class="flex gap-2 flex-wrap mb-8">
        <button
          v-for="f in filters"
          :key="f.k"
          :class="[
            'px-3.5 py-2 rounded-full text-[13px] font-semibold border border-transparent cursor-pointer transition-all duration-150',
            filter === f.k ? 'bg-burgundy text-white' : 'bg-bg-soft text-ink-2 hover:bg-bg-soft-2',
          ]"
          @click="filter = f.k"
        >
          {{ f.l }}
        </button>
      </div>

      <div class="columns-1 sm:columns-2 lg:columns-3 gap-4">
        <div
          v-for="(it, i) in filtered"
          :key="i"
          :style="{ height: it.h + 'px' }"
          class="break-inside-avoid mb-4 rounded-xl overflow-hidden cursor-pointer relative block group"
        >
          <Placeholder :label="it.img" :src="it.src" :alt="it.alt" :tone="it.tone" class-name="h-full" />
          <div
            class="absolute inset-0 bg-linear-to-t from-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 text-white flex items-end pointer-events-none"
          >
            <div>
              <span
                class="text-[11px] bg-green text-white px-2 py-0.5 rounded font-bold tracking-wider uppercase mb-1.5 inline-block"
                >{{ it.tag }}</span
              >
              <div class="text-[13px] font-semibold">{{ it.cap }} · {{ it.date }}</div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </section>

  <CTABand />
</template>
