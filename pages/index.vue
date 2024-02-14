<template>
  <div class="home">
    <Banner />
    <div class="our-service">
      <div class="our-service-container">
        <SectionTitle title="經營理念" />
        <div class="core-values">
          <p class="service-text">
            維利包裝公司從事木箱包裝以來，秉持最堅固的品質包裝、安全的產品服務、迅速的完善作業、節省成本的態度，以滿足所有客戶對於木箱包裝各項需求之服務精神，進而達成企業永續經營、誠信負責的目標。
          </p>
          <p class="service-text">
            隨著科技的進步新興產業的需求，維利包裝公司不斷精益求精，提高更卓越的製品水準及升級作業效率，並提供在維利公司廠區製作木箱、上櫃、固定貨櫃一貫作業之服務，為客戶提供更好的消費環境。
          </p>
        </div>
        <SectionTitle title="我們的服務" />
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
              {{ item.desc }}
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
    <div class="portfolio">
      <div class="portfolio-container">
        <div class="group">
          <div class="portfolio-info">
            <SectionTitle
              class="title-group"
              title="我們的作品"
              desc="  忍完夏欠沒跳放，請包色得教助日斥點掃也朱詞音有，細寺旦綠多急實朋洋急流午心雄空請，得種習平歡很大；四河停帽信別，"
            />
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
    <div class="heat-step">
      <div class="heat-step-container">
        <h2 class="title">木材檢疫熱處理</h2>
        <div class="steps">
          <div
            class="step-card-container"
            v-for="(step, index) in steps"
            :key="index"
          >
            <p class="step-num">STEP {{ index + 1 }}</p>
            <div class="step-arrow">➜</div>
            <div class="step-card">
              <div
                class="step-card__img"
                :style="{ backgroundImage: `url(${step.img})` }"
              ></div>
              <div class="step-card__desc">{{ step.desc }}</div>
            </div>
          </div>
        </div>
        <div class="step-detail">
          <p>
            本公司為行政院農委會動植物防疫檢疫局熱處理合格廠商及績優廠商，使用之設備符合ISPM15(國際植物防疫檢疫措施第15號標準)規定。
          </p>
          <p>
            將木材中心溫度加熱至攝氏56度以上，並連續保持30分鐘以上，經熱處理檢疫處理後，於明顯處蓋上國際植物保護公約IPPC檢疫戳章，以標示完成檢疫處理。
          </p>
        </div>
      </div>
    </div>
    <Contact />
  </div>
</template>
<script setup lang="ts">
// components
import Nav from '../components/Nav';
import SectionTitle from '../components/SectionTitle';

// views
import Banner from '../components/Banner.vue';
import Contact from '../components/Contact.vue';

const services = [
  {
    name: '木箱（Box Service)',
    img: '/weili@2/box01.jpg',
    desc: '機械木箱、鐵底機械木箱、真空木箱包裝、防銹密箱、防震木箱、木材檢疫熱處理等',
  },
  {
    name: '棧板（Pallets）',
    img: '/weili@2/pallet01.jpg',
    desc: '棧板、底座、棧板捆包、油路條、木條箱、木材檢疫熱處理等。',
  },
  {
    name: '產品包裝（Packaging）',
    img: '/weili@2/box03.jpg',
    desc: '真空木箱包裝、棧板捆包、防震木箱等精密或通訊相關儀器包裝。',
  },
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

const steps = [
  { img: '/heat-step/quar-1.jpg', desc: '熱處理機符合ISPM15標準' },
  { img: '/heat-step/quar-2.jpeg', desc: '測量處理前木材含水濕度' },
  {
    img: '/heat-step/quar-3.jpeg',
    desc: '推入木箱、木箱半成品擺放，不可堵塞出風口',
  },
  { img: '/heat-step/quar-4.jpeg', desc: '鑽上溫度探針計孔共6區' },
  {
    img: '/heat-step/quar-5.jpg',
    desc: '插上測量木材中心溫度計，共6支並且填入樹脂',
  },
  { img: '/heat-step/quar-6.jpeg', desc: '關閉室門—熱處理中' },
  { img: '/heat-step/quar-7.jpg', desc: '由控制盤開機即可,一個流程約3~4小時' },
  {
    img: '/heat-step/quar-8.jpeg',
    desc: '熱處理完整結束後，將木材包材蓋上IPPC章',
  },
];
</script>
<style lang="scss" scoped>
.our-service {
  position: relative;
  .our-service-container {
    @include withContainer;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/bg/service-bg.jpg');
    @include bgCenter(cover);
    z-index: -1;
    opacity: 0.3;
  }
  .service-list {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    @include queryMaxWidth($queryMD) {
      flex-direction: column;
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
    margin: auto;
  }
  .service-text {
    text-align: center;
  }
}
.portfolio-container {
  @include withContainer;
  padding-right: 0;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  overflow: visible;
  position: relative;
  max-width: 100%;
  @include queryMaxWidth($queryMD) {
    padding: 1.5rem;
  }

  .title-group {
    color: $color-primary;
  }
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
  .heat-step-container {
    @include withContainer;
  }
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('/bg/heat-step-bg.jpg');
    backdrop-filter: blur(10px);
    background-position: center top;
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
  }
  .steps {
    position: relative;
    z-index: 5;
    @include flexCenter;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: auto;
  }
  .step-card-container {
    position: relative;
    @include flexCenter;
    &:nth-child(4n) {
      .step-arrow {
        display: none;
      }
    }
    @include queryMaxWidth($queryLG) {
      flex-direction: column;
    }
    .step-num {
      display: none;
      font-weight: bold;
      margin-bottom: 0;
      @include queryMaxWidth($queryMD) {
        display: block;
      }
    }
    .step-arrow {
      position: absolute;
      top: 50%;
      left: 100%;
      transform: translate(-50%, -50%);
      font-size: 1.5rem;

      @include queryMaxWidth($queryMD) {
        display: none;
      }
    }
    .step-card {
      width: 200px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 12px;
      margin: 10px 15px;
      overflow: hidden;
      .step-card__img {
        width: 100%;
        width: 200px;
        height: 220px;
        @include bgCenter(100% 100%);
        background-color: antiquewhite;
      }
      .step-card__desc {
        background-color: $color-thick;
        color: $color-primary;
        padding: 0 5px;
        flex: 1;
        text-align: center;
        @include flexCenter;
      }
    }
  }
  .step-detail {
    margin: auto;
    max-width: 960px;
    text-align: center;
    color: #000;
  }
}
</style>
