<script setup>
import { useRouter } from 'vue-router'
import Logo from './Logo.vue'
import Icon from './Icon.vue'

const router = useRouter()
function go(name) {
  router.push({ name })
}
</script>

<template>
  <footer class="bg-ink text-white/75 pt-18 pb-8">
    <div class="container-yma">
      <div class="grid gap-12 mb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
        <div>
          <Logo in-footer @go="go" />
          <p class="text-sm mt-4 max-w-70 text-white/65 leading-relaxed">
            Building Gambia's next generation of problem-solvers through mathematics, mentorship, and community.
          </p>
          <div class="flex gap-2 mt-5">
            <a
              v-for="(s, i) in [
                { n: 'fb', l: 'Facebook' },
                { n: 'ig', l: 'Instagram' },
                { n: 'tw', l: 'X/Twitter' },
                { n: 'li', l: 'LinkedIn' },
                { n: 'wa', l: 'WhatsApp' },
              ]"
              :key="i"
              :aria-label="s.l"
              class="w-9.5 h-9.5 rounded-full bg-white/5 grid place-items-center text-white/75 transition-all duration-180 cursor-pointer hover:bg-green hover:text-white"
            >
              <Icon :name="s.n" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-white text-[13px] font-bold tracking-[0.12em] uppercase mb-5">Explore</h4>
          <div class="flex flex-col gap-3 text-sm">
            <a class="cursor-pointer text-white/75 hover:text-green transition-colors duration-180" @click="go('about')"
              >About</a
            >
            <a
              class="cursor-pointer text-white/75 hover:text-green transition-colors duration-180"
              @click="go('programs')"
              >Programs</a
            >
            <a
              class="cursor-pointer text-white/75 hover:text-green transition-colors duration-180"
              @click="go('events')"
              >Events</a
            >
            <a
              class="cursor-pointer text-white/75 hover:text-green transition-colors duration-180"
              @click="go('gallery')"
              >Gallery</a
            >
          </div>
        </div>

        <div>
          <h4 class="text-white text-[13px] font-bold tracking-[0.12em] uppercase mb-5">Get involved</h4>
          <div class="flex flex-col gap-3 text-sm">
            <a
              class="cursor-pointer text-white/75 hover:text-green transition-colors duration-180"
              @click="go('register')"
              >Join as student</a
            >
            <a
              class="cursor-pointer text-white/75 hover:text-green transition-colors duration-180"
              @click="go('volunteer')"
              >Volunteer</a
            >
            <a
              class="cursor-pointer text-white/75 hover:text-green transition-colors duration-180"
              @click="go('partner')"
              >Become a partner</a
            >
            <a
              class="cursor-pointer text-white/75 hover:text-green transition-colors duration-180"
              @click="go('contact')"
              >Contact us</a
            >
            <a
              class="cursor-pointer text-white/75 hover:text-green transition-colors duration-180"
              @click="go('contact')"
              >Press inquiries</a
            >
          </div>
        </div>

        <div>
          <h4 class="text-white text-[13px] font-bold tracking-[0.12em] uppercase mb-5">Stay in the loop</h4>
          <p class="text-sm mb-4 text-white/65">Monthly newsletter: events, opportunities, and a fresh math puzzle.</p>
          <form class="flex gap-2 bg-white/5 rounded-[10px] p-1" @submit.prevent>
            <input
              type="email"
              placeholder="your@email.com"
              class="flex-1 bg-transparent border-none text-white px-3 py-2.5 font-sans text-sm outline-none placeholder:text-white/50"
            />
            <button
              type="submit"
              class="bg-green text-white px-4 py-2.5 rounded-lg font-bold text-[13px] tracking-wider"
            >
              Subscribe
            </button>
          </form>
          <div class="mt-5 text-[13px] text-white/65 space-y-1.5">
            <div class="flex items-center gap-2"><Icon name="mail" :size="14" /> <span>hello@yma.gm</span></div>
            <div class="flex items-center gap-2"><Icon name="phone" :size="14" /> <span>+220 300 0000</span></div>
            <div class="flex items-center gap-2"><Icon name="pin" :size="14" /> <span>Kanifing, The Gambia</span></div>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 pt-6 flex justify-between gap-4 text-xs text-white/50 flex-wrap mt-0">
        <span>© 2026 Young Mathematician's Association · The Gambia. All rights reserved.</span>
        <span class="flex gap-4.5">
          <a class="cursor-pointer hover:text-green">Privacy</a>
          <a class="cursor-pointer hover:text-green">Terms</a>
          <a class="cursor-pointer hover:text-green">Child safeguarding</a>
        </span>
      </div>
    </div>
  </footer>
</template>
