<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '../components/Icon.vue'
import Placeholder from '../components/Placeholder.vue'
import PageHeader from '../components/PageHeader.vue'

const router = useRouter()
function go(name) {
  router.push({ name })
}

const view = ref('list')
const filter = ref('all')
const q = ref('')

const posts = [
  {
    id: 1,
    cat: 'fieldnotes',
    tag: 'Field notes',
    title: 'What we learned from 12 weeks in Basse',
    excerpt: 'Three lessons from running our longest rural workshop yet — and one thing we got embarrassingly wrong.',
    date: 'May 8, 2026',
    author: 'Aji Sarjo',
    read: '6 min',
    img: 'basse-cover.jpg',
    tone: 'soft',
  },
  {
    id: 2,
    cat: 'teaching',
    tag: 'Teaching',
    title: 'A simple framework for teaching word problems',
    excerpt:
      'Most students freeze at word problems not because the math is hard but because the translation is. A four-step frame.',
    date: 'Apr 22, 2026',
    author: 'Yaya Manneh',
    read: '4 min',
    img: 'word-problems.jpg',
    tone: 'green',
  },
  {
    id: 3,
    cat: 'student',
    tag: 'Student story',
    title: 'How Aji Sarjo built a math club at her school',
    excerpt: 'From shy participant to club leader in eighteen months. Aji on the books that changed her mind.',
    date: 'Apr 9, 2026',
    author: 'Modou Jallow',
    read: '5 min',
    img: 'aji-portrait.jpg',
    tone: 'burgundy',
  },
  {
    id: 4,
    cat: 'teaching',
    tag: 'Teaching',
    title: 'Why we teach proof before Pythagoras',
    excerpt:
      'A small heresy: students can write proofs in primary school. They just need permission and a beautiful claim.',
    date: 'Mar 24, 2026',
    author: 'Lamin Ceesay',
    read: '7 min',
    img: 'proof.jpg',
    tone: 'soft',
  },
  {
    id: 5,
    cat: 'announce',
    tag: 'Announcement',
    title: 'GMO 2026 registration is open',
    excerpt: 'Regional rounds in March, national finals in May. Free for all secondary students nationwide.',
    date: 'Mar 12, 2026',
    author: 'YMA Team',
    read: '2 min',
    img: 'gmo-2026.jpg',
    tone: 'burgundy',
  },
  {
    id: 6,
    cat: 'fieldnotes',
    tag: 'Field notes',
    title: 'Notes on running a Saturday club for two years',
    excerpt: "Twenty months of weekly sessions. What scaled, what didn't, and the one ritual we will never skip again.",
    date: 'Feb 28, 2026',
    author: 'Ousman Bah',
    read: '9 min',
    img: 'saturday-club.jpg',
    tone: 'green',
  },
]

const filters = [
  { k: 'all', l: 'All' },
  { k: 'fieldnotes', l: 'Field notes' },
  { k: 'teaching', l: 'Teaching' },
  { k: 'student', l: 'Student stories' },
  { k: 'announce', l: 'Announcements' },
]

const categoryCounts = [
  { l: 'Field notes', n: 14 },
  { l: 'Teaching', n: 22 },
  { l: 'Student stories', n: 9 },
  { l: 'Announcements', n: 6 },
]

const filtered = computed(() =>
  posts
    .filter((p) => filter.value === 'all' || p.cat === filter.value)
    .filter(
      (p) =>
        !q.value ||
        p.title.toLowerCase().includes(q.value.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(q.value.toLowerCase()),
    ),
)

const featuredVisible = computed(() => filter.value === 'all' && !q.value)
const featured = computed(() => posts[0])
const listSlice = computed(() => filtered.value.slice(featuredVisible.value ? 1 : 0))

function openArticle() {
  view.value = 'article'
  window.scrollTo({ top: 0, behavior: 'instant' })
}
function backToList() {
  view.value = 'list'
}

const relatedPosts = [
  { title: 'Notes on running a Saturday club for two years', tag: 'Field notes', tone: 'green' },
  { title: 'Why we teach proof before Pythagoras', tag: 'Teaching', tone: 'soft' },
]
</script>

<template>
  <!-- ARTICLE VIEW -->
  <template v-if="view === 'article'">
    <section class="bg-bg-soft pt-14 pb-6 border-b border-line">
      <div class="container-yma">
        <div class="text-xs font-bold tracking-[0.12em] uppercase text-ink-3 flex gap-2 items-center">
          <a class="cursor-pointer hover:text-burgundy" @click="go('home')">Home</a> /
          <a class="cursor-pointer hover:text-burgundy" @click="backToList">Blog</a> /
          <span>Article</span>
        </div>
      </div>
    </section>
    <article class="section-y pt-0">
      <div class="container-yma max-w-195">
        <span class="badge-base bg-green-soft text-green-dark mb-6">Field notes</span>
        <h1
          class="font-display font-normal text-[clamp(40px,5vw,64px)] text-burgundy leading-[1.05] tracking-tight mb-6 mt-4"
        >
          What we learned from 12 weeks in Basse
        </h1>
        <div class="flex gap-3.5 items-center mb-8 pb-6 border-b border-line">
          <div
            class="w-12 h-12 rounded-full bg-burgundy grid place-items-center text-white font-bold text-base shrink-0"
          >
            AS
          </div>
          <div>
            <div class="font-bold text-sm text-ink">Aji Sarjo</div>
            <div class="text-[13px] text-ink-3">Outreach Lead · May 8, 2026 · 6 min read</div>
          </div>
        </div>

        <div class="aspect-video mb-8 rounded-xl overflow-hidden">
          <Placeholder label="article-hero · basse-workshop.jpg" tone="burgundy" class-name="h-full" />
        </div>

        <div class="text-lg leading-[1.7] text-ink-2 flex flex-col gap-5">
          <p>
            In August 2025, four of us packed two cars with problem sets, snacks, and a borrowed projector, and drove
            ten hours east to run our longest rural workshop yet. Twelve weeks later, we left Basse with three new
            mentors, a math club running on Fridays, and a single mistake we still wince at.
          </p>
          <p>Here's what we learned.</p>

          <h2 class="font-display font-normal text-[34px] text-ink mt-4">
            1. The students were not the bottleneck. We were.
          </h2>
          <p>
            We arrived with a curriculum we had refined over four cohorts in the Greater Banjul area. We assumed the gap
            would be in foundations. It wasn't. The gap was in our examples: too urban, too far from the lives of the
            kids in the room. We rewrote the first three weeks in the field, leaning on rice harvests, fishing nets, and
            the maths of a busy ferry crossing.
          </p>

          <blockquote
            class="font-display font-normal text-[28px] leading-snug text-burgundy border-l-[3px] border-burgundy pl-6 my-6 italic"
          >
            "The problems weren't too hard. They were too far away."
          </blockquote>

          <p>
            Once we changed the examples, the same problems landed completely differently. Students started bringing us
            problems from their own lives — how many tickets does the local ferry need to break even? — and we ended up
            with a small notebook of problem ideas we are still working through.
          </p>

          <h2 class="font-display font-normal text-[34px] text-ink mt-4">2. Teachers are the multiplier.</h2>
          <p>
            Every workshop ended with a 45-minute teacher session. That's the part we'll keep forever. Three teachers
            from Basse now run their own clubs, and we send them our weekly problem set. Whatever we ran for 12 weeks,
            they will run for 12 years.
          </p>

          <h2 class="font-display font-normal text-[34px] text-ink mt-4">3. The mistake.</h2>
          <p>
            We promised an end-of-program awards ceremony. We didn't deliver. Logistics, weather, a borrowed car that
            broke down. The students were generous about it. We weren't. The lesson: don't promise the ceremony unless
            the ceremony is already on the calendar with a deposit.
          </p>

          <p>We're going back in November. The first thing on the calendar is the awards ceremony.</p>
        </div>

        <div class="mt-12 p-6 bg-bg-soft rounded-xl flex gap-4 items-center">
          <div class="w-15 h-15 rounded-full bg-burgundy grid place-items-center text-white font-bold text-xl shrink-0">
            AS
          </div>
          <div>
            <div class="font-bold text-ink">Aji Sarjo</div>
            <div class="text-[13px] text-ink-3 mb-1.5">Outreach Lead · YMA Alumna 2021</div>
            <div class="text-sm text-ink-2">
              Aji designs our rural curriculum and represented The Gambia at the Pan-African Mathematics Olympiad.
            </div>
          </div>
        </div>

        <div class="mt-12">
          <h3 class="text-xl font-bold mb-6">Related posts</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article v-for="(p, i) in relatedPosts" :key="i" class="card-base cursor-pointer" @click="backToList">
              <div class="aspect-16/10 bg-bg-soft-2 relative overflow-hidden">
                <Placeholder label="related-post.jpg" :tone="p.tone" class-name="h-full !rounded-none" />
              </div>
              <div class="p-6 flex flex-col gap-3 flex-1">
                <span class="text-[11px] font-bold tracking-wider uppercase text-green-dark">{{ p.tag }}</span>
                <h3 class="text-xl font-bold leading-snug text-ink">{{ p.title }}</h3>
              </div>
            </article>
          </div>
        </div>

        <div class="mt-8 pt-6">
          <button class="btn btn-ghost" @click="backToList"><Icon name="arrowL" /> Back to blog</button>
        </div>
      </div>
    </article>
  </template>

  <!-- LIST VIEW -->
  <template v-else>
    <PageHeader
      title="Blog & news"
      subtitle="Field notes, teaching ideas, and stories from students, teachers and mentors across The Gambia."
    >
      <template #crumb>
        <a class="cursor-pointer hover:text-burgundy" @click="go('home')">Home</a> / <span>Blog</span>
      </template>
    </PageHeader>

    <section class="section-y">
      <div class="container-yma">
        <!-- Search & filters -->
        <div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 mb-8 items-center">
          <div class="relative max-w-120 w-full">
            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-3">
              <Icon name="search" />
            </span>
            <input v-model="q" type="text" placeholder="Search posts…" class="field-input pl-10.5 w-full" />
          </div>
          <div class="flex gap-2 flex-wrap">
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
        </div>

        <!-- Featured -->
        <div
          v-if="featuredVisible"
          class="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 items-center bg-bg-soft p-8 max-md:p-5 rounded-2xl mb-14 cursor-pointer"
          @click="openArticle"
        >
          <div>
            <Placeholder
              :label="featured.img"
              :tone="featured.tone"
              class-name="!rounded-xl min-h-[320px] aspect-[4/3]"
            />
          </div>
          <div>
            <span
              class="inline-block bg-green text-white px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase mb-4"
              >Featured · {{ featured.tag }}</span
            >
            <h2 class="font-display font-normal text-[clamp(28px,3vw,40px)] text-ink leading-tight mb-4">
              {{ featured.title }}
            </h2>
            <p class="text-[17px] text-ink-2 leading-relaxed">{{ featured.excerpt }}</p>
            <div class="flex gap-4 text-[13px] text-ink-3 my-4">
              <span>By {{ featured.author }}</span
              ><span>·</span><span>{{ featured.date }}</span
              ><span>·</span><span>{{ featured.read }}</span>
            </div>
            <button class="btn btn-primary">Read article <Icon name="arrow" /></button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">
            <article v-for="p in listSlice" :key="p.id" class="card-base cursor-pointer" @click="openArticle">
              <div class="aspect-4/3 bg-bg-soft-2 relative overflow-hidden">
                <Placeholder :label="p.img" :tone="p.tone" class-name="h-full !rounded-none" />
              </div>
              <div class="p-6 flex flex-col gap-3 flex-1">
                <span class="text-[11px] font-bold tracking-wider uppercase text-green-dark">{{ p.tag }}</span>
                <h3 class="text-xl font-bold leading-snug text-ink">{{ p.title }}</h3>
                <p class="text-ink-3 text-sm leading-relaxed">{{ p.excerpt }}</p>
                <div class="flex gap-3 text-xs text-ink-3 pt-3 border-t border-line mt-auto">
                  <span>{{ p.author }}</span
                  ><span>·</span><span>{{ p.date }}</span
                  ><span>·</span><span>{{ p.read }}</span>
                </div>
              </div>
            </article>
            <div v-if="filtered.length === 0" class="col-span-full p-12 text-center bg-bg-soft rounded-xl text-ink-3">
              No posts match your search.
            </div>
          </div>

          <aside class="flex flex-col gap-6">
            <div class="p-6 bg-bg-soft rounded-xl">
              <h4 class="text-[13px] tracking-widest uppercase text-burgundy mb-3 font-bold">Newsletter</h4>
              <p class="text-sm text-ink-3 m-0 mb-4">Monthly: new posts, events and a fresh math puzzle.</p>
              <input type="email" placeholder="your@email.com" class="field-input w-full mb-2" />
              <button class="btn btn-primary btn-sm w-full">Subscribe</button>
            </div>
            <div class="p-6 bg-white border border-line rounded-xl">
              <h4 class="text-[13px] tracking-widest uppercase text-burgundy mb-3 font-bold">Popular posts</h4>
              <div class="flex flex-col gap-3.5">
                <a
                  v-for="p in posts.slice(0, 4)"
                  :key="p.id"
                  class="cursor-pointer block border-b border-line pb-3.5 text-sm last:border-b-0 last:pb-0"
                  @click="openArticle"
                >
                  <div class="font-semibold text-ink mb-1">{{ p.title }}</div>
                  <div class="text-xs text-ink-3">{{ p.date }} · {{ p.read }}</div>
                </a>
              </div>
            </div>
            <div class="p-6 bg-white border border-line rounded-xl">
              <h4 class="text-[13px] tracking-widest uppercase text-burgundy mb-3 font-bold">Categories</h4>
              <div class="flex flex-col gap-2">
                <div
                  v-for="(c, i) in categoryCounts"
                  :key="i"
                  class="flex justify-between py-2 text-sm text-ink-2 cursor-pointer"
                >
                  <span>{{ c.l }}</span>
                  <span class="text-ink-3">{{ c.n }}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </template>
</template>
