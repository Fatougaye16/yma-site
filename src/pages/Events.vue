<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '../components/Icon.vue'
import Placeholder from '../components/Placeholder.vue'
import PageHeader from '../components/PageHeader.vue'
import CTABand from '../components/CTABand.vue'

const router = useRouter()
function go(name) {
  router.push({ name })
}

const tab = ref('upcoming')

const upcoming = [
  {
    day: '24',
    mo: 'May',
    y: '2026',
    title: 'Greater Banjul Regional Math Round',
    loc: 'GTTI Hall, Kanifing',
    time: '9:00 AM – 2:00 PM',
    tag: 'Olympiad',
    desc: 'Regional qualifier for the Gambia Math Olympiad. Open to grades 7–12.',
  },
  {
    day: '07',
    mo: 'Jun',
    y: '2026',
    title: 'Geometry Without Coordinates',
    loc: 'YMA Center, Pipeline',
    time: '10:00 AM – 12:30 PM',
    tag: 'Workshop',
    desc: 'Intuitive synthetic geometry: angles, circles, and elegant proofs.',
  },
  {
    day: '15',
    mo: 'Jun',
    y: '2026',
    title: 'Central River Regional Round',
    loc: 'Janjanbureh Senior Secondary',
    time: '9:00 AM – 2:00 PM',
    tag: 'Olympiad',
    desc: 'CRR qualifier. Travel & lunch provided for participating schools.',
  },
  {
    day: '22',
    mo: 'Jun',
    y: '2026',
    title: 'Parents & Mentors Open Day',
    loc: 'British Council, Bertil Harding',
    time: '3:00 PM – 5:00 PM',
    tag: 'Community',
    desc: 'Meet our mentors, see student work, ask anything.',
  },
  {
    day: '05',
    mo: 'Jul',
    y: '2026',
    title: 'GMO National Finals',
    loc: 'University of The Gambia, Faraba',
    time: 'All day',
    tag: 'Olympiad',
    desc: 'The national final. Top 12 students join the GMO Team.',
  },
  {
    day: '18',
    mo: 'Jul',
    y: '2026',
    title: 'Mentor Onboarding (Cohort 14)',
    loc: 'YMA Center, Pipeline',
    time: '10:00 AM – 4:00 PM',
    tag: 'Mentorship',
    desc: 'Training day for new mentors joining the autumn cohort.',
  },
]

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

const schedule = [
  { t: '09:00', l: 'Registration & breakfast' },
  { t: '10:00', l: 'Round 1 — short problems (90 min)' },
  { t: '11:45', l: 'Mentor circles & lunch' },
  { t: '13:30', l: 'Round 2 — proof problems (3 hours)' },
  { t: '16:30', l: 'Awards & closing' },
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
      <div class="flex gap-1.5 border-b border-line overflow-x-auto mb-10">
        <span
          v-for="(t, idx) in [
            { k: 'upcoming', l: 'Upcoming', c: upcoming.length },
            { k: 'past', l: 'Past events', c: past.length },
            { k: 'flyer', l: 'Event detail' },
          ]"
          :key="idx"
          :class="[
            'px-4 py-3 text-sm font-semibold cursor-pointer border-b-2 -mb-px whitespace-nowrap transition-all duration-180',
            tab === t.k ? 'text-burgundy border-burgundy' : 'text-ink-3 border-transparent hover:text-ink',
          ]"
          @click="tab = t.k"
        >
          {{ t.l }}
          <span
            v-if="t.c !== undefined"
            :class="[
              'ml-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold',
              tab === t.k ? 'bg-burgundy-soft text-burgundy' : 'bg-bg-soft-2 text-ink-3',
            ]"
            >{{ t.c }}</span
          >
        </span>
      </div>

      <template v-if="tab === 'upcoming'">
        <div class="flex gap-2 flex-wrap mb-8">
          <button class="px-3.5 py-2 rounded-full text-[13px] font-semibold bg-burgundy text-white cursor-pointer">
            All
          </button>
          <button
            v-for="f in ['Olympiad', 'Workshop', 'Community', 'Mentorship']"
            :key="f"
            class="px-3.5 py-2 rounded-full text-[13px] font-semibold bg-bg-soft text-ink-2 hover:bg-bg-soft-2 cursor-pointer transition-all duration-150"
          >
            {{ f }}
          </button>
        </div>
        <div>
          <div
            v-for="(e, i) in upcoming"
            :key="i"
            class="grid grid-cols-[110px_1fr_auto] max-sm:grid-cols-[80px_1fr] gap-7 max-sm:gap-4 items-center py-6 border-b border-line last:border-b-0 transition-[padding] duration-180 hover:pl-3"
          >
            <div
              class="bg-burgundy text-white rounded-[10px] py-3.5 px-3 max-sm:py-2.5 max-sm:px-2 text-center font-display leading-none"
            >
              <span class="block text-xs font-sans font-bold tracking-[0.14em] uppercase mb-1 opacity-90">{{
                e.mo
              }}</span>
              <span class="block text-4xl max-sm:text-[26px] tracking-tight">{{ e.day }}</span>
            </div>
            <div>
              <div class="flex gap-2.5 items-center mb-1.5">
                <span class="badge-base bg-green-soft text-green-dark">{{ e.tag }}</span>
                <span class="text-xs text-ink-3">{{ e.y }}</span>
              </div>
              <h3 class="text-[19px] font-bold mb-1.5 text-ink leading-snug">{{ e.title }}</h3>
              <p class="text-sm text-ink-3 my-1.5">{{ e.desc }}</p>
              <div class="flex gap-4 flex-wrap text-[13px] text-ink-3">
                <span class="inline-flex items-center gap-1.5"><Icon name="pin" :size="14" /> {{ e.loc }}</span>
                <span class="inline-flex items-center gap-1.5"><Icon name="clock" :size="14" /> {{ e.time }}</span>
              </div>
            </div>
            <div class="flex items-center gap-3 flex-wrap max-sm:col-start-2">
              <button class="btn btn-ghost btn-sm">Details</button>
              <button class="btn btn-primary btn-sm">RSVP <Icon name="arrowR" /></button>
            </div>
          </div>
        </div>
      </template>

      <div v-else-if="tab === 'past'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="(p, i) in past" :key="i" class="card-base cursor-pointer" @click="tab = 'flyer'">
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
            <a class="text-link mt-auto">View recap <Icon name="arrowR" /></a>
          </div>
        </article>
      </div>

      <article v-else-if="tab === 'flyer'">
        <div class="aspect-21/9 rounded-2xl overflow-hidden mb-8">
          <Placeholder label="event-hero · gmo-finals-cover.jpg" tone="burgundy" class-name="h-full" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12">
          <div>
            <span class="badge-base bg-green-soft text-green-dark mb-4">Olympiad · National Final</span>
            <h1 class="font-display font-normal text-5xl max-md:text-4xl text-burgundy leading-[1.05] mb-4 mt-4">
              Gambia Math Olympiad — National Finals 2026
            </h1>
            <div class="flex gap-6 flex-wrap text-sm text-ink-3 mb-8 pb-6 border-b border-line">
              <span class="inline-flex items-center gap-2"
                ><Icon name="calendar" :size="14" /> Sat, 5 Jul 2026 · 9:00 AM – 4:00 PM</span
              >
              <span class="inline-flex items-center gap-2"
                ><Icon name="pin" :size="14" /> University of The Gambia, Faraba Campus</span
              >
              <span class="inline-flex items-center gap-2"
                ><Icon name="users" :size="14" /> 96 finalists, 6 regions</span
              >
            </div>
            <p class="text-[17px] leading-relaxed text-ink-2 mb-6">
              The national final of the Gambia Math Olympiad brings together 96 students from regional rounds for a
              single day of problem-solving, mentorship, and a closing ceremony. Top 12 finalists join the GMO Team and
              represent The Gambia at the Pan-African Mathematics Olympiad.
            </p>

            <h3 class="text-xl font-bold mb-6 mt-8">Schedule</h3>
            <div class="grid gap-2">
              <div
                v-for="(s, i) in schedule"
                :key="i"
                class="grid grid-cols-[80px_1fr] py-3 border-b border-line items-center"
              >
                <span class="font-display text-[22px] text-burgundy">{{ s.t }}</span>
                <span class="text-[15px] text-ink-2">{{ s.l }}</span>
              </div>
            </div>
          </div>
          <aside>
            <div class="lg:sticky lg:top-25">
              <div class="bg-white rounded-xl overflow-hidden border border-line shadow-(--shadow-soft-md)">
                <div class="aspect-3/2 relative">
                  <Placeholder label="gmo-flyer.jpg" tone="burgundy" class-name="h-full !rounded-none" />
                </div>
                <div class="p-5 flex flex-col gap-2">
                  <h3 class="font-display text-2xl text-burgundy font-normal">Register your student</h3>
                  <p class="text-[13px] text-ink-3 m-0">Registration is school-based. Deadline 20 June 2026.</p>
                  <button class="btn btn-primary mt-4" @click="go('register')">
                    Begin registration <Icon name="arrow" />
                  </button>
                  <button class="btn btn-ghost btn-sm mt-2">Download flyer · PDF</button>
                </div>
              </div>
              <div class="p-6 mt-6 bg-bg-soft rounded-xl">
                <h4 class="text-[13px] tracking-widest uppercase text-burgundy mb-3 font-bold">Share</h4>
                <div class="flex gap-2">
                  <button
                    v-for="n in ['fb', 'tw', 'wa', 'mail']"
                    :key="n"
                    class="w-9.5 h-9.5 rounded-full bg-white text-ink-2 grid place-items-center hover:bg-green hover:text-white transition-all duration-180"
                  >
                    <Icon :name="n" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  </section>

  <CTABand v-if="tab !== 'flyer'" />
</template>
