<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '../components/Icon.vue'
import Placeholder from '../components/Placeholder.vue'
import PageHeader from '../components/PageHeader.vue'
import CTABand from '../components/CTABand.vue'

const router = useRouter()
function go(name) {
  router.push({ name })
}

const filter = ref('all')

const programs = [
  {
    cat: 'workshops',
    tag: 'Workshops',
    title: 'Saturday Math Club',
    desc: 'Weekly after-school sessions covering problem-solving, geometry, number theory and combinatorics. Held at YMA Center and 14 partner schools.',
    benefits: ['Beyond-syllabus problem solving', 'Mentor-to-student ratio 1:6', 'Free for partner-school students'],
    age: 'Ages 12–18',
    freq: 'Saturdays · 12 weeks',
    tone: 'burgundy',
    img: 'saturday-club.jpg',
  },
  {
    cat: 'competitions',
    tag: 'Competitions',
    title: 'Gambia Math Olympiad',
    desc: 'The national olympiad: regional rounds in March, national finals in May, and a pipeline to Pan-African and continental olympiads.',
    benefits: ['Open to all secondary students', 'Travel & accommodation provided', 'Top performers join the GMO Team'],
    age: 'Grades 7–12',
    freq: 'Annual · May',
    tone: 'green',
    img: 'gmo-olympiad.jpg',
  },
  {
    cat: 'workshops',
    tag: 'Workshops',
    title: 'Holiday Bootcamps',
    desc: 'Intensive week-long bootcamps in December and April, focused on a single theme: geometry one camp, number theory the next.',
    benefits: ['5 days, full-time', 'Topic-deep dive', 'Residential option for upcountry'],
    age: 'Ages 14–22',
    freq: 'Dec & Apr',
    tone: 'soft',
    img: 'bootcamp.jpg',
  },
]

const filters = [
  { k: 'all', l: 'All programs' },
  { k: 'workshops', l: 'Workshops' },
  { k: 'competitions', l: 'Competitions' },
]

const filtered = computed(() => (filter.value === 'all' ? programs : programs.filter((p) => p.cat === filter.value)))

const partnerSchools = [
  'Nusrat SSS',
  "St Peter's SSS",
  'Gambia Methodist',
  'Charles Jow Memorial Academy',
  'Kanifing East SSS',
  'Latrikunda Sabiji SSS',
  'Mahad SSS',
  'Babylon Comprehensive SSS',
  'Nemasu SSS',
]
</script>

<template>
  <PageHeader
    title="Programs & activities"
    subtitle="Six program families across workshops, competitions, outreach and mentorship — designed to meet students wherever they are."
  >
    <template #crumb>
      <a class="cursor-pointer hover:text-burgundy" @click="go('home')">Home</a> / <span>Programs</span>
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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="(p, i) in filtered" :key="i" class="card-base">
          <div class="aspect-16/10 bg-bg-soft-2 relative overflow-hidden">
            <Placeholder :label="p.img" :tone="p.tone" class-name="h-full !rounded-none" />
          </div>
          <div class="p-6 flex flex-col gap-3 flex-1">
            <span class="text-[11px] font-bold tracking-wider uppercase text-green-dark">{{ p.tag }}</span>
            <h3 class="text-xl font-bold leading-snug text-ink">{{ p.title }}</h3>
            <p class="text-ink-3 text-sm leading-relaxed">{{ p.desc }}</p>
            <ul class="list-none p-0 my-2 flex flex-col gap-1.5">
              <li v-for="(b, j) in p.benefits" :key="j" class="flex gap-2 text-[13px] text-ink-2">
                <span class="text-green-dark shrink-0 mt-0.5"><Icon name="check" :size="14" /></span>
                <span>{{ b }}</span>
              </li>
            </ul>
            <div class="flex gap-4 flex-wrap text-xs text-ink-3 py-2">
              <span class="inline-flex items-center gap-1.5"><Icon name="user" :size="14" /> {{ p.age }}</span>
              <span class="inline-flex items-center gap-1.5"><Icon name="clock" :size="14" /> {{ p.freq }}</span>
            </div>
            <div class="flex items-center gap-3 flex-wrap mt-2">
              <button class="btn btn-primary btn-sm" @click="go('register')">Register</button>
              <button class="btn btn-ghost btn-sm">View details</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- SCHOOL OUTREACH BAND -->
  <section class="section-y bg-bg-soft">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span class="eyebrow">Schools & community</span>
          <h2 class="font-display font-normal text-[clamp(28px,3vw,40px)] text-ink leading-tight mt-4 mb-6">
            We don't parachute — we <em class="text-burgundy italic">partner</em>.
          </h2>
          <p class="text-[17px] text-ink-3 leading-relaxed mb-6">
            Every workshop we run is co-planned with a school's math department. We share problem sets, train teachers,
            and leave behind a take-home pack so the work doesn't end when we do.
          </p>
          <blockquote class="italic border-l-[3px] border-green pl-4 text-ink m-0 text-[15px]">
            "After YMA visited, three of my students started a math club at break. That's the win — they're carrying it
            now."
            <span class="block mt-2 not-italic text-[13px] text-ink-3">— Mr. Lamin Touray, Armitage High School</span>
          </blockquote>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <button class="btn btn-primary" @click="go('contact')">Bring YMA to your school</button>
          </div>
        </div>
        <div>
          <Placeholder label="school-partnership.jpg" tone="burgundy" aspect="4/3" class-name="!rounded-2xl" />
          <div class="grid grid-cols-3 gap-2 mt-4">
            <div
              v-for="(s, i) in partnerSchools"
              :key="i"
              class="py-3 px-2 bg-white rounded-lg text-center text-[10px] font-bold tracking-wider text-ink-3 border border-line"
            >
              {{ s }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <CTABand />
</template>
