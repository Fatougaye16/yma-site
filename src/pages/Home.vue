<script setup>
import { useRouter } from 'vue-router'
import Icon from '../components/Icon.vue'
import Placeholder from '../components/Placeholder.vue'
import MathPatterns from '../components/MathPatterns.vue'
import StatsRow from '../components/StatsRow.vue'
import CTABand from '../components/CTABand.vue'
import TestimonialCarousel from '../components/TestimonialCarousel.vue'

const router = useRouter()
function go(name) {
  router.push({ name })
}

const featuredPrograms = [
  {
    tag: 'Workshops',
    title: 'Saturday Math Club',
    desc: 'Weekly after-school sessions covering problem-solving, geometry, and number theory beyond the syllabus.',
    age: 'Ages 12–18',
    meta: '12 weeks',
    tone: 'burgundy',
    img: 'workshop-photo.jpg',
    src: '/images/paperland-competition.jpeg',
    alt: 'Students gathered around a laptop working through problems together',
  },
  {
    tag: 'Competitions',
    title: 'Gambia Math Olympiad',
    desc: 'Annual national competition with regional rounds, finals, and a pipeline to the Pan-African Olympiad.',
    age: 'Grades 7–12',
    meta: 'May annual',
    tone: 'green',
    img: 'olympiad-photo.jpg',
    src: '/images/competition.jpeg',
    alt: 'Students seated at desks across a wide hall during an olympiad round',
  },
  {
    tag: 'Outreach',
    title: 'Rural Schools Tour',
    desc: 'Two-week traveling bootcamp visiting partner schools in CRR and URR each long vacation.',
    age: 'Grades 5–9',
    meta: 'August',
    tone: 'soft',
    img: 'rural-tour-photo.jpg',
  },
]

const galleryPreview = [
  { h: 280, tone: 'burgundy', label: 'olympiad-finals-2025.jpg' },
  { h: 200, tone: 'green', label: 'workshop-pipeline.jpg' },
  { h: 240, tone: 'soft', label: 'rural-tour-crr.jpg' },
  { h: 220, tone: 'soft', label: 'mentor-session.jpg' },
  { h: 280, tone: 'burgundy', label: 'awards-night.jpg' },
  {
    h: 200,
    tone: 'green',
    label: 'team-photo.jpg',
    src: '/images/group-photo.jpeg',
    alt: 'The YMA volunteer team together outside the University of The Gambia Faculty of Law',
  },
]

const partners = [
  'NUSRAT SSS',
  'CHARLES JOW',
  'UTG',
  'AFRIMATH',
  'QELEM',
  'GAMTEL',
  'BRITISH COUNCIL',
  'UN ECA',
  'NSGA',
  'PEACE CORPS',
  'BAC',
  'MRCG',
]
</script>

<template>
  <!-- HERO -->
  <section class="relative pt-22 pb-24 bg-bg-soft overflow-hidden max-md:pt-14 max-md:pb-18">
    <MathPatterns variant="grid" />
    <div class="container-yma">
      <div class="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center relative z-10">
        <div>
          <span class="eyebrow mb-6">Young Mathematician's Association · The Gambia</span>
          <h1
            class="font-display font-normal text-[clamp(44px,6vw,84px)] leading-[1.08] tracking-tight text-burgundy mb-8 pb-1 mt-6"
          >
            Empowering young minds through <em class="italic text-green-dark">mathematics</em>.
          </h1>
          <p class="text-[19px] leading-relaxed text-ink-2 mb-9 max-w-130">
            We run workshops, competitions, and mentorship across The Gambia — building confident problem-solvers, one
            classroom at a time.
          </p>
          <div class="flex gap-3.5 flex-wrap mb-12">
            <button class="btn btn-primary btn-lg" @click="go('register')">Join Us <Icon name="arrow" /></button>
            <button class="btn btn-secondary btn-lg" @click="go('programs')">Explore Programs</button>
          </div>
        </div>
        <div class="relative aspect-5/6 max-lg:aspect-4/3 rounded-2xl overflow-hidden">
          <Placeholder
            src="/images/workshop.jpeg"
            alt="A packed hall of students in school uniforms at a YMA workshop"
            eager
            tone="burgundy"
            class-name="h-full"
            img-class="object-[center_9%] max-lg:object-[center_37%]"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- INTRO -->
  <section class="section-y-sm">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-16 items-center">
        <span class="eyebrow">About YMA</span>
        <p class="m-0 text-2xl leading-snug text-ink">
          The Young Mathematician's Association is a Gambian non-profit nurturing curiosity, confidence and rigour in
          students aged 10–22 — through after-school clubs, regional olympiads, mentorship and outreach to underserved
          schools.
          <span
            class="text-burgundy cursor-pointer underline decoration-[1.5px] underline-offset-4"
            @click="go('about')"
            >Read our story →</span
          >
        </p>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="container-yma">
    <StatsRow />
  </section>

  <!-- FEATURED PROGRAMS -->
  <section class="section-y">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
        <h2
          class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5"
        >
          Our <em class="text-burgundy italic">programs</em>, where curiosity becomes confidence.
        </h2>
        <p class="text-ink-3 text-[17px] max-w-115">
          Four core program families that reach students wherever they are — in school, after class, on weekends, and
          during holidays.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="(p, i) in featuredPrograms" :key="i" class="card-base">
          <div class="aspect-16/10 bg-bg-soft-2 relative overflow-hidden">
            <Placeholder :label="p.img" :src="p.src" :alt="p.alt" :tone="p.tone" class-name="h-full !rounded-none" />
          </div>
          <div class="p-6 flex flex-col gap-3 flex-1">
            <span class="text-[11px] font-bold tracking-wider uppercase text-green-dark">{{ p.tag }}</span>
            <h3 class="text-xl font-bold leading-snug text-ink">{{ p.title }}</h3>
            <p class="text-ink-3 text-sm leading-relaxed">{{ p.desc }}</p>
            <div class="flex gap-4 flex-wrap text-xs text-ink-3 py-2">
              <span class="inline-flex items-center gap-1.5"><Icon name="user" :size="14" /> {{ p.age }}</span>
              <span class="inline-flex items-center gap-1.5"><Icon name="clock" :size="14" /> {{ p.meta }}</span>
            </div>
            <a class="text-link mt-auto" @click="go('programs')">Learn more <Icon name="arrowR" /></a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- TESTIMONIAL -->
  <section class="section-y">
    <div class="container-yma">
      <TestimonialCarousel />
    </div>
  </section>

  <!-- GALLERY PREVIEW -->
  <section class="section-y bg-bg-soft">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
        <h2
          class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5"
        >
          Moments from the <em class="text-burgundy italic">field</em>.
        </h2>
        <p class="text-ink-3 text-[17px] max-w-115">
          Workshops, olympiads, school visits — captured by our volunteers.
        </p>
      </div>
      <div
        class="columns-1 sm:columns-2 lg:columns-3 gap-4 *:break-inside-avoid *:mb-4 *:rounded-xl *:overflow-hidden *:cursor-pointer *:relative *:block"
      >
        <div v-for="(g, i) in galleryPreview" :key="i" :style="{ height: g.h + 'px' }">
          <Placeholder :label="g.label" :src="g.src" :alt="g.alt" :tone="g.tone" class-name="h-full" />
        </div>
      </div>
      <div class="mt-8 text-center">
        <button class="btn btn-ghost" @click="go('gallery')">Open full gallery <Icon name="arrowR" /></button>
      </div>
    </div>
  </section>

  <CTABand />

  <!-- PARTNERS -->
  <section class="section-y-sm bg-bg-soft">
    <div class="container-yma">
      <div class="text-center mb-8">
        <span class="eyebrow justify-center">Our partners</span>
        <h2 class="font-display font-normal text-[34px] mt-3 text-ink">
          Built together with schools, ministries, and partners.
        </h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        <div
          v-for="(p, i) in partners"
          :key="i"
          class="py-5 px-3 border border-line rounded-[10px] bg-white text-center text-[11px] font-bold tracking-wider text-ink-3 transition-all duration-180 cursor-pointer hover:border-burgundy hover:text-burgundy"
        >
          {{ p }}
        </div>
      </div>
    </div>
  </section>
</template>
