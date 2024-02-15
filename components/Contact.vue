<template>
  <div class="contact" id="contact">
    <SectionTitle title="聯絡我們" />
    <div class="contact-container">
      <div class="contact-info">
        <p>維利包裝有限公司</p>
        <p>(33757) 桃園市大園區後厝２鄰２４之６號</p>
        <p>聯絡人: <span>陳坤銘</span></p>
        <p>聯絡電話： <span>(03)385-1335~6</span></p>
        <p>FAX: <span>(03)385-1337</span></p>
        <p>
          主要信箱：
          <a href="mailto:weili@wlpacking.com.tw"> weili@wlpacking.com.tw </a>
        </p>
        <p>
          信箱：
          <a href="mailto:weili.packing@gmail.com">weili.packing@gmail.com</a>
        </p>
      </div>
      <div class="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28909.351911308695!2d121.19338452009102!3d25.07920594815702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34682024463916e9%3A0x9b04bde1f31f5e00!2z57at5Yip5YyF6KOd5pyJ6ZmQ5YWs5Y-477yI5aSn5ZyS5pyo566x6KGM44CB5qOn5p2_77yJ!5e0!3m2!1sen!2stw!4v1707763329314!5m2!1sen!2stw"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SectionTitle from './SectionTitle';
</script>
<style lang="scss" scoped>
.contact {
  padding-top: 3rem;
  .contact-container {
    @include withContainer;
    justify-content: center;
    align-items: center;
    @include queryMinWidth($queryMD) {
      justify-content: space-around;
      flex-direction: row;
    }
  }
  .contact-info {
    font-size: 1.5rem;
  }
  .contact-map {
    max-width: 100%;
    width: 100%;
    height: 300px;
    @include queryMinWidth($queryMD) {
      width: 50%;
      height: 500px;
    }
    > * {
      width: 100%;
      height: 100%;
    }
  }
  .mail-row {
    padding-left: 0.5rem;
  }
  a,
  ol {
    color: $color-thick;
  }
}
</style>
