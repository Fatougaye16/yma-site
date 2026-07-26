<script setup>
import { useRouter } from 'vue-router'
import Placeholder from '../components/Placeholder.vue'
import PageHeader from '../components/PageHeader.vue'
import CTABand from '../components/CTABand.vue'

const router = useRouter()
function go(name) {
  router.push({ name })
}

const past = [
  {
    day: '12',
    mo: 'Apr',
    y: '2026',
    title: 'Easter Bootcamp · Number Theory',
    img: 'bootcamp-apr.jpg',
    tag: 'Bootcamp',
    tone: 'soft',
    recap: '40 students, 5 days, one beautiful problem each morning.',
  },
  {
    day: '27',
    mo: 'Mar',
    y: '2026',
    title: 'Girls in Math Day',
    img: 'girls-math.jpg',
    tag: 'Community',
    tone: 'burgundy',
    recap: '130 girls from 22 schools, panel with 3 women in STEM.',
  },
  {
    day: '15',
    mo: 'Mar',
    y: '2026',
    title: 'Lower River Regional Round',
    img: 'lrr-round.jpg',
    tag: 'Olympiad',
    tone: 'green',
    recap: 'First time we hosted in Mansa Konko. 64 participants.',
  },
  {
    day: '09',
    mo: 'Feb',
    y: '2026',
    title: 'Teacher Clinic Vol. 12',
    img: 'teacher-clinic.jpg',
    tag: 'Teacher',
    tone: 'soft',
    recap: 'A lesson on Pythagoras without rote — 18 teachers attended.',
  },
  {
    day: '21',
    mo: 'Jan',
    y: '2026',
    title: 'New Year Problem Set Launch',
    img: 'problem-set.jpg',
    tag: 'Workshop',
    tone: 'burgundy',
    recap: '52-problem set released free for all secondary schools.',
  },
  {
    day: '14',
    mo: 'Dec',
    y: '2025',
    title: 'December Bootcamp · Combinatorics',
    img: 'dec-bootcamp.jpg',
    tag: 'Bootcamp',
    tone: 'green',
    recap: 'Closing showcase: students built their own problem sets.',
  },
]
</script>

<template>
  <PageHeader
    title="Events & happenings"
    subtitle="Olympiad rounds, workshops, bootcamps, and community days — open to students, teachers, mentors and parents."
  >
    <template #crumb>
      <a class="cursor-pointer hover:text-burgundy" @click="go('home')">Home</a> / <span>Events</span>
    </template>
  </PageHeader>

  <section class="section-y">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
        <h2
          class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5"
        >
          Past <em class="text-burgundy italic">events</em>.
        </h2>
        <p class="text-ink-3 text-[17px] max-w-115">
          Recaps from workshops, olympiad rounds, bootcamps and community days.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="(p, i) in past" :key="i" class="card-base">
          <div class="aspect-4/3 bg-bg-soft-2 relative overflow-hidden">
            <Placeholder :label="p.img" :tone="p.tone || 'soft'" class-name="h-full !rounded-none" />
          </div>
          <div class="p-6 flex flex-col gap-3 flex-1">
            <div class="flex items-center justify-between gap-3 flex-wrap">
              <span class="text-[11px] font-bold tracking-wider uppercase text-green-dark">{{ p.tag }}</span>
              <span class="text-xs text-ink-3">{{ p.mo }} {{ p.day }}, {{ p.y }}</span>
            </div>
            <h3 class="text-xl font-bold leading-snug text-ink">{{ p.title }}</h3>
            <p class="text-ink-3 text-sm leading-relaxed">{{ p.recap }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <CTABand />
</template>
