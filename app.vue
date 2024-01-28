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
            <div class="service-item__img">
              <div
                class="img"
                :style="{ backgroundImage: `url(${item.img})` }"
              ></div>
            </div>
            <div class="title">{{ item.name }}</div>
            <div class="desc">
              忍完夏欠沒跳放，請包色得教助日斥點掃也朱詞音有，細寺旦綠多急實朋洋急流午心雄空請，得種習平歡很大；四河停帽信別，
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <div class="container portfolio-container">
        <div class="group">
          <div class="portfolio-info">
            <h2 class="title">我們的作品</h2>
            <p class="desc">
              忍完夏欠沒跳放，請包色得教助日斥點掃也朱詞音有，細寺旦綠多急實朋洋急流午心雄空請，得種習平歡很大；四河停帽信別，
            </p>
          </div>
          <div class="portfolio-list-container">
            <div
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
  </div>
</template>
<script setup lang="ts">
const services = [
  { name: '木箱（Box Service)', img: '/weili@2/box01.jpg' },
  { name: '棧板（Pallets）', img: '/weili@2/pallet01.jpg' },
  { name: '產品包裝（Packaging）', img: '/weili@2/box03.jpg' },
];
const portfolios = [
  '/weili@2/box01.jpg',
  '/weili@2/pallet04.jpg',
  '/weili@2/box02.jpg',
  '/weili@2/pallet01.jpg',
  '/weili@2/box03.jpg',
  '/weili@2/box04.jpg',
  '/weili@2/box05.jpg',
  '/weili@2/box06.jpg',
  '/weili@2/box07.jpg',
  '/weili@2/box08.jpg',
];
</script>
<style lang="scss" scoped>
.app {
  color: $color-thicker;
  min-height: 100vh;
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
      text-align: center;
    }
    backdrop-filter: blur(10px);
    background-color: rgba($color-primary, 0.5);
  }
}

.container {
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2.5rem;
}
.service-list {
  display: flex;
  align-items: center;
  justify-content: center;
  .service-item {
    width: 300px;
    border-radius: 0.8rem;
    overflow: hidden;
    &:not(:last-child) {
      margin-right: 4rem;
    }
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
.portfolio-container {
  padding-right: 0;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  overflow: visible;
  position: relative;
  max-width: 100%;
  color: $color-primary;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: $color-thicker;
    z-index: -1;
  }
}
.group {
  @include flexCenter(row);
}
.portfolio-info {
  @include flexCenter(column);
  align-items: flex-start;
  width: 30%;
  margin-right: 0.5rem;
  padding-right: 0.5rem;
}
.portfolio-list-container {
  width: 70%;
  overflow: auto;
}
.portfolio-list {
  display: flex;
  flex-shrink: 0;
}
.portfolio-item {
  width: 400px;
  height: 300px;
  padding-bottom: 1.2rem;
  &:not(:last-child) {
    margin-right: 1rem;
  }
  padding: 0.8rem;
  background-color: rgba($color-thick, .5);
  @include flexCenter(row);
  border-radius: 0.8rem;
  &__img {
    border-radius: 0.8rem;
    @include bgCenter(cover);
    width: 100%;
    height: 100%;
  }
}
</style>
