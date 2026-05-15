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
    tag: 'Outreach',
    cat: 'outreach',
    date: 'Aug 2025',
    cap: 'Rural tour, Janjanbureh',
    h: 220,
    tone: 'green',
    img: 'janj-tour.jpg',
  },
  {
    tag: 'Mentorship',
    cat: 'mentorship',
    date: 'Apr 2026',
    cap: '1:1 mentor session',
    h: 300,
    tone: 'soft',
    img: 'mentor-1on1.jpg',
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
    tag: 'Competitions',
    cat: 'competitions',
    date: 'Mar 2026',
    cap: 'Girls in Math Day',
    h: 340,
    tone: 'burgundy',
    img: 'girls-day.jpg',
  },
  {
    tag: 'Outreach',
    cat: 'outreach',
    date: 'Aug 2025',
    cap: 'Take-home pack distribution',
    h: 200,
    tone: 'soft',
    img: 'packs.jpg',
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
    tag: 'Mentorship',
    cat: 'mentorship',
    date: 'Feb 2026',
    cap: 'New mentor onboarding',
    h: 240,
    tone: 'green',
    img: 'mentor-onboard.jpg',
  },
  {
    tag: 'Outreach',
    cat: 'outreach',
    date: 'Jan 2026',
    cap: 'School visit, Basse',
    h: 300,
    tone: 'soft',
    img: 'basse.jpg',
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
  { k: 'outreach', l: 'Outreach' },
  { k: 'mentorship', l: 'Mentorship' },
]

const filtered = computed(() => (filter.value === 'all' ? items : items.filter((i) => i.cat === filter.value)))

const videos = [
  { t: 'GMO 2025 — Awards night', d: '2:18 · 4.2K views', tone: 'burgundy', img: 'video-gmo.jpg' },
  { t: 'Rural Schools Tour — Aug 2025', d: '3:04 · 2.8K views', tone: 'green', img: 'video-tour.jpg' },
]
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
          <Placeholder :label="it.img" :tone="it.tone" class-name="h-full" />
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

      <!-- VIDEO HIGHLIGHT -->
      <div class="mt-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
          <h2
            class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5"
          >
            Recap <em class="text-burgundy italic">videos</em>.
          </h2>
          <p class="text-ink-3 text-[17px] max-w-115">Two-minute highlight reels from our biggest events.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(v, i) in videos" :key="i" class="card-base cursor-pointer">
            <div class="aspect-video relative bg-bg-soft-2 overflow-hidden">
              <Placeholder :label="v.img" :tone="v.tone" class-name="h-full !rounded-none" />
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/95 grid place-items-center text-burgundy"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 4 20 12 6 20 6 4" />
                </svg>
              </div>
            </div>
            <div class="p-6 flex flex-col gap-3 flex-1">
              <h3 class="text-xl font-bold leading-snug text-ink">{{ v.t }}</h3>
              <div class="flex gap-3 text-xs text-ink-3 pt-3 border-t border-line mt-auto">
                <span>{{ v.d }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <CTABand />
</template>
