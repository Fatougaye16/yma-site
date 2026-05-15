<template>
  <svg
    v-if="variant === 'grid'"
    class="absolute inset-0 pointer-events-none opacity-50"
    viewBox="0 0 1200 800"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#1a1614" stroke-width="0.5" opacity="0.07" />
      </pattern>
      <pattern id="dots" width="48" height="48" patternUnits="userSpaceOnUse">
        <circle cx="24" cy="24" r="1.5" fill="#8f2021" opacity="0.18" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <rect width="100%" height="100%" fill="url(#dots)" />
    <g opacity="0.13" fill="none" stroke="#8f2021" stroke-width="1.5">
      <circle cx="980" cy="120" r="60" />
      <circle cx="980" cy="120" r="92" />
      <polygon points="120,640 200,720 40,720" />
      <rect x="820" y="560" width="120" height="120" transform="rotate(15 880 620)" />
    </g>
    <g opacity="0.10" font-family="Georgia, serif" fill="#8f2021" font-style="italic">
      <text x="160" y="160" font-size="42">∫</text>
      <text x="1080" y="420" font-size="38">∑</text>
      <text x="80" y="380" font-size="34">π</text>
      <text x="900" y="700" font-size="38">√</text>
      <text x="540" y="780" font-size="30">ƒ(x)</text>
    </g>
  </svg>

  <svg
    v-else-if="variant === 'band'"
    class="absolute inset-0 opacity-[0.07] pointer-events-none"
    viewBox="0 0 1200 400"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="cgrid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" stroke-width="0.7" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#cgrid)" />
    <g fill="none" stroke="#fff" stroke-width="1.5">
      <circle cx="1080" cy="80" r="64" />
      <polygon points="60,320 140,200 220,320" />
    </g>
  </svg>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'grid' },
})
</script>
