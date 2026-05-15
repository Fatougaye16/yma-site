<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '../components/Icon.vue'
import FormShell from '../components/FormShell.vue'
import FormSidebar from '../components/FormSidebar.vue'
import SuccessScreen from '../components/SuccessScreen.vue'

const router = useRouter()
function go(name) { router.push({ name }) }

const sent = ref(false)
const interests = ref(new Set())
const programs = ref(new Set())

function toggleInterest(k) {
  const s = new Set(interests.value)
  s.has(k) ? s.delete(k) : s.add(k)
  interests.value = s
}
function toggleProgram(k) {
  const s = new Set(programs.value)
  s.has(k) ? s.delete(k) : s.add(k)
  programs.value = s
}

function submit() {
  sent.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const steps = [
  { t:'Submit your registration', d:'Takes about 5 minutes. Your parent/guardian needs to consent.' },
  { t:'We check fit & match a club', d:'We reach out within 7 days with the nearest club and a welcome pack.' },
  { t:'Show up on Saturday', d:'First session is free with no commitment. Bring a notebook.' },
]
const why = [
  'All programs free — no fees, ever',
  'Mentor-to-student ratio of 1:6',
  'Pipeline to national & continental olympiads',
  'Train alongside students from across The Gambia',
]

const interestOptions = ['Geometry','Number theory','Combinatorics','Algebra','Olympiad problems','Math + coding','Math + art','Statistics & data']
const programOptions = ['Saturday Math Club','Gambia Math Olympiad','Holiday Bootcamps','1:1 Mentor Match']
const grades = ['Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12','University Year 1','University Year 2+']
const relations = ['Mother','Father','Guardian','Sibling','Other']
</script>

<template>
  <FormShell
    title="Join YMA as a student"
    subtitle="Complete this form to be matched with a Saturday math club, our mentorship program, or our Olympiad track. All programs are free."
  >
    <template #crumb>
      <a class="cursor-pointer hover:text-burgundy" @click="go('home')">Home</a> /
      <a class="cursor-pointer hover:text-burgundy" @click="go('programs')">Get involved</a> /
      <span>Student registration</span>
    </template>

    <template #sidebar>
      <FormSidebar :steps="steps" :why="why" contact/>
    </template>

    <SuccessScreen
      v-if="sent"
      title="Welcome to YMA!"
      message="We have received your registration. A coordinator will reach out within 7 days to match you to a Saturday club and send a welcome pack. Tick the box below to also receive event invites."
      primary="View upcoming events"
      secondary="Back to home"
      @primary="go('events')"
      @secondary="go('home')"
    />

    <form v-else class="grid gap-5" @submit.prevent="submit">
      <div class="text-[13px] font-bold tracking-widest uppercase text-burgundy pt-2 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-line">
        Student details
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Full name <span class="text-burgundy">*</span></label>
          <input type="text" required placeholder="Aji Sarjo" class="field-input"/>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Date of birth <span class="text-burgundy">*</span></label>
          <input type="date" required class="field-input"/>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">School / institution <span class="text-burgundy">*</span></label>
          <input type="text" required placeholder="Nusrat Senior Secondary School" class="field-input"/>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Grade / Year <span class="text-burgundy">*</span></label>
          <select required class="field-input">
            <option value="" disabled selected>Choose…</option>
            <option v-for="g in grades" :key="g">{{ g }}</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Student email</label>
          <input type="email" placeholder="optional" class="field-input"/>
          <span class="text-xs text-ink-3">Optional — useful if the student has their own email.</span>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Student phone</label>
          <input type="tel" placeholder="optional" class="field-input"/>
        </div>
      </div>

      <div class="text-[13px] font-bold tracking-widest uppercase text-burgundy pt-2 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-line">
        Parent / guardian
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Parent / guardian name <span class="text-burgundy">*</span></label>
          <input type="text" required placeholder="Mariama Sarjo" class="field-input"/>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Relationship</label>
          <select class="field-input">
            <option value="" disabled selected>Choose…</option>
            <option v-for="r in relations" :key="r">{{ r }}</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Parent / guardian phone <span class="text-burgundy">*</span></label>
          <input type="tel" required placeholder="+220 …" class="field-input"/>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Parent / guardian email</label>
          <input type="email" placeholder="optional" class="field-input"/>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-[13px] font-semibold text-ink">Emergency contact <span class="text-burgundy">*</span></label>
        <input type="text" required placeholder="Name + phone — someone other than the parent above" class="field-input"/>
      </div>

      <div class="text-[13px] font-bold tracking-widest uppercase text-burgundy pt-2 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-line">
        What interests you?
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-[13px] font-semibold text-ink">Areas of interest (pick any)</label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <label
            v-for="i in interestOptions" :key="i"
            :class="['check-pill', interests.has(i) && 'check-pill-checked']"
          >
            <input type="checkbox" :checked="interests.has(i)" @change="toggleInterest(i)" class="accent-burgundy"/>
            {{ i }}
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-[13px] font-semibold text-ink">Preferred program(s)</label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <label
            v-for="i in programOptions" :key="i"
            :class="['check-pill', programs.has(i) && 'check-pill-checked']"
          >
            <input type="checkbox" :checked="programs.has(i)" @change="toggleProgram(i)" class="accent-burgundy"/>
            {{ i }}
          </label>
        </div>
      </div>

      <div class="text-[13px] font-bold tracking-widest uppercase text-burgundy pt-2 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-line">
        Consent
      </div>
      <div class="flex gap-3 text-[13px] text-ink-2 bg-bg-soft p-4 rounded-[10px] border border-line items-start">
        <input type="checkbox" required class="mt-1 accent-burgundy shrink-0"/>
        <span>I (parent/guardian) consent to my child participating in YMA programs. I understand YMA may take photos at events for non-commercial use (website, reports, social media) and that I can opt out by emailing <strong>hello@yma.gm</strong>. <span class="text-burgundy">*</span></span>
      </div>
      <div class="flex gap-3 text-[13px] text-ink-2 bg-white p-4 rounded-[10px] border border-line items-start">
        <input type="checkbox" checked class="mt-1 accent-burgundy shrink-0"/>
        <span>Send me invitations to upcoming events and the monthly newsletter.</span>
      </div>

      <button type="submit" class="btn btn-primary btn-lg justify-self-start">Submit registration <Icon name="arrow"/></button>
    </form>
  </FormShell>
</template>
