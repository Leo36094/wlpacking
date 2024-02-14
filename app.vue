<template>
  <div class="app">
    <Nav />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: '維利包裝有限公司',
  meta: [
    {
      name: 'description',
      content:
        '維利包裝有限公司，提供木箱、棧板、產品包裝等服務，並且提供木材檢疫熱處理服務。',
    },
  ],
});

// components
import Nav from './components/Nav';

// views
import Footer from './components/Footer.vue';
</script>
<style lang="scss" scoped>
.app {
  color: $color-thicker;
  min-height: 100vh;
  font-size: 1.1rem;
}
</style>
