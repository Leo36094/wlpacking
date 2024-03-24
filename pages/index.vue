<template>
  <div class="home">
    <Banner />
    <CoreValue />
    <div class="our-service">
      <div class="our-service-bg"></div>
      <div class="our-service-container">
        <div class="divider"></div>
        <SectionTitle class="title" title="我們的服務" />
        <div class="service-list">
          <div
            class="service-item"
            v-for="(item, idx) in services"
            :key="idx"
          >
            <div class="service-item__img">
              <div
                class="img"
                :style="{ backgroundImage: `url(${item.img})` }"
              ></div>
            </div>
            <div class="title">{{ item.name }}</div>
            <div class="desc">
              {{ item.desc }}
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <p class="service-text">
          隨著科技的進步新興產業的需求，維利包裝公司不斷精益求精，提高更卓越的製品水準及升級作業效率，並提供在維利公司廠區製作木箱、上櫃、固定貨櫃一貫作業之服務，為客戶提供更好的消費環境。
        </p>
      </div>
    </div>
    <div class="heat-step">
      <HeapStep />
    </div>
    <div class="portfolio">
      <div class="portfolio-container">
        <div class="group">
          <div class="portfolio-info" data-aos="fade-right">
            <SectionTitle
              class="title-group"
              title="我們的作品"
              desc="  忍完夏欠沒跳放，請包色得教助日斥點掃也朱詞音有，細寺旦綠多急實朋洋急流午心雄空請，得種習平歡很大；四河停帽信別，"
            />
          </div>
          <div
            class="portfolio-list-container"
            @click="router.push('/product')"
          >
            <div
              data-aos="fade-left"
              class="portfolio-list"
              :style="{ width: portfolios.length * 300 + 'px' }"
            >
              <div
                class="portfolio-item"
                v-for="(item, idx) in portfolios"
                :key="idx"
              >
                <div
                  class="portfolio-item__img"
                  :style="{ backgroundImage: `url(${item})` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Contact data-aos="fade" />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
// components
import SectionTitle from "../components/SectionTitle";

// views
import Banner from "../components/Banner.vue";
import Contact from "../components/Contact.vue";
import CoreValue from "~/components/CoreValue.vue";
import HeapStep from "~/components/HeapStep.vue";

const services = [
  {
    name: "木箱（Box Service)",
    img: "/weili@2/box01.jpg",
    desc: "機械木箱、鐵底機械木箱、真空木箱包裝、防銹密箱、防震木箱、木材檢疫熱處理等",
  },
  {
    name: "棧板（Pallets）",
    img: "/weili@2/pallet01.jpg",
    desc: "棧板、底座、棧板捆包、油路條、木條箱、木材檢疫熱處理等。",
  },
  {
    name: "產品包裝（Packaging）",
    img: "/weili@2/box03.jpg",
    desc: "真空木箱包裝、棧板捆包、防震木箱等精密或通訊相關儀器包裝。",
  },
];
const portfolios = Array(13)
  .fill(0)
  .map((_, idx) => `/works/work${idx + 1}.jpg`);

const router = useRouter();
</script>
<style lang="scss" scoped>
.divider {
  height: 1px;
  background-color: $color-thicker;
  margin: 1.5rem 0;
  width: 100%;
}
.our-service {
  position: relative;
  .our-service-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/bg/service-bg.jpg");
    @include bgCenter(cover);
    z-index: -1;
    opacity: 0.3;
  }
  .our-service-container {
    @include withContainer;
  }
  .service-list {
    @include flexCenter(column);
    margin-top: 1.5rem;
    @include queryMinWidth($queryMD) {
      flex-direction: row;
      align-items: flex-start;
    }
    .service-item {
      width: 300px;
      border-radius: 0.8rem;
      overflow: hidden;

      &:not(:last-child) {
        margin-right: 4rem;
      }
      .title {
        color: $color-thickest;
        margin-bottom: 1rem;
        font-size: 1.3rem;
        @include queryMaxWidth($queryMD) {
          text-align: center;
          margin: 0.8rem 0;
        }
      }
      .desc {
        font-size: 1.1rem;
        color: $color-thickest;
        margin-bottom: 1rem;
      }

      @include queryMaxWidth($queryMD) {
        margin-bottom: 1.5rem;
        &:not(:last-child) {
          margin-right: 0;
        }
      }
    }
    .service-item__img {
      display: flex;
      height: 300px;
      width: 300px;
      margin-bottom: 0.5rem;
      overflow: hidden;
      cursor: pointer;
      .img {
        width: 100%;
        transition: transform 0.3s ease-in-out;
        height: 100%;
        @include bgCenter(cover);
      }
      &:hover {
        .img {
          transform: scale(1.1);
        }
      }
    }
  }
  .core-values {
    color: $color-thickest;
    font-size: 1.1rem;
    max-width: 1000px;
    margin: 1rem auto 2rem auto;
  }
  .service-text {
    text-align: center;
    margin-bottom: 0.5rem;
    letter-spacing: 1.5px;
    color: $color-thickest;
  }
}
.portfolio-container {
  padding-right: 0;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  overflow: visible;
  position: relative;
  max-width: 100%;
  background-color: $color-theme-brown-soft;
  padding-right: 0;

  .title-group {
    color: $color-theme-black;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: $color-thicker;
    z-index: -1;
  }
  .group {
    @include flexCenter(row);
    @include queryMaxWidth($queryMD) {
      flex-direction: column;
    }
  }
  .portfolio-info {
    @include flexCenter(column);
    align-items: flex-start;
    width: 30%;
    margin-right: 0.5rem;
    padding-right: 0.5rem;
    @include queryMaxWidth($queryMD) {
      width: 100%;
      margin-bottom: 1.5rem;
      margin-right: 0;
      padding-right: 0;
    }
  }
  .portfolio-list-container {
    width: 70%;
    overflow: auto;
    @include queryMaxWidth($queryMD) {
      width: 100%;
    }
  }
  .portfolio-list {
    display: flex;
    flex-shrink: 0;
    padding-bottom: 1.5rem;
  }
  .portfolio-item {
    width: 400px;
    height: 300px;
    padding-bottom: 1.2rem;
    &:not(:last-child) {
      margin-right: 1rem;
    }
    padding: 0.8rem;
    background-color: rgba($color-thick, 0.5);
    @include flexCenter(row);
    border-radius: 0.8rem;
    &__img {
      border-radius: 0.8rem;
      @include bgCenter(cover);
      width: 100%;
      height: 100%;
    }
  }
}
.heat-step {
  margin-bottom: 3rem;
  padding: 2rem 0;
}
</style>
