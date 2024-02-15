<template>
  <div class="title-group" :id="anchor">
    <h2 class="title" :style="desc ? { marginBottom: '1rem' } : {}">
      {{ title }}
    </h2>
    <p v-if="desc" class="desc">
      {{ desc }}
    </p>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  title: string;
  desc?: string;
  anchor?: string;
}>();
</script>
<style lang="scss" scoped>
.title-group {
  text-align: center;
  margin: 1rem 0;
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .desc {
    margin-bottom: 1rem;
  }
}
</style>
