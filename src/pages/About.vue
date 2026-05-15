<script setup>
import { useRouter } from 'vue-router'
import Icon from '../components/Icon.vue'
import Placeholder from '../components/Placeholder.vue'
import PageHeader from '../components/PageHeader.vue'
import StatsRow from '../components/StatsRow.vue'
import CTABand from '../components/CTABand.vue'

const router = useRouter()
function go(name) { router.push({ name }) }

const story = [
  { year:'2018', title:'A first Saturday', text:'Three university students start running free Saturday math sessions at Nusrat SSS. Twelve students show up. Word spreads.' },
  { year:'2020', title:'Registered as YMA', text:'Formally registered as a non-profit, with founding board and a tiny rented room in Pipeline. The pandemic year — clubs go to WhatsApp.' },
  { year:'2022', title:'First Gambia Math Olympiad', text:'Inaugural national competition with 184 students across 17 schools. Regional rounds for the first time in the country.' },
  { year:'2024', title:'Rural Schools Tour', text:'Two-week traveling bootcamp to CRR and URR, reaching 600+ students who had never met an olympiad problem.' },
  { year:'2026', title:'Today', text:'48 mentors, 6 regions, 2,400+ students reached. New partnerships with MoBSE and AFRIMATH. A pipeline to the Pan-African Olympiad opens.' },
]

const values = [
  { icon:'heart', t:'Inclusion', d:'No student is too rural, too poor, or too late to begin. We meet learners where they are.' },
  { icon:'spark', t:'Curiosity', d:'Beautiful problems before techniques. We build the appetite first, the toolkit second.' },
  { icon:'trophy', t:'Excellence', d:'High expectations, generous support. Our students compete at the continental level.' },
  { icon:'users', t:'Mentorship', d:'Every student gets a mentor who has been where they are now. Pay it back, pay it forward.' },
  { icon:'globe', t:'Community', d:'We partner — never parachute. Schools, teachers and parents shape what we run.' },
  { icon:'book', t:'Rigour', d:'Honest feedback, real proofs, real practice. We respect students enough to challenge them.' },
]

const team = [
  { name:'Lamin Ceesay', role:'Co-founder & Director', bio:'Mathematics teacher, Nusrat SSS. Trained at UTG, NSGA fellow.', t:'soft', tag:'LC' },
  { name:'Fatou Njie', role:'Co-founder & Programs Lead', bio:'Engineer, AFRIMATH alumna. Runs the Olympiad pipeline.', t:'burgundy', tag:'FN' },
  { name:'Ousman Bah', role:'Mentor Coordinator', bio:'PhD student, UTG. Coordinates 48 active mentors across regions.', t:'green', tag:'OB' },
  { name:'Aji Sarjo', role:'Outreach Lead', bio:'YMA alumna (2021). Designs rural schools curriculum.', t:'soft', tag:'AS' },
  { name:'Yaya Manneh', role:'Curriculum Lead', bio:'Olympiad medalist. Builds problem sets and trainer guides.', t:'burgundy', tag:'YM' },
  { name:'Isatou Ceesay', role:'Partnerships', bio:'Former MoBSE advisor. Liaises with schools and ministry.', t:'soft', tag:'IC' },
  { name:'Modou Jallow', role:'Community Manager', bio:'Photographer & storyteller. Runs YMA socials and gallery.', t:'green', tag:'MJ' },
  { name:'Mariama Touray', role:'Operations', bio:'Logistics, events, and the person who keeps everything running.', t:'soft', tag:'MT' },
]
</script>

<template>
  <PageHeader
    title="About YMA"
    subtitle="A small Gambian non-profit, eight years old, with a stubborn belief that every child can love mathematics — given the right space, the right people, and beautiful problems."
  >
    <template #crumb>
      <a class="cursor-pointer hover:text-burgundy" @click="go('home')">Home</a> / <span>About</span>
    </template>
  </PageHeader>

  <!-- MISSION & VISION -->
  <section class="section-y">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-9 bg-white border border-line rounded-xl transition-all duration-200 hover:border-green hover:-translate-y-0.5 hover:shadow-(--shadow-soft-md)">
          <div class="w-12 h-12 rounded-xl bg-burgundy-soft text-burgundy grid place-items-center mb-4">
            <Icon name="spark" :size="26"/>
          </div>
          <h3 class="text-[22px] font-bold mb-3 text-ink">Our mission</h3>
          <p class="text-base leading-relaxed text-ink-3">
            To make rigorous, joyful mathematics accessible to every young Gambian — regardless of region, gender, school, or income — and to grow a community of mentors who keep the door open behind them.
          </p>
        </div>
        <div class="p-9 bg-bg-soft border border-line rounded-xl transition-all duration-200 hover:border-green hover:-translate-y-0.5 hover:shadow-(--shadow-soft-md)">
          <div class="w-12 h-12 rounded-xl bg-green-soft text-green-dark grid place-items-center mb-4">
            <Icon name="globe" :size="26"/>
          </div>
          <h3 class="text-[22px] font-bold mb-3 text-ink">Our vision</h3>
          <p class="text-base leading-relaxed text-ink-3">
            A Gambia where every secondary school has a thriving math club, every region has trained mentors, and our students sit confidently among their peers at continental and world olympiads.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- OUR STORY -->
  <section class="section-y bg-bg-soft">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
        <h2 class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5">
          Our <em class="text-burgundy italic">story</em>.
        </h2>
        <p class="text-ink-3 text-[17px] max-w-115">
          From a Saturday afternoon at one school to a national network — built one mentor, one student, one problem at a time.
        </p>
      </div>
      <div class="relative pl-9 max-w-195">
        <div class="absolute left-2.75 top-2 bottom-2 w-0.5 bg-line"/>
        <div v-for="(t, i) in story" :key="i" class="relative pb-10 last:pb-0">
          <div class="absolute -left-9 top-1 w-6 h-6 rounded-full bg-burgundy border-4 border-bg-soft"/>
          <div class="font-display text-[28px] text-green-dark leading-none mb-2">{{ t.year }}</div>
          <h3 class="text-lg font-bold mb-1.5 text-ink">{{ t.title }}</h3>
          <p class="text-ink-3 text-[15px] max-w-135">{{ t.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CORE VALUES -->
  <section class="section-y">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
        <h2 class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5">
          What we <em class="text-burgundy italic">believe</em>.
        </h2>
        <p class="text-ink-3 text-[17px] max-w-115">
          Six values that shape how we recruit, teach, and show up for students.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(v, i) in values" :key="i"
          class="p-7 bg-white border border-line rounded-xl transition-all duration-200 hover:border-green hover:-translate-y-0.5 hover:shadow-(--shadow-soft-md)"
        >
          <div class="w-12 h-12 rounded-xl bg-green-soft text-green-dark grid place-items-center mb-4">
            <Icon :name="v.icon" :size="22"/>
          </div>
          <h3 class="text-[17px] font-bold mb-2 text-ink">{{ v.t }}</h3>
          <p class="text-sm text-ink-3 leading-relaxed">{{ v.d }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TEAM -->
  <section class="section-y bg-bg-soft">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
        <h2 class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5">
          The <em class="text-burgundy italic">team</em>.
        </h2>
        <p class="text-ink-3 text-[17px] max-w-115">
          A mix of teachers, university students and working professionals — all volunteering their Saturdays.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(m, i) in team" :key="i" class="text-center">
          <div class="aspect-4/5 rounded-xl mb-4 overflow-hidden">
            <Placeholder :label="`${m.tag.toLowerCase()}-portrait.jpg`" :tone="m.t" class-name="h-full"/>
          </div>
          <h3 class="text-[17px] font-bold mb-1 text-ink">{{ m.name }}</h3>
          <div class="text-[13px] text-burgundy font-semibold">{{ m.role }}</div>
          <p class="text-[13px] text-ink-3 mt-2 leading-normal">{{ m.bio }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMPACT -->
  <section class="section-y">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
        <h2 class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5">
          Impact so <em class="text-burgundy italic">far</em>.
        </h2>
        <p class="text-ink-3 text-[17px] max-w-115">
          Eight years in, the numbers tell part of the story. The stories tell the rest.
        </p>
      </div>
      <StatsRow/>
      <div class="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 mt-16 items-center p-8 max-md:p-5 border border-line rounded-2xl bg-bg-soft">
        <div class="aspect-4/3 rounded-xl overflow-hidden">
          <Placeholder label="aji-success-story.jpg" tone="burgundy" class-name="h-full"/>
        </div>
        <div>
          <span class="badge-base bg-green-soft text-green-dark">Success story</span>
          <h3 class="font-display font-normal text-3xl text-ink leading-tight mt-4 mb-4">
            From rural Basse to the Pan-African Olympiad.
          </h3>
          <p class="text-base leading-relaxed text-ink-3">
            When Aji Sarjo first joined a YMA workshop in 2021, she had never seen an olympiad-style problem. Three years later she represented The Gambia at the Pan-African Mathematics Olympiad — and now leads our rural outreach.
          </p>
          <a class="text-link mt-6" @click="go('blog')">Read Aji's story <Icon name="arrowR"/></a>
        </div>
      </div>
    </div>
  </section>

  <CTABand/>
</template>
