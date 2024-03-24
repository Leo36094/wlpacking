<template>
  <div class="slider-wrapper">
    <Swiper
      :modules="[Autoplay, EffectFade]"
      :autoplay="{ delay: 2500 }"
      effect="fade"
      :fade-effect="{ crossFade: true }"
      :loop="true"
      class="slider-container"
    >
      <SwiperSlide
        autoplay
        v-for="(banner, idx) in bannerText"
        :key="idx"
      >
        <img class="banner-img" :src="banner.img" />
        <div class="banner-title">
          <div class="title-text first-title">
            {{ banner.firstTitle }}
          </div>
          <div class="title-text second-title">
            {{ banner.secondTitle }}
          </div>
          <div class="desc">{{ banner.subTitle }}</div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup lang="ts">
import { ref, onUnmounted, onMounted } from "vue";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";

const activeBannerText = ref(0);
const bannerInterval = ref<ReturnType<typeof setInterval> | null>(
  null
);

const bannerText = [
  {
    firstTitle: "堅固的品質",
    secondTitle: "安全的服務",
    subTitle: "迅速的完善作業、節省成本的態度",
    img: "/banners/banner01.jpg",
  },
  {
    firstTitle: "精益求精",
    secondTitle: "追求卓越",
    subTitle: "滿足客戶對於木箱包裝各項需求",
    img: "/banners/banner02.jpg",
  },
  {
    firstTitle: "永續經營",
    secondTitle: "誠信負責",
    subTitle: "提供客戶更好的消費環境",
    img: "/banners/banner03.jpg",
  },
];

onMounted(() => {
  bannerInterval.value = setInterval(() => {
    activeBannerText.value =
      (activeBannerText.value + 1) % bannerText.length;
  }, 3000);
});
onUnmounted(() => {
  if (bannerInterval.value) {
    clearInterval(bannerInterval.value);
  }
});
</script>

<style lang="scss" scoped>
.slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.banner-img {
  height: 300px;
  width: 100%;
  opacity: 0.5;
  object-fit: cover;
  @include queryMinWidth($querySM) {
    height: 500px;
  }
  @include queryMinWidth($querySM) {
    height: 100%;
    max-height: 1080px;
  }
  @include queryMinWidth($queryXL) {
    width: 100vw;
    height: 100vh;
  }
}
.fade-background {
  background: linear-gradient(
    15deg,
    rgba(217, 217, 217, 0) 0%,
    rgba(255, 255, 255, 1) 95.49999833106995%
  );
  opacity: 0.9;
  position: absolute;
  transform-origin: 0 0;
  transform: rotate(180deg) scale(1, 1);
  height: 300px;
  left: 100vw;
  top: 100%;
  @include queryMinWidth($querySM) {
    width: 100vw;
    top: 300px;
  }
  @include queryMinWidth($queryMD) {
    max-width: 1920px;
    max-height: 1080px;
    height: 800px;
    top: 1080px;
  }
}
.slider-container {
  padding: 0;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  background-color: $color-thick;
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 0%,
    rgba(255, 255, 255, 1) 95.49999833106995%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @include queryMinWidth($querySM) {
    height: 100%;
  }
  @include queryMinWidth($queryMD) {
    min-height: 800px;
  }
}

.banner-title {
  flex-shrink: 0;
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  color: #fff;
  font-family: "Noto Sans TC", sans-serif;
  animation: slide-up 1s ease-in-out;
  text-shadow: 2px 1px 5px #101010;
  padding: 0 40px;
  top: 50%;
  width: 100%;
  @include queryMinWidth($querySM) {
    animation: slide-in 1s ease-in-out;
    top: 50%;
    max-width: 500px;
  }
  @include queryMinWidth($queryMD) {
    top: calc(50% - 50px);
  }
  .title-text {
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
    @include queryMinWidth($querySM) {
      margin-bottom: 0;
      text-align: left;
      font-size: 50px;
      min-width: 300px;
    }
  }
  .second-title {
    @include queryMinWidth($querySM) {
      text-align: right;
    }
  }
  .desc {
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 20px;
    font-size: 20px;
    @include queryMinWidth($querySM) {
      font-size: 28px;
    }
  }
}
@keyframes slide-in {
  0% {
    transform: translateX(15%) translateY(-50%);
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(-50%);
  }
}
@keyframes slide-up {
  0% {
    transform: translateY(-40%);
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    transform: translateY(-50%);
  }
}
</style>
