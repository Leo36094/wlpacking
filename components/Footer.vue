<template>
  <footer>
    <div class="footer-container">
      <div class="copyright">© 2024 維利包裝有限公司 版權所有</div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background-color: #010101;
  color: $color-primary;
  padding: 0.25rem 1rem;
  @include queryMinWidth($queryMD) {
    padding: 0.5rem 1rem;
  }
  .footer-container {
    @include withContainer;
    @include flexCenter(column);
  }
  a {
    color: #fff;
  }
}
</style>
