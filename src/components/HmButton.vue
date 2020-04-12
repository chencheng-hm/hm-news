<template>
  <div class="hm-button" @click="handle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    handle() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="less" scoped>
.hm-button {
  height: 50px;
  line-height: 50px;
  margin: 20px;
  background-color: rgb(216, 30, 6);
  text-align: center;
  border-radius: 25px;
  color: white;
  font-size: 24px;
}
</style>
