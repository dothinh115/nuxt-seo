<template>
  <div>
    <h1>Test Nuxt SEO</h1>
    <p>Testing @enfyra/nuxt-seo module</p>
  </div>
</template>

<script setup lang="ts">
usePageSEO({
  title: 'Test Page',
  description: 'Testing SEO module',
})
</script>

