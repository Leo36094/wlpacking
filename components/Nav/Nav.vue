<template>
  <div class="nav">
    <div class="logo cursor-pointer" @click="router.push('/')">
      <img width="150" src="/logo/wlpacking-logo.png" alt="維利包裝有限公司" />
    </div>
    <ul class="nav-group flex-1">
      <li v-for="(nav, idx) in navs" :key="idx">
        <nuxt-link :to="nav.to">{{ nav.name }}</nuxt-link>
      </li>
    </ul>
    <div class="nav-menu-button" @click="toggleExpand">
      <div :class="['switch-button', { active: expand }]"></div>
    </div>
    <transition name="fade">
      <keep-alive>
        <div v-if="expand" :class="['expand-list', { show: expand }]">
          <p v-for="(nav, idx) in navs" :key="idx">
            <a @click="handleNavClick(nav.to)">{{ nav.name }}</a>
          </p>
        </div>
      </keep-alive>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const expand = ref(false);

const router = useRouter();

const navs = [
  {
    name: '公司簡介',
    to: { path: '/', hash: '#core-values' },
  },
  {
    name: '產品介紹',
    to: { path: '/product', hash: '' },
  },
  {
    name: '檢疫與熱處理',
    to: { path: '/', hash: '#professional' },
  },
  {
    name: '聯絡我們',
    to: { path: '/', hash: '#contact' },
  },
];

const toggleExpand = () => {
  expand.value = !expand.value;
};
const handleNavClick = (path: { path: string; hash: string }) => {
  expand.value = false;
  router.push(path);
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 0.5rem 1.5rem;
  position: fixed;
  width: 100%;
  z-index: 10;
  position: fixed;
  .nav-group {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    @include queryMaxWidth($queryLG) {
      display: none;
    }
    li {
      margin: 0 1.5rem;
      a {
        color: $color-thicker;
        text-shadow: 1px 0px 3px $color-theme-black;
        text-decoration: none;
        &:hover {
          color: $color-thick;
        }
      }
    }
  }
  .nav-menu-button {
    display: none;
    @include queryMaxWidth($queryLG) {
      width: 30px;
      height: 30px;
      @include flexCenter;
      .switch-button {
        width: 20px;
        height: 2px;
        background-color: $color-thicker;
        &::before,
        &::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 2px;
          background-color: $color-thicker;
          transition: transform 0.3s ease-in-out;
        }
        &::before {
          transform: translateY(-6px);
        }
        &::after {
          transform: translateY(6px);
        }
        &.active {
          background-color: transparent;
          &::before {
            transform: rotate(45deg) translateY(0);
          }
          &::after {
            transform: rotate(-45deg) translateY(0);
          }
        }
      }
    }
  }
  .expand-list {
    @include flexCenter(column);
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(#fff, 0.7);
    backdrop-filter: blur(10px);
    padding: 1.5rem 0.5rem;
    z-index: 100;
    display: none;
    p {
      margin: 1rem 0;
      font-size: 1rem;
    }
    a {
      color: $color-thick;
      text-decoration: none;
      &:hover {
        color: $color-thicker;
      }
    }
    &.show {
      display: flex;
    }
  }
}
</style>
