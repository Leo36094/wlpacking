<template>
  <div class="title-group">
    <h2 class="title">{{ title }}</h2>
    <p v-if="desc" class="desc">
      {{ desc }}
    </p>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  title: string;
  desc?: string;
}>();
</script>
<style lang="scss" scoped>
.title-group {
  text-align: center;
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .desc {
    margin-bottom: 1rem;
  }
}
</style>
