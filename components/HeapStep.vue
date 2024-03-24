<template>
  <div class="heap-step">
    <div class="circle"></div>
    <div class="heap-step-content">
      <div class="title">木材檢疫熱處理</div>
      <div class="subtitle">quarantine &amp; heat Treatment</div>
      <div class="divider"></div>
      <div class="desc">
        {{ steps[activeIdx].desc }}
      </div>
      <div class="hstep-images-container">
        <div class="hstep-images" ref="imagesRef">
          <div
            class="image-item"
            v-for="(step, index) in steps"
            :key="index"
            @click="() => handleImageClick(index)"
          >
            <div
              :class="[
                'image-item-mask',
                { active: index === activeIdx },
              ]"
            ></div>
            <img :src="step.img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const steps = [
  { img: "/heat-step/quar-1.jpg", desc: "熱處理機符合ISPM15標準" },
  { img: "/heat-step/quar-2.jpg", desc: "測量處理前木材含水濕度" },
  {
    img: "/heat-step/quar-3.jpg",
    desc: "推入木箱、木箱半成品擺放，不可堵塞出風口",
  },
  { img: "/heat-step/quar-4.jpg", desc: "鑽上溫度探針計孔共6區" },
  {
    img: "/heat-step/quar-5.jpg",
    desc: "插上測量木材中心溫度計，共6支並且填入樹脂",
  },
  { img: "/heat-step/quar-6.jpg", desc: "關閉室門—熱處理中" },
  {
    img: "/heat-step/quar-7.jpg",
    desc: "由控制盤開機即可，一個流程約3~4小時",
  },
  {
    img: "/heat-step/quar-8.jpg",
    desc: "熱處理完整結束後，將木材包材蓋上IPPC章",
  },
];
const activeIdx = ref(0);
const interval = ref<ReturnType<typeof setInterval> | null>(null);
const imagesRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  interval.value = setInterval(() => {
    // get index child and do auto scroll
    if (!imagesRef.value) return;
    imagesRef.value.style.scrollBehavior = "smooth";
    const scrollPosition = imagesRef.value.scrollLeft;
    const childPosition =
      imagesRef.value.children[activeIdx.value].clientWidth;
    // check if it's the last image
    if (activeIdx.value === steps.length - 1) {
      imagesRef.value.scrollLeft = 0;
    } else {
      imagesRef.value.scrollLeft =
        childPosition < imagesRef.value.scrollWidth
          ? scrollPosition + childPosition
          : 0;
    }
    // set smooth scroll

    activeIdx.value = (activeIdx.value + 1) % steps.length;
  }, 3000);
});
onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
});

const handleImageClick = (index: number) => {
  activeIdx.value = index;
  if (interval.value) {
    clearInterval(interval.value);
  }
};
</script>
<style lang="scss" scoped>
.heap-step {
  position: relative;
  overflow: hidden;
  @include withContainer;
  text-align: center;
  color: $color-theme-black;
  padding-bottom: 0 !important;
}
.heap-step-content {
  position: relative;
  padding-top: 2rem;
  z-index: 1;
  .title {
    margin: 1rem 0;
    font-size: 1.5rem;
    @include queryMinWidth($querySM) {
      font-size: 2rem;
    }
  }
  .subtitle {
    background: var(
      --subtitlecolor,
      linear-gradient(
        90deg,
        rgba(145, 145, 145, 0.9) 0%,
        rgba(145, 145, 145, 0) 100%
      )
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: $font-en;
    font-weight: 500;
    font-size: 1.5rem;
    @include queryMinWidth($querySM) {
      font-size: 32px;
    }
  }
  .desc {
    margin-top: 1rem;
    font-size: 1.2rem;
    line-height: 1.5;
    min-height: 60px;
    @include flexCenter(column);
  }
  .divider {
    width: 200px;
    height: 1px;
    background-color: $color-theme-gray-bold;
    margin: 1rem auto;
    @include queryMinWidth($querySM) {
      margin: 1.5rem auto;
    }
  }
  .hstep-images-container {
    overflow: auto;
    width: 100%;
  }
  .hstep-images {
    width: 100%;
    overflow: auto;
    display: flex;
    // hide scrollbar background
    scrollbar-width: none;
    .image-item {
      cursor: pointer;
      flex-shrink: 0;
      @include flexCenter(column);
      width: 300px;
      height: 100%;
      position: relative;
      &:not(:last-child) {
        border-right: 5px solid #fff;
      }
      border-top: 0;
      border-bottom: 0;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      }
      .image-item-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 1;
        transition: 0.3s;
        &.active {
          opacity: 0;
        }
      }
      &:hover {
        .image-item-mask {
          opacity: 0;
        }
      }
    }
  }
}
.circle {
  background: #ded6ca;
  border-radius: 50%;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  position: absolute;
  box-shadow: 0px 0px 4px 20px #d1c6b5,
    0px 0px 20px 50px rgba(#d1c6b5, 0.3);
  width: 500px;
  height: 500px;
  @include queryMinWidth($querySM) {
    width: 500px;
    height: 500px;
  }
  @include queryMinWidth($queryMD) {
    width: 800px;
    height: 800px;
  }
}
</style>
