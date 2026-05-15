<script setup>
import { useRouter } from 'vue-router'
import Icon from '../components/Icon.vue'
import Placeholder from '../components/Placeholder.vue'
import MathPatterns from '../components/MathPatterns.vue'
import StatsRow from '../components/StatsRow.vue'
import CTABand from '../components/CTABand.vue'
import TestimonialCarousel from '../components/TestimonialCarousel.vue'

const router = useRouter()
function go(name) { router.push({ name }) }

const featuredPrograms = [
  { tag:'Workshops', title:'Saturday Math Club', desc:'Weekly after-school sessions covering problem-solving, geometry, and number theory beyond the syllabus.', age:'Ages 12–18', meta:'12 weeks', tone:'burgundy', img:'workshop-photo.jpg' },
  { tag:'Competitions', title:'Gambia Math Olympiad', desc:'Annual national competition with regional rounds, finals, and a pipeline to the Pan-African Olympiad.', age:'Grades 7–12', meta:'May annual', tone:'green', img:'olympiad-photo.jpg' },
  { tag:'Outreach', title:'Rural Schools Tour', desc:'Two-week traveling bootcamp visiting partner schools in CRR and URR each long vacation.', age:'Grades 5–9', meta:'August', tone:'soft', img:'rural-tour-photo.jpg' },
]

const upcomingEvents = [
  { day:'24', mo:'May', title:'Greater Banjul Regional Math Round', loc:'GTTI Hall, Kanifing', time:'9:00 AM – 2:00 PM', tag:'Olympiad' },
  { day:'07', mo:'Jun', title:'Geometry Without Coordinates — Saturday Workshop', loc:'YMA Center, Pipeline', time:'10:00 AM – 12:30 PM', tag:'Workshop' },
  { day:'22', mo:'Jun', title:'Parents & Mentors Open Day', loc:'British Council, Bertil Harding', time:'3:00 PM – 5:00 PM', tag:'Community' },
]

const galleryPreview = [
  { h:280, tone:'burgundy', label:'olympiad-finals-2025.jpg' },
  { h:200, tone:'green', label:'workshop-pipeline.jpg' },
  { h:240, tone:'soft', label:'rural-tour-crr.jpg' },
  { h:220, tone:'soft', label:'mentor-session.jpg' },
  { h:280, tone:'burgundy', label:'awards-night.jpg' },
  { h:200, tone:'green', label:'team-photo.jpg' },
]

const blogPosts = [
  { tag:'Field notes', title:'What we learned from 12 weeks in Basse', date:'May 8, 2026', read:'6 min read', tone:'soft', img:'basse-cover.jpg' },
  { tag:'Teaching', title:'A simple framework for teaching word problems', date:'Apr 22, 2026', read:'4 min read', tone:'green', img:'word-problems.jpg' },
  { tag:'Student story', title:'How Aji Sarjo built a math club at her school', date:'Apr 09, 2026', read:'5 min read', tone:'burgundy', img:'aji-portrait.jpg' },
]

const partners = ['UNICEF GAMBIA','MoBSE','UTG','AFRIMATH','QELEM','GAMTEL','BRITISH COUNCIL','UN ECA','NSGA','PEACE CORPS','BAC','MRCG']
</script>

<template>
  <!-- HERO -->
  <section class="relative pt-22 pb-24 bg-bg-soft overflow-hidden max-md:pt-14 max-md:pb-18">
    <MathPatterns variant="grid"/>
    <div class="container-yma">
      <div class="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center relative z-10">
        <div>
          <span class="eyebrow mb-6">Young Mathematician's Association · The Gambia</span>
          <h1 class="font-display font-normal text-[clamp(44px,6vw,84px)] leading-[1.08] tracking-tight text-burgundy mb-8 pb-1 mt-6">
            Empowering young minds through <em class="italic text-green-dark">mathematics</em>.
          </h1>
          <p class="text-[19px] leading-relaxed text-ink-2 mb-9 max-w-130">
            We run workshops, competitions, and mentorship across The Gambia — building confident problem-solvers, one classroom at a time.
          </p>
          <div class="flex gap-3.5 flex-wrap mb-12">
            <button class="btn btn-primary btn-lg" @click="go('register')">
              Join Us <Icon name="arrow"/>
            </button>
            <button class="btn btn-secondary btn-lg" @click="go('programs')">
              Explore Programs
            </button>
          </div>
          <div class="flex items-center gap-6 flex-wrap">
            <span class="text-[11px] font-bold tracking-[0.14em] uppercase text-ink-3">Trusted by</span>
            <div class="flex items-center gap-7 flex-wrap">
              <span v-for="t in ['UNICEF GAMBIA','MoBSE','UTG','AFRIMATH']" :key="t"
                    class="text-[13px] font-bold text-ink-4 tracking-wide opacity-70 inline-flex items-center gap-1.5">{{ t }}</span>
            </div>
          </div>
        </div>
        <div class="relative aspect-5/6 max-lg:aspect-4/3 rounded-2xl overflow-hidden">
          <Placeholder label="hero-photo · students-at-workshop.jpg" tone="burgundy" class-name="h-full">
            <svg class="absolute top-6 right-6" width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="50" stroke="white" stroke-width="1.5" opacity="0.35"/>
              <circle cx="60" cy="60" r="34" stroke="white" stroke-width="1.5" opacity="0.45"/>
              <text x="60" y="68" text-anchor="middle" fill="white" font-family="Georgia, serif" font-style="italic" font-size="28" opacity="0.7">π</text>
            </svg>
            <svg class="absolute bottom-6 left-6" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <polygon points="40,10 70,60 10,60" stroke="white" stroke-width="1.5" opacity="0.4" fill="none"/>
            </svg>
          </Placeholder>
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
          The Young Mathematician's Association is a Gambian non-profit nurturing curiosity, confidence and rigour in students aged 10–22 — through after-school clubs, regional olympiads, mentorship and outreach to underserved schools.
          <span @click="go('about')" class="text-burgundy cursor-pointer underline decoration-[1.5px] underline-offset-4">Read our story →</span>
        </p>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="container-yma">
    <StatsRow/>
  </section>

  <!-- FEATURED PROGRAMS -->
  <section class="section-y">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
        <h2 class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5">
          Our <em class="text-burgundy italic">programs</em>, where curiosity becomes confidence.
        </h2>
        <p class="text-ink-3 text-[17px] max-w-115">
          Four core program families that reach students wherever they are — in school, after class, on weekends, and during holidays.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article class="card-base" v-for="(p,i) in featuredPrograms" :key="i">
          <div class="aspect-16/10 bg-bg-soft-2 relative overflow-hidden">
            <Placeholder :label="p.img" :tone="p.tone" class-name="h-full !rounded-none"/>
          </div>
          <div class="p-6 flex flex-col gap-3 flex-1">
            <span class="text-[11px] font-bold tracking-wider uppercase text-green-dark">{{ p.tag }}</span>
            <h3 class="text-xl font-bold leading-snug text-ink">{{ p.title }}</h3>
            <p class="text-ink-3 text-sm leading-relaxed">{{ p.desc }}</p>
            <div class="flex gap-4 flex-wrap text-xs text-ink-3 py-2">
              <span class="inline-flex items-center gap-1.5"><Icon name="user" :size="14"/> {{ p.age }}</span>
              <span class="inline-flex items-center gap-1.5"><Icon name="clock" :size="14"/> {{ p.meta }}</span>
            </div>
            <a class="text-link mt-auto" @click="go('programs')">Learn more <Icon name="arrowR"/></a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- UPCOMING EVENTS -->
  <section class="section-y bg-bg-soft">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
        <h2 class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5">
          Upcoming <em class="text-burgundy italic">events</em>.
        </h2>
        <p class="text-ink-3 text-[17px] max-w-115">
          Workshops, regional rounds, and community meetups — open to students, teachers and parents.
        </p>
      </div>
      <div>
        <div
          v-for="(e,i) in upcomingEvents" :key="i"
          class="grid grid-cols-[110px_1fr_auto] max-sm:grid-cols-[80px_1fr] gap-7 max-sm:gap-4 items-center py-6 border-b border-line last:border-b-0 transition-[padding] duration-180 hover:pl-3"
        >
          <div class="bg-burgundy text-white rounded-[10px] py-3.5 px-3 max-sm:py-2.5 max-sm:px-2 text-center font-display leading-none">
            <span class="block text-xs font-sans font-bold tracking-[0.14em] uppercase mb-1 opacity-90">{{ e.mo }}</span>
            <span class="block text-4xl max-sm:text-[26px] tracking-tight">{{ e.day }}</span>
          </div>
          <div>
            <div class="flex gap-2.5 items-center mb-1">
              <span class="badge-base bg-green-soft text-green-dark">{{ e.tag }}</span>
            </div>
            <h3 class="text-[19px] font-bold mb-1.5 text-ink leading-snug">{{ e.title }}</h3>
            <div class="flex gap-4 flex-wrap text-[13px] text-ink-3">
              <span class="inline-flex items-center gap-1.5"><Icon name="pin" :size="14"/> {{ e.loc }}</span>
              <span class="inline-flex items-center gap-1.5"><Icon name="clock" :size="14"/> {{ e.time }}</span>
            </div>
          </div>
          <button class="btn btn-ghost btn-sm max-sm:col-start-2 max-sm:justify-self-start" @click="go('events')">
            RSVP <Icon name="arrowR"/>
          </button>
        </div>
      </div>
      <div class="mt-8 text-center">
        <button class="btn btn-ghost" @click="go('events')">View all events <Icon name="arrowR"/></button>
      </div>
    </div>
  </section>

  <!-- TESTIMONIAL -->
  <section class="section-y">
    <div class="container-yma">
      <TestimonialCarousel/>
    </div>
  </section>

  <!-- GALLERY PREVIEW -->
  <section class="section-y bg-bg-soft">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
        <h2 class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5">
          Moments from the <em class="text-burgundy italic">field</em>.
        </h2>
        <p class="text-ink-3 text-[17px] max-w-115">
          Workshops, olympiads, school visits — captured by our volunteers.
        </p>
      </div>
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 *:break-inside-avoid *:mb-4 *:rounded-xl *:overflow-hidden *:cursor-pointer *:relative *:block">
        <div v-for="(g,i) in galleryPreview" :key="i" :style="{ height: g.h + 'px' }">
          <Placeholder :label="g.label" :tone="g.tone" class-name="h-full"/>
        </div>
      </div>
      <div class="mt-8 text-center">
        <button class="btn btn-ghost" @click="go('gallery')">Open full gallery <Icon name="arrowR"/></button>
      </div>
    </div>
  </section>

  <CTABand/>

  <!-- LATEST POSTS -->
  <section class="section-y">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
        <h2 class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5">
          From the <em class="text-burgundy italic">blog</em>.
        </h2>
        <p class="text-ink-3 text-[17px] max-w-115">
          Field notes, teaching ideas, and stories from our students and mentors.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article class="card-base cursor-pointer" v-for="(b,i) in blogPosts" :key="i" @click="go('blog')">
          <div class="aspect-4/3 bg-bg-soft-2 relative overflow-hidden">
            <Placeholder :label="b.img" :tone="b.tone" class-name="h-full !rounded-none"/>
          </div>
          <div class="p-6 flex flex-col gap-3 flex-1">
            <span class="text-[11px] font-bold tracking-wider uppercase text-green-dark">{{ b.tag }}</span>
            <h3 class="text-xl font-bold leading-snug text-ink">{{ b.title }}</h3>
            <div class="flex gap-3 text-xs text-ink-3 pt-3 border-t border-line mt-auto">
              <span>{{ b.date }}</span><span>·</span><span>{{ b.read }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

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
          v-for="(p,i) in partners" :key="i"
          class="py-5 px-3 border border-line rounded-[10px] bg-white text-center text-[11px] font-bold tracking-wider text-ink-3 transition-all duration-180 cursor-pointer hover:border-burgundy hover:text-burgundy"
        >{{ p }}</div>
      </div>
    </div>
  </section>
</template>
