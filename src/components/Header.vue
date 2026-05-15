<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NAV_ITEMS } from '../nav.js'
import Logo from './Logo.vue'
import Icon from './Icon.vue'

const router = useRouter()
const route = useRoute()
const open = ref(false)

function go(name) {
  router.push({ name })
}

watch(() => route.name, () => { open.value = false })
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md backdrop-saturate-180 border-b border-line">
    <div class="container-yma flex items-center justify-between h-19 gap-6">
      <Logo @go="go"/>
      <nav class="hidden lg:flex items-center gap-1">
        <span
          v-for="n in NAV_ITEMS" :key="n.key"
          :class="[
            'relative px-3.5 py-2.5 text-sm rounded-lg cursor-pointer transition-colors duration-180',
            route.name === n.key
              ? 'text-burgundy font-bold after:content-[\'\'] after:absolute after:-bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-burgundy after:rounded-sm'
              : 'text-ink-2 font-medium hover:text-burgundy',
          ]"
          @click="go(n.key)"
        >{{ n.label }}</span>
      </nav>
      <div class="flex items-center gap-2.5">
        <button
          class="btn btn-ghost btn-sm hidden lg:inline-flex"
          @click="go('volunteer')"
        >Volunteer</button>
        <button
          class="btn btn-primary btn-sm hidden sm:inline-flex"
          @click="go('register')"
        >Join Us</button>
        <button
          class="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-[10px] border border-line"
          @click="open = !open"
          aria-label="Menu"
        >
          <Icon :name="open ? 'close' : 'menu'" :size="22"/>
        </button>
      </div>
    </div>
    <div
      :class="[
        'fixed inset-x-0 top-19 bottom-0 bg-white z-49 p-6 border-t border-line',
        'flex flex-col gap-1 transition-all duration-200',
        open ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-3 opacity-0 pointer-events-none',
      ]"
    >
      <span
        v-for="n in NAV_ITEMS" :key="n.key"
        :class="[
          'px-4 py-4 text-lg border-b border-line cursor-pointer',
          route.name === n.key ? 'text-burgundy font-bold' : 'text-ink-2 font-medium hover:text-burgundy',
        ]"
        @click="go(n.key)"
      >{{ n.label }}</span>
      <button class="btn btn-secondary mt-4" @click="go('volunteer')">Volunteer With Us</button>
      <button class="btn btn-primary mt-4" @click="go('register')">Join Us</button>
    </div>
  </header>
</template>
