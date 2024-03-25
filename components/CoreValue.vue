<template>
  <div class="philosophy">
    <div class="square">
      <div class="philosophy-text">Philosophy</div>
      <div class="square-title">經營理念</div>
      <div class="square-desc">
        維利包裝公司從事木箱包裝以來，秉持最堅固的品質包裝、安全的產品服務、迅速的完善作業、節省成本的態度，以滿足所有客戶對於木箱包裝各項需求之服務精神，進而達成企業永續經營、誠信負責的目標。
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.philosophy {
  position: relative;
  @include withContainer;
  max-width: 1000px;
  margin-top: 3.5rem;
  @include queryMinWidth($querySM) {
    margin-top: 4rem;
  }
  @include queryMinWidth($queryMD) {
    height: 367px;
  }
}
.div {
  position: absolute;
  inset: 0;
}
.div2 {
  background: rgba(217, 217, 217, 0);
  border-style: solid;
  border-color: rgba(75, 82, 75, 0.02);
  border-width: 10px;
  @include queryMinWidth($querySM) {
    width: 100%;
  }
  @include queryMinWidth($queryLG) {
    width: 1339px;
    height: 286px;
  }
}
.square {
  background: rgba(217, 217, 217, 0);
  border-style: solid;
  border-color: rgba(75, 82, 75, 0.08);
  width: 100%;
  position: relative;
  padding: 20px 20px 20px 20px;
  border-width: 2px;
  max-width: 400px;
  margin: auto;
  @include queryMinWidth($querySM) {
    border-width: 8px;
    padding: 40px 40px 20px 40px;
    max-width: 700px;
  }
  @include queryMinWidth($queryMD) {
    max-width: 800px;
    border-width: 16px;
    padding: 50px 20px;
  }
}
.square-title {
  color: #4b524b;
  text-align: left;
  font-family: "Noto Sans TC", sans-serif;
  text-transform: uppercase;
  position: absolute;
  font-size: 1.2rem;
  font-weight: 400;
  left: 3%;
  top: -7%;
  @include queryMinWidth($querySM) {
    top: -12%;
    font-size: 32px;
  }
  @include queryMinWidth($queryMD) {
    top: -15%;
    font-weight: 500;
    font-size: 2rem;
  }
}
.square-desc {
  color: #5a5a5a;
  font-family: "Noto Sans TC", sans-serif;
  letter-spacing: 2px;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.5;
  @include queryMinWidth($querySM) {
    letter-spacing: 4px;
    font-size: 22px;
  }
  @include queryMinWidth($queryMD) {
    letter-spacing: 4px;
    font-weight: 200;
    font-size: 22px;
  }
}
.philosophy-text {
  background: linear-gradient(
    90deg,
    rgba(145, 145, 145, 0.28) 0%,
    rgba(145, 145, 145, 0) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: $font-en;
  font-weight: 500;
  position: absolute;
  left: -5px;
  top: -30px;
  font-size: 1.2rem;
  @include queryMinWidth($querySM) {
    font-size: 2rem;
    top: -35%;
  }
  @include queryMinWidth($queryMD) {
    font-size: 52px;
    top: -40%;
    left: -12%;
  }
}
</style>
