<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '../components/Icon.vue'
import FormShell from '../components/FormShell.vue'
import FormSidebar from '../components/FormSidebar.vue'
import SuccessScreen from '../components/SuccessScreen.vue'

const router = useRouter()
function go(name) {
  router.push({ name })
}

const sent = ref(false)
const roles = ref(new Set())
const avail = ref(new Set())

function toggleRole(k) {
  const s = new Set(roles.value)
  s.has(k) ? s.delete(k) : s.add(k)
  roles.value = s
}
function toggleAvail(k) {
  const s = new Set(avail.value)
  s.has(k) ? s.delete(k) : s.add(k)
  avail.value = s
}

function submit() {
  sent.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const steps = [
  { t: 'Submit your application', d: 'Tell us a bit about you, what you can offer, and your availability.' },
  { t: 'Short conversation', d: 'A 20-min chat with our coordinator and a brief background check.' },
  { t: 'Onboarding day', d: 'One Saturday of training, then matched to a club or 1:1 mentee.' },
]
const why = [
  'Train alongside experienced mentors',
  'Choose your time commitment',
  'Optional path to leadership roles',
  'References & certificate after one year',
]

const roleOptions = [
  'Tutor (small group)',
  '1:1 Mentor',
  'Event volunteer',
  'Curriculum / problem-setter',
  'Photo & video',
  'Logistics & ops',
]
const availOptions = ['Weekday evenings', 'Saturdays', 'Sundays', 'School holidays', 'Remote only', 'Occasional travel']
</script>

<template>
  <FormShell
    title="Volunteer with us"
    subtitle="Four hours a month is enough to change a student's year. We onboard new mentors every other month — apply any time."
  >
    <template #crumb>
      <a class="cursor-pointer hover:text-burgundy" @click="go('home')">Home</a> /
      <a class="cursor-pointer hover:text-burgundy" @click="go('programs')">Get involved</a> /
      <span>Volunteer</span>
    </template>

    <template #sidebar>
      <FormSidebar :steps="steps" :why="why" contact />
    </template>

    <SuccessScreen
      v-if="sent"
      title="Thank you for volunteering!"
      message="We've received your application. A coordinator will reach out within 5 days to schedule a short conversation. Our next onboarding day is on the second Saturday of next month."
      primary="See current events"
      secondary="Back to home"
      @primary="go('events')"
      @secondary="go('home')"
    />

    <form v-else class="grid gap-5" @submit.prevent="submit">
      <div
        class="text-[13px] font-bold tracking-widest uppercase text-burgundy pt-2 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-line"
      >
        About you
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Full name <span class="text-burgundy">*</span></label>
          <input type="text" required placeholder="Your full name" class="field-input" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Email <span class="text-burgundy">*</span></label>
          <input type="email" required placeholder="you@example.com" class="field-input" />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Phone <span class="text-burgundy">*</span></label>
          <input type="tel" required placeholder="+220 …" class="field-input" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Occupation</label>
          <input type="text" placeholder="Engineer · Teacher · Student · …" class="field-input" />
        </div>
      </div>

      <div
        class="text-[13px] font-bold tracking-widest uppercase text-burgundy pt-2 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-line"
      >
        How you'd like to help
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-[13px] font-semibold text-ink">Role interest <span class="text-burgundy">*</span></label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <label v-for="r in roleOptions" :key="r" :class="['check-pill', roles.has(r) && 'check-pill-checked']">
            <input type="checkbox" :checked="roles.has(r)" class="accent-burgundy" @change="toggleRole(r)" />
            {{ r }}
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-[13px] font-semibold text-ink">Availability <span class="text-burgundy">*</span></label>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          <label v-for="r in availOptions" :key="r" :class="['check-pill', avail.has(r) && 'check-pill-checked']">
            <input type="checkbox" :checked="avail.has(r)" class="accent-burgundy" @change="toggleAvail(r)" />
            {{ r }}
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-[13px] font-semibold text-ink">A short bio / your experience with math</label>
        <textarea
          placeholder="Tell us about your background. Olympiad medalist? Maths teacher? Self-taught? All welcome."
          class="field-input resize-y min-h-30"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-[13px] font-semibold text-ink">References (optional)</label>
        <textarea
          placeholder="Name, role, and how to reach them. We'll only contact after our chat."
          class="field-input resize-y min-h-30"
        />
      </div>

      <div
        class="text-[13px] font-bold tracking-widest uppercase text-burgundy pt-2 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-line"
      >
        Consent
      </div>
      <div class="flex gap-3 text-[13px] text-ink-2 bg-bg-soft p-4 rounded-[10px] border border-line items-start">
        <input type="checkbox" required class="mt-1 accent-burgundy shrink-0" />
        <span
          >I understand YMA volunteers work with minors and consent to a background reference check.
          <span class="text-burgundy">*</span></span
        >
      </div>

      <button type="submit" class="btn btn-primary btn-lg justify-self-start">
        Submit application <Icon name="arrow" />
      </button>
    </form>
  </FormShell>
</template>
