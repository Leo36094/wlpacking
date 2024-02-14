<template>
  <div class="product py-10">
    <div class="container m-auto">
      <SectionTitle
        class="title-group my-6"
        title="我們的產品"
        desc="機械木箱、鐵底機械木箱、真空木箱包裝、防銹密箱、防震木箱、棧板、底座、棧板捆包、油路條、木條箱、木材檢疫熱處理。"
      />

      <Carousel :imgs="imgs" />
      <div class="flex flex-wrap items-center justify-around mb-4">
        <LongCard
          v-for="product in products"
          class="mx-2 my-2 w-full"
          :title="product.name"
          :subTitle="product.subTitle"
          :desc="product.desc"
          :img="product.img"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SectionTitle from '../components/SectionTitle';
import { LongCard } from '~/components/Card';
import Carousel from '~/components/Carousel';

const products = [
  {
    name: '機械木箱',
    subTitle: '適用超大機械設備',
    desc: '防水性佳、防潮、防塵之功能。適用於荷重範圍大及超長各種機械設備。',
    img: '/weili@1/box01.jpg',
  },
  {
    name: '真空木箱包裝',
    subTitle: '適用精密電子器材',
    desc: `將防潮需求較高的精密設備，以鋁箔袋將機械整體包覆、內置乾燥劑；並用吸塵器將袋內空氣抽出，以達到完全防潮、隔絕濕氣之目的！
    通常適用於精密電子器材之包裝，具防潮防塵之功能。
    `,
    img: '/weili@1/box01.jpg',
  },
  {
    name: '防震木箱包裝',
    subTitle: '適用通訊光電設備',
    desc: `所謂EPE防震包裝，即是利用EPE緩衝材來減少設備儀器在搬運過程中的震動傷害，以確保其精密功能。
    通常適用於通信、光電設備或易碎品。
    `,
    img: '/weili@1/box01.jpg',
  },
  {
    name: '卡扣木箱',
    subTitle: '適用於重覆使用',
    desc: `可依客戶需求製作所需之規格，亦可提供震盪顯示器及傾斜顯示器，兼具防水及隱密性及拆裝方便。
    通常用於展覽及重覆使用之包裝。
    `,
    img: '/weili@1/box01.jpg',
  },
  {
    name: '密箱',
    subTitle: '適用於零件及電器',
    desc: '具防水及隱密功能。一般用於零件及電器之包裝。',
    img: '/weili@1/box01.jpg',
  },
  {
    name: '木條箱',
    subTitle: '適用於各式產品',
    desc: '具保護功能，防水性較差，隱密性低。適用於各式產品包裝。',
    img: '/weili@1/box01.jpg',
  },
  {
    name: '棧板、底座',
    subTitle: '機械設備簡易固定',
    desc: `簡易式將機械設備固定在底板上，避免堆高機直接接觸機械本體，傷害到機械。
    具保護功能，防水性較差，隱密性低。`,
    img: '/weili@1/box01.jpg',
  },
  {
    name: '鐵底木箱',
    subTitle: '適用超大機械設備',
    desc: '防水性佳、防潮、防塵之功能。適用於荷重範圍大及超長各種機械設備。',
    img: '/weili@1/box01.jpg',
  },
];
const imgs = ['/weili@1/box07.jpg', '/weili@1/box08.jpg', '/weili@1/box09.jpg'];
</script>
