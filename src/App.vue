<script setup>
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
</script>

<template>
  <Header/>
  <main :data-screen-label="route.name">
    <router-view/>
  </main>
  <Footer/>
</template>
