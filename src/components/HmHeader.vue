<template>
  <div class="header" @click="$router.back()">
    <span class="iconfont iconjiantou2 left"></span>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped >
.header {
  padding: 10px;
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  .left,
  .right {
    width: 40px;
  }
  .center {
    flex: 1;
    font-weight: 700;
  }
}
</style>
