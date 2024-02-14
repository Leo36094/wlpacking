<template>
  <div class="nav border-b border-gray-400">
    <div class="logo">
      <img width="150" src="/logo/wlpacking-logo.png" alt="維利包裝有限公司" />
    </div>
    <ul class="nav-group">
      <li><nuxt-link to="/">公司簡介</nuxt-link></li>
      <li><nuxt-link to="#product">產品介紹</nuxt-link></li>
      <li><nuxt-link to="#professional">檢疫與熱處理</nuxt-link></li>
      <li><nuxt-link to="#contact">聯絡我們</nuxt-link></li>
    </ul>
    <div class="nav-menu-button" @click="toggleExpand">
      <div :class="['switch-button', { active: expand }]"></div>
    </div>
    <transition name="fade">
      <keep-alive>
        <div v-if="expand" :class="['expand-list', { show: expand }]">
          <p><nuxt-link to="/">公司簡介</nuxt-link></p>
          <p><nuxt-link to="#product">產品介紹</nuxt-link></p>
          <p><nuxt-link to="#professional">檢疫與熱處理</nuxt-link></p>
          <p><nuxt-link to="#contact">聯絡我們</nuxt-link></p>
        </div>
      </keep-alive>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const expand = ref(false);

const toggleExpand = () => {
  expand.value = !expand.value;
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  position: relative;
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
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
