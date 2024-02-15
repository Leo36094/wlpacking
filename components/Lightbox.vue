<template>
  <transition name="fade">
    <div
      v-if="show"
      class="lightbox fixed top-0 left-0 w-full h-full flex items-center justify-center z-10"
    >
      <div
        class="fixed top-0 left-0 w-full h-full min-h-screen bg-black/90"
      ></div>
      <button
        class="absolute top-[2%] right-[0.5rem] m-4 text-3xl text-white text-[3rem]"
        @click="closeLightbox"
      >
        <Close />
      </button>
      <div
        class="relative w-full md:w-3/4 h-40% md:h-[50%] lg:h-[55%] xl:h-[60%] bg-black border border-red flex item-center justify-center"
      >
        <Swiper
          :pagination="true"
          @swiper="swiper = $event"
          class="border border-gray-700 w-full flex items-center justify-center"
        >
          <SwiperSlide v-for="(img, idx) in imgs" :key="idx">
            <div
              class="w-full h-full lg:w-[80%] mx-auto flex items-center justify-center"
            >
              <div
                class="h-full w-full flex item-center justify-center text-xl"
              >
                <img class="w-full object-cover" :src="img" alt="product" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          class="absolute bottom-[-3.5rem] right-0 flex lg:right-1/2 lg:translate-x-1/2 z-10"
        >
          <Arrow
            @click="onNavClick('prev')"
            :disabled="isPrevActive"
            class="z-10 mr-8 rotate-180"
          />
          <Arrow
            @click="onNavClick('next')"
            :disabled="isNextActive"
            class="z-10"
          />
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import Arrow from './Icon/Arrow.vue';
import Close from './Icon/Close.vue';

defineProps<{
  imgs: string[];
  show: boolean;
}>();
const emits = defineEmits<{
  (e: 'close'): void;
}>();

const swiper = ref<SwiperType | null>(null);
const onNavClick = (direction: string) => {
  if (!swiper.value) return;

  return direction === 'prev'
    ? swiper.value.slidePrev()
    : swiper.value.slideNext();
};
const isNextActive = computed(() => {
  if (!swiper.value) return false;
  return swiper.value.isEnd;
});
const isPrevActive = computed(() => {
  if (!swiper.value) return false;
  return swiper.value.isBeginning;
});
const closeLightbox = () => {
  emits('close');
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
