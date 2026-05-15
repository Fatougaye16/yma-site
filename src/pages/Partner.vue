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

function submit() {
  sent.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const steps = [
  { t: 'Submit your inquiry', d: 'A few details about your organization and the partnership you have in mind.' },
  { t: 'Discovery call (30 min)', d: 'A call with our partnerships lead to scope the opportunity and timing.' },
  { t: 'Co-design & sign', d: 'We co-design the program, agree on scope, and put it on the calendar.' },
]
const why = [
  'Sponsor a regional round or bootcamp',
  'Fund a year of rural outreach',
  'Co-design a school program',
  'Provide in-kind venue, transport, or materials',
  'Employee volunteer days',
]

const orgTypes = [
  'Foundation / philanthropy',
  'Company / corporate',
  'Government / ministry',
  'University / research',
  'School',
  'NGO / non-profit',
  'Individual donor',
]
const interests = [
  'Sponsor an event (Olympiad / Bootcamp)',
  'Fund rural outreach',
  'School partnership / host workshops',
  'Curriculum collaboration',
  'In-kind support (venue, transport, materials)',
  'Employee volunteering',
  "Other — let's discuss",
]
</script>

<template>
  <FormShell
    title="Partner with YMA"
    subtitle="Schools, ministries, foundations and companies — there are many ways to work with us. Tell us a bit about your organization and what you'd like to explore."
  >
    <template #crumb>
      <a class="cursor-pointer hover:text-burgundy" @click="go('home')">Home</a> /
      <a class="cursor-pointer hover:text-burgundy" @click="go('programs')">Get involved</a> /
      <span>Become a partner</span>
    </template>

    <template #sidebar>
      <FormSidebar :steps="steps" :why="why" contact />
    </template>

    <SuccessScreen
      v-if="sent"
      title="Thanks — we look forward to talking!"
      message="Your inquiry has reached our partnerships lead. We will be in touch within three working days to set up a discovery call."
      primary="See our impact"
      secondary="Back to home"
      @primary="go('about')"
      @secondary="go('home')"
    />

    <form v-else class="grid gap-5" @submit.prevent="submit">
      <div
        class="text-[13px] font-bold tracking-widest uppercase text-burgundy pt-2 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-line"
      >
        Your organization
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink"
            >Organization name <span class="text-burgundy">*</span></label
          >
          <input type="text" required placeholder="e.g. Acme Foundation" class="field-input" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Website</label>
          <input type="url" placeholder="https://…" class="field-input" />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Organization type</label>
          <select class="field-input">
            <option value="" disabled selected>Choose…</option>
            <option v-for="t in orgTypes" :key="t">{{ t }}</option>
          </select>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Country / location</label>
          <input type="text" placeholder="The Gambia" class="field-input" />
        </div>
      </div>

      <div
        class="text-[13px] font-bold tracking-widest uppercase text-burgundy pt-2 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-line"
      >
        Contact person
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Full name <span class="text-burgundy">*</span></label>
          <input type="text" required placeholder="Your full name" class="field-input" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Role</label>
          <input type="text" placeholder="Director of Partnerships, etc." class="field-input" />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Email <span class="text-burgundy">*</span></label>
          <input type="email" required class="field-input" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[13px] font-semibold text-ink">Phone</label>
          <input type="tel" class="field-input" />
        </div>
      </div>

      <div
        class="text-[13px] font-bold tracking-widest uppercase text-burgundy pt-2 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-line"
      >
        Partnership
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-[13px] font-semibold text-ink"
          >Partnership interest <span class="text-burgundy">*</span></label
        >
        <select required class="field-input">
          <option value="" disabled selected>Choose…</option>
          <option v-for="i in interests" :key="i">{{ i }}</option>
        </select>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-[13px] font-semibold text-ink">Tell us more <span class="text-burgundy">*</span></label>
        <textarea
          required
          placeholder="What would a great partnership look like for you? Budget, timing, audience…"
          class="field-input resize-y min-h-30"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-[13px] font-semibold text-ink">Preferred contact method</label>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          <label class="check-pill"><input type="radio" name="pref" checked class="accent-burgundy" /> Email</label>
          <label class="check-pill"><input type="radio" name="pref" class="accent-burgundy" /> Phone call</label>
          <label class="check-pill"><input type="radio" name="pref" class="accent-burgundy" /> Video call</label>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-lg justify-self-start">
        Send inquiry <Icon name="arrow" />
      </button>
    </form>
  </FormShell>
</template>
