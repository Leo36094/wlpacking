<template>
  <div class="our-service">
    <div class="service-container">
      <div class="overflow-wrapper">
        <div class="left-poly poly"></div>
      </div>
      <div class="overflow-wrapper">
        <div class="right-poly poly"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.our-service {
  max-width: 1920px;
  margin: auto;
  .service-container {
    width: 100%;
    height: 689px;
    @include bgCenter(100% 100%);
    @include flexCenter(row);
    justify-content: space-between;
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
      width: 120%;
      background-image: url('/banners/banner01.jpg');
      clip-path: polygon(0 0, 100% 0, 71% 100%, 0% 100%);
    }
    .right-poly {
      width: 110%;
      top: 5%;
      right: 0;
      clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
      background-color: #ded6ca;
    }
  }
}
</style>
