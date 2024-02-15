<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10"
  >
    <div class="fixed top-0 left-0 w-full h-screen bg-black/90"></div>
    <!-- CLose button -->
    <button
      class="absolute top-[5%] right-[5%] m-4 text-3xl text-white text-[3rem]"
      @click="closeLightbox"
    >
      x
    </button>
    <!-- class="container border relative z-10 w-2/3 h-2/3 flex item-center justify-center" -->
    <div class="test">
      <Swiper
        class="w-full h-full flex items-center justify-center"
        :modules="modules"
        :navigation="true"
      >
        <SwiperSlide v-for="(img, idx) in imgs" :key="idx">
          <div
            class="bg-light-blue-400 backdrop-blur-8 w-full h-full flex items-center justify-center"
          >
            <div class="h-4/5 w-4/5 flex item-center justify-center text-xl">
              <img class="w-full object-cover" :src="img" alt="product" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

defineProps<{
  imgs: string[];
}>();
const emits = defineEmits<{
  (e: 'close'): void;
}>();

const modules = [Navigation, Pagination];

const closeLightbox = () => {
  emits('close');
};
</script>
<style lang="scss" scoped>
.test {
  width: 1200px;
  height: 800px;
  @include flexCenter;
  position: relative;
}
</style>
