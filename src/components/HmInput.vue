<template>
  <div class="hm-input">
    <input
      :type="type"
      :placeholder="placeholder"
      :class="{ error: status === 'error', success: status === 'success' }"
      :value="value"
      @input="inputFn"
    />
    <div class="tip" v-show="status === 'error'">{{ message }}</div>
  </div>
</template>

<script>
export default {
  // props: ["type", "placeholder"]
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "请输入..."
    },
    value: String,
    message: String,
    rule: RegExp
  },
  data() {
    return {
      status: ""
    };
  },
  methods: {
    inputFn(e) {
      this.$emit("input", e.target.value);
      this.validate(e.target.value);
    },
    validate(value) {
      if (this.rule) {
        if (this.rule.test(value)) {
          this.status = "success";
          return true;
        } else {
          this.status = "error";
          return false;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.hm-input {
  height: 50px;
  padding: 0 20px;
  input {
    outline: none;
    border: none;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    border-bottom: 1px solid gray;
    width: 100%;
    &.success {
      border-color: green;
    }
    &.error {
      border-color: red;
    }
  }
  .tip {
    color: red;
    font-size: 13px;
  }
}
</style>
