<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '../components/Icon.vue'
import PageHeader from '../components/PageHeader.vue'

const router = useRouter()
function go(name) {
  router.push({ name })
}

const sent = ref(false)
const openFaq = ref(0)

function submit() {
  sent.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? -1 : i
}

const faqs = [
  {
    q: 'How does a student join YMA?',
    a: 'Fill in the Join Us form (or your school can register a group). We will get in touch within a week, match you to a nearby Saturday club, and send a welcome pack.',
  },
  {
    q: 'Is there a fee?',
    a: 'No. All YMA programs are free for students. We are funded by partners and small grants. Donations from individuals are welcome but never required.',
  },
  {
    q: 'How do I volunteer as a mentor?',
    a: 'Submit the Volunteer form. We run mentor onboarding every other month — it is one day, plus a short background check. Mentors commit to roughly 4 hours per month.',
  },
  {
    q: 'Can YMA come to my school?',
    a: 'Yes. Use the Contact form, pick "Partnership" and tell us a bit about your school and timing. We try to visit every region twice a year.',
  },
  {
    q: 'Do you support girls-only programs?',
    a: 'Yes. We run a Girls in Math Day annually and several of our regional rounds are deliberately girls-first to lower the social cost of participating.',
  },
]
</script>

<template>
  <PageHeader
    title="Get in touch"
    subtitle="Questions about programs, partnerships, press, or volunteering — we read every message and reply within two working days."
  >
    <template #crumb>
      <a class="cursor-pointer hover:text-burgundy" @click="go('home')">Home</a> / <span>Contact</span>
    </template>
  </PageHeader>

  <section class="section-y">
    <div class="container-yma">
      <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">
        <!-- CONTACT FORM -->
        <div>
          <h2 class="font-display font-normal text-3xl text-ink mb-6">Send us a message</h2>
          <div
            v-if="sent"
            class="bg-green-soft border-[1.5px] border-green rounded-xl p-8 text-center flex flex-col items-center gap-4"
          >
            <div class="w-16 h-16 rounded-full bg-green text-white grid place-items-center">
              <Icon name="check" :size="28" />
            </div>
            <h3 class="text-green-dark text-2xl font-bold">Message received — thank you!</h3>
            <p class="m-0 text-ink-2">
              We will reply within two working days. In the meantime, you might enjoy our latest posts.
            </p>
            <div class="flex flex-wrap items-center gap-3 mt-3 justify-center">
              <button class="btn btn-primary" @click="go('events')">View upcoming events</button>
              <button class="btn btn-ghost" @click="sent = false">Send another</button>
            </div>
          </div>
          <form v-else class="grid gap-5" @submit.prevent="submit">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-2">
                <label class="text-[13px] font-semibold text-ink">Full name <span class="text-burgundy">*</span></label>
                <input type="text" required placeholder="Aji Sarjo" class="field-input" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-[13px] font-semibold text-ink">Email <span class="text-burgundy">*</span></label>
                <input type="email" required placeholder="you@example.com" class="field-input" />
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-[13px] font-semibold text-ink">Subject <span class="text-burgundy">*</span></label>
              <select required defaultValue="" class="field-input">
                <option value="" disabled selected>Choose a topic…</option>
                <option>General question</option>
                <option>Student registration</option>
                <option>Volunteer / mentor</option>
                <option>Partnership / sponsorship</option>
                <option>Press &amp; media</option>
              </select>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-[13px] font-semibold text-ink">Message <span class="text-burgundy">*</span></label>
              <textarea
                required
                placeholder="Tell us about you, your school, or what you'd like to ask…"
                class="field-input resize-y min-h-30"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-[13px] font-semibold text-ink">Attach a file (optional)</label>
              <div
                class="p-6 border-[1.5px] border-dashed border-line-2 rounded-[10px] text-center cursor-pointer text-ink-3 bg-bg-soft"
              >
                <div class="font-semibold text-ink-2 mb-1">Drop a file or click to upload</div>
                <div class="text-xs">PDF, DOCX or images · max 10 MB</div>
              </div>
            </div>
            <div class="p-3.5 bg-bg-soft rounded-[10px] text-[13px] text-ink-3 flex items-center gap-3">
              <div class="w-6 h-6 border-[1.5px] border-line-2 rounded" />
              <span>I'm not a robot · reCAPTCHA</span>
            </div>
            <button type="submit" class="btn btn-primary btn-lg justify-self-start">
              Send message <Icon name="arrow" />
            </button>
          </form>
        </div>

        <!-- CONTACT METHODS + MAP -->
        <div>
          <h3 class="text-[13px] tracking-[0.12em] uppercase text-burgundy mb-4 font-bold">Other ways to reach us</h3>
          <div class="grid gap-4">
            <div
              class="flex gap-4 p-5 rounded-xl bg-white border border-line items-center transition-all duration-180 cursor-pointer hover:border-burgundy hover:-translate-y-0.5"
            >
              <div class="w-11 h-11 rounded-[10px] bg-burgundy-soft text-burgundy grid place-items-center shrink-0">
                <Icon name="mail" />
              </div>
              <div>
                <div class="text-xs text-ink-3 uppercase tracking-wider">Email</div>
                <div class="font-bold text-ink text-[15px]">hello@yma.gm</div>
              </div>
            </div>
            <div
              class="flex gap-4 p-5 rounded-xl bg-white border border-line items-center transition-all duration-180 cursor-pointer hover:border-burgundy hover:-translate-y-0.5"
            >
              <div class="w-11 h-11 rounded-[10px] bg-burgundy-soft text-burgundy grid place-items-center shrink-0">
                <Icon name="phone" />
              </div>
              <div>
                <div class="text-xs text-ink-3 uppercase tracking-wider">Phone</div>
                <div class="font-bold text-ink text-[15px]">+220 300 0000</div>
              </div>
            </div>
            <div
              class="flex gap-4 p-5 rounded-xl bg-white border border-line items-center transition-all duration-180 cursor-pointer hover:border-burgundy hover:-translate-y-0.5"
            >
              <div class="w-11 h-11 rounded-[10px] bg-green-soft text-green-dark grid place-items-center shrink-0">
                <Icon name="wa" />
              </div>
              <div>
                <div class="text-xs text-ink-3 uppercase tracking-wider">WhatsApp</div>
                <div class="font-bold text-ink text-[15px]">+220 700 0000 — chat now</div>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <div class="aspect-4/3 rounded-xl overflow-hidden border border-line relative bg-bg-soft">
              <svg viewBox="0 0 400 300" class="w-full h-full">
                <rect width="400" height="300" fill="#faf8f5" />
                <g stroke="#e9e3da" stroke-width="1">
                  <line v-for="i in 10" :key="'h' + i" x1="0" :y1="(i - 1) * 30" x2="400" :y2="(i - 1) * 30" />
                  <line v-for="i in 14" :key="'v' + i" :x1="(i - 1) * 30" y1="0" :x2="(i - 1) * 30" y2="300" />
                </g>
                <path
                  d="M 0 180 Q 100 160 200 175 T 400 170"
                  stroke="#95ba45"
                  stroke-width="2"
                  fill="none"
                  opacity="0.5"
                />
                <path
                  d="M 0 200 Q 120 220 240 200 T 400 195"
                  stroke="#95ba45"
                  stroke-width="14"
                  fill="none"
                  opacity="0.18"
                />
                <text x="40" y="80" font-size="11" fill="#6b6562" font-family="ui-monospace, monospace">Kanifing</text>
                <text x="260" y="60" font-size="11" fill="#6b6562" font-family="ui-monospace, monospace">
                  Serrekunda
                </text>
                <text x="100" y="240" font-size="11" fill="#6b6562" font-family="ui-monospace, monospace">
                  Bertil Harding Hwy
                </text>
                <g transform="translate(180, 130)">
                  <circle r="14" fill="#8f2021" opacity="0.2" />
                  <circle r="8" fill="#8f2021" />
                  <path d="M 0 -2 L 0 8" stroke="#fff" stroke-width="2" />
                  <text
                    y="-22"
                    text-anchor="middle"
                    font-size="10"
                    fill="#8f2021"
                    font-weight="700"
                    font-family="Manrope, sans-serif"
                  >
                    YMA CENTER
                  </text>
                </g>
              </svg>
            </div>
            <div class="mt-4 p-4 bg-white border border-line rounded-xl">
              <div class="font-bold text-ink mb-2 text-[15px]">YMA Center</div>
              <div class="text-sm text-ink-3 leading-relaxed">
                Pipeline Road, Kanifing<br />
                P.O. Box 1234, KMC<br />
                The Gambia
              </div>
              <div class="mt-3 text-[13px] text-ink-2"><strong>Open:</strong> Mon–Fri, 10am–6pm · Sat, 9am–1pm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section-y bg-bg-soft">
    <div class="container-yma">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14 max-md:gap-4 max-md:mb-9">
        <h2
          class="font-display font-normal text-ink text-[clamp(32px,3.4vw,48px)] tracking-tight leading-[1.12] pb-0.5"
        >
          Quick <em class="text-burgundy italic">questions</em>.
        </h2>
        <p class="text-ink-3 text-[17px] max-w-115">
          Common questions about joining, volunteering, and partnering with YMA.
        </p>
      </div>
      <div class="max-w-210">
        <div
          v-for="(f, i) in faqs"
          :key="i"
          :class="['border-b border-line py-6 cursor-pointer', openFaq === i ? 'group is-open' : 'group']"
          @click="toggleFaq(i)"
        >
          <div class="flex justify-between items-center gap-6 font-bold text-[17px] text-ink">
            <span>{{ f.q }}</span>
            <div
              :class="[
                'w-8 h-8 rounded-full grid place-items-center shrink-0 transition-transform duration-180',
                openFaq === i ? 'bg-burgundy text-white rotate-45' : 'bg-bg-soft text-burgundy',
              ]"
            >
              <Icon name="plus" :size="14" />
            </div>
          </div>
          <div
            :class="[
              'text-[15px] text-ink-3 max-w-180 overflow-hidden transition-all duration-250',
              openFaq === i ? 'mt-3 max-h-80' : 'mt-0 max-h-0',
            ]"
          >
            {{ f.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
