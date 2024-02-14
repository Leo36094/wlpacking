<template>
  <div class="slider-wrapper">
    <div class="slider-container">
      <div class="slider">
        <h3 class="title">維利包裝有限公司</h3>
        <div class="banner-slogan" v-for="(text, idx) in bannerText" :key="idx">
          <div
            :class="[
              'banner-slogan-item',
              { active: idx === activeBannerText },
            ]"
          >
            <h4 class="desc-main">
              {{ text.title }}
            </h4>
            <p class="desc-sub">
              {{ text.subTitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onUnmounted, onMounted } from 'vue';
const activeBannerText = ref(0);
const bannerInterval = ref<ReturnType<typeof setInterval> | null>(null);

const bannerText = [
  {
    title: '堅固的品質、安全的服務',
    subTitle: '迅速的完善作業、節省成本的態度',
  },
  {
    title: '精益求精、追求卓越',
    subTitle: '滿足客戶對於木箱包裝各項需求',
  },
  {
    title: '永續經營、誠信負責',
    subTitle: '提供客戶更好的消費環境',
  },
];

onMounted(() => {
  bannerInterval.value = setInterval(() => {
    activeBannerText.value = (activeBannerText.value + 1) % bannerText.length;
  }, 3000);
});
onUnmounted(() => {
  if (bannerInterval.value) {
    clearInterval(bannerInterval.value);
  }
});
</script>

<style lang="scss" scoped>
.slider-container {
  @include withContainer;
  max-width: 1920px;
  margin: 0 auto;
  height: 600px;
  background-color: $color-thick;
  background-image: url('/weili@2/box08.jpg');
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @include queryMaxWidth($querySM) {
    height: 100%;
  }
  .slider {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    @include queryMinWidth($querySM) {
      width: 500px;
    }
    .title {
      font-size: 2rem;
      color: $color-thickest;
      text-align: center;
      font-weight: bold;
    }
    backdrop-filter: blur(10px);
    background-color: rgba($color-primary, 0.5);
    .banner-slogan-item {
      display: none;
      &.active {
        @include flexCenter(column);
        animation: fade 1s ease-in-out forwards;
      }
      .desc-main {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        margin-top: 0;
        font-weight: 600;
      }
    }
  }
}
</style>
