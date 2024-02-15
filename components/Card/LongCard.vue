<template>
  <div
    class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
  >
    <div class="md:flex h-full">
      <div class="md:shrink-0">
        <img
          class="h-48 w-full h-full object-cover md:h-full md:w-48"
          :src="img"
          alt="Modern building architecture"
        />
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-md text-indigo-500 font-semibold"
        >
          {{ title }}
        </div>
        <p
          href="#"
          class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          {{ subTitle }}
        </p>
        <p class="mt-2 text-slate-500">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  title: string;
  subTitle: string;
  desc: string;
  img: string;
}>();
</script>
<style lang="scss" scoped></style>
