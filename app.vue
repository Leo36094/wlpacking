<template>
  <div class="app">
    <div class="nav">
      <div class="logo">LOGO</div>
      <ul>
        <li><nuxt-link to="/">公司簡介</nuxt-link></li>
        <li><nuxt-link to="#product">產品介紹</nuxt-link></li>
        <li><nuxt-link to="#professional">檢疫與熱處理</nuxt-link></li>
        <li><nuxt-link to="#contact">聯絡我們</nuxt-link></li>
      </ul>
    </div>
    <div class="slider-wrapper">
      <div class="slider-container">
        <div class="slider">
          <div class="title">維利包裝</div>
          <div class="desc">
            忍完夏欠沒跳放，請包色得教助日斥點掃也朱詞音有，細寺旦綠多急實朋洋急流午心雄空請，得種習平歡很大；四河停帽信別，
          </div>
        </div>
      </div>
    </div>
    <div class="our-service">
      <div class="container">
        <h2 class="title">我們的服務</h2>
        <div class="service-list">
          <div class="service-item" v-for="(item, idx) in services" :key="idx">
            <div
              class="service-item__img"
              :style="{ backgroundImage: `url(${item.img})` }"
            ></div>
            <div class="title">{{ item.name }}</div>
            <div class="desc">
              忍完夏欠沒跳放，請包色得教助日斥點掃也朱詞音有，細寺旦綠多急實朋洋急流午心雄空請，得種習平歡很大；四河停帽信別，
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <div class="container">
        <h2 class="title">我們的作品</h2>
        <div class="portfolio-list">
          <div
            class="portfolio-item"
            v-for="(item, idx) in services"
            :key="idx"
          >
            <div
              class="portfolio-item__img"
              :style="{ backgroundImage: `url(${item.img})` }"
            ></div>
            <div class="title">{{ item.name }}</div>
            <div class="desc">
              忍完夏欠沒跳放，請包色得教助日斥點掃也朱詞音有，細寺旦綠多急實朋洋急流午心雄空請，得種習平歡很大；四河停帽信別，
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const services = [
  { name: '木箱（Box Service)', img: '/weili@2/box01.jpg' },
  { name: '棧板（Pallets）', img: '/weili@2/pallet01.jpg' },
  { name: '產品包裝（Packaging）', img: '/weili@2/box03.jpg' },
];
</script>
<style lang="scss" scoped>
.app {
  color: $color-thicker;
  min-height: 100vh;
  padding-bottom: 50px;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  border-bottom: 1px solid $color-thicker;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    li {
      margin: 0 1.5rem;
      a {
        color: $color-thicker;
        text-decoration: none;
        &:hover {
          color: $color-thick;
        }
      }
    }
  }
}
.slider-container {
  max-width: 1920px;
  margin: 0 auto;
  height: 600px;
  background-color: $color-thick;
  background-image: url('/public/weili@2/box08.jpg');
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .slider {
    width: 500px;
    padding: 1rem;
    border-radius: 0.5rem;
    .title {
      font-size: 2rem;
      font-weight: bold;
      color: $color-thickest;
      margin-bottom: 1rem;
    }
    backdrop-filter: blur(10px);
    background-color: rgba($color-primary, 0.5);
  }
}

.container {
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.service-list {
  display: flex;
  align-items: center;
  justify-content: center;
  .service-item {
    width: 300px;
    margin: 0 1rem;
    border-radius: 0.8rem;
    overflow: hidden;
    .title {
      font-size: 1.5rem;
      font-weight: bold;
      color: $color-thick;
      margin-bottom: 1rem;
    }
    .desc {
      color: $color-thick;
      margin-bottom: 1rem;
    }
  }
  .service-item__img {
    display: flex;
    height: 300px;
    width: 300px;
    @include bgCenter(cover);
    margin-bottom: 0.5rem;
  }
}
</style>
