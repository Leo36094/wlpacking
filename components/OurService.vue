<template>
  <div class="our-service">
    <div class="service-container">
      <div class="overflow-wrapper">
        <div
          class="left-poly poly"
          :class="{
            'animate__animated animate__fadeIn': animate,
          }"
          :style="{
            backgroundImage: `url(${leftImages[currentService]})`,
          }"
        ></div>
      </div>
      <div class="overflow-wrapper">
        <div class="service-group">
          <div class="service-header">
            <span class="txt">產品服務</span>
            <span class="txt-en">Service</span>
          </div>
          <div
            class="service-content"
            :class="{
              'animate__animated animate__fadeIn': animate,
            }"
          >
            <div class="content-title">
              <span class="cn"
                >{{ services[currentService].title }} |
              </span>
              <span class="en">{{
                services[currentService].titleEn
              }}</span>
            </div>
            <div class="content-desc">
              {{ services[currentService].desc }}
            </div>
            <div class="more">MORE</div>
          </div>
        </div>
        <div class="right-poly poly"></div>
      </div>
    </div>
    <!-- Mobile Section -->
    <div
      class="card max-w-xs m-auto rounded overflow-hidden shadow-lg"
    >
      <img
        :class="[
          'w-full',
          {
            'animate__animated animate__fadeIn': animate,
          },
        ]"
        :src="leftImages[currentService]"
        alt="Sunset in the mountains"
      />
      <div
        :class="[
          'h-[10rem] px-6 py-4 bg-[#ded6ca]',
          {
            'animate__animated animate__fadeIn': animate,
          },
        ]"
      >
        <div class="text-xl mb-2 text-[#919191]">
          {{
            `${services[currentService].title} | ${services[currentService].titleEn}`
          }}
        </div>
        <p class="text-gray-700 text-base">
          {{ services[currentService].desc }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 bg-[#ded6ca]">
        <span
          class="text-center w-full inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
          >More</span
        >
      </div>
    </div>
    <div class="pagination">
      <div
        v-for="(dot, idx) in services"
        :key="idx"
        :class="['dot', { active: idx === currentService }]"
        @click="paginationClick(idx)"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const animate = ref(false);
const timeout = ref<null | ReturnType<typeof setTimeout>>(null);
const interval = ref<null | ReturnType<typeof setInterval>>(null);
const isAnimating = ref(false);
const currentService = ref(0);

const leftImages = ["/works/work12.jpg", "/banners/banner01.jpg"];
const services = [
  {
    title: "木箱",
    titleEn: "Box Service",
    desc: "機械木箱、鐵底機械木箱、真空木箱包裝、防銹密箱、防震木箱、木材檢疫熱處理等",
  },
  {
    title: "棧板",
    titleEn: "Pallets",
    desc: "棧板、底座、棧板捆包、油路條、木條箱、木材檢疫熱處理等",
  },
];

const paginationClick = (idx: number) => {
  if (idx === currentService.value) return;
  toggleAnimate();
};

const toggleAnimate = (): void => {
  if (interval.value) clearInterval(interval.value);
  if (isAnimating.value) {
    return;
  }
  isAnimating.value = true;
  animate.value = true;
  currentService.value = currentService.value === 0 ? 1 : 0;
  timeout.value = setTimeout(() => {
    animate.value = false;
    isAnimating.value = false;
    timeout.value = null;
  }, 500);
};
onMounted(() => {
  interval.value = setInterval(() => {
    toggleAnimate();
  }, 3000);
});
onBeforeUnmount(() => {
  if (timeout.value) {
    clearTimeout(timeout.value);
  }
  if (interval.value) {
    clearInterval(interval.value);
  }
});
</script>
<style lang="scss" scoped>
.our-service {
  max-width: 1920px;
  margin: auto;
  .service-container {
    width: 100%;
    @include bgCenter(100% 100%);
    justify-content: space-between;
    height: 320px;
    display: none;
    @include queryMinWidth($querySM) {
      @include flexCenter(row);
    }
    @include queryMinWidth($queryMD) {
      height: 530px;
    }
    .overflow-wrapper {
      overflow: visible;
      position: relative;
      width: 50%;
      height: 100%;
    }
    .poly {
      min-height: 300px;
      @include bgCenter(cover);
      position: relative;
      @include queryMinWidth($queryMD) {
        min-height: calc((1920px / 750px) * 200px);
      }
    }
    .left-poly {
      left: 0;
      width: 115%;
      clip-path: polygon(0 0, 100% 0, 65% 100%, 0% 100%);
    }
    .right-poly {
      width: 120%;
      top: 5%;
      right: 20%;
      clip-path: polygon(34% 0, 100% 0, 100% 100%, 0% 100%);
      background-color: #ded6ca;
    }
    .service-group {
      position: absolute;
      width: 78%;
      height: 100%;
      left: 22%;
      z-index: 1;
      padding-right: 5rem;
      text-transform: uppercase;
      top: -5%;
      @include queryMinWidth($queryMD) {
        top: -3%;
      }
      .en {
        font-family: $font-en;
      }
      .cn {
        font-family: $font-cn;
      }
      .service-header {
        font-weight: 500;
        font-size: 1.5rem;
        @include queryMinWidth($queryMD) {
          font-size: 2rem;
        }
        .txt {
          color: #4b524b;
          font-family: $font-cn;
        }
        .txt-en {
          background: linear-gradient(
            90deg,
            rgba(145, 145, 145, 0.9) 0%,
            rgba(145, 145, 145, 0) 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: $font-en;
        }
      }
      .content-title {
        color: #919191;
        font-size: 1.2rem;
        margin-bottom: 1rem;
        margin-top: 35%;
        @include queryMinWidth($queryMD) {
          margin-top: 25%;
          margin-bottom: 3rem;
          font-size: 1.8rem;
        }
      }
      .content-desc {
        color: $color-theme-black;
        font-size: 1.2rem;
        line-height: 1.5;
        @include queryMinWidth($queryMD) {
          font-size: 1.8rem;
        }
      }
    }
  }
}

.more {
  height: 72px;
  position: absolute;
  bottom: 0;
  right: 20%;
  text-align: right;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  cursor: pointer;
  .dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #eae5e5;
    margin: 0 1rem;
    &.active {
      background-color: #4b524b;
    }
  }
}
.card {
  @include queryMinWidth($querySM) {
    display: none;
  }
}
</style>
