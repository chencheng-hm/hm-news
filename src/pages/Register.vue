<template>
  <div class="register">
    <hm-header>注册</hm-header>
    <hm-icon></hm-icon>
    <hm-input
      type="text"
      placeholder="用户名/手机号码"
      v-model="username"
      message="用户名/号码格式错误"
      :rule="/^1\d{4,10}$/"
      ref="username"
    ></hm-input>
    <hm-input
      type="text"
      placeholder="昵称"
      v-model="nickname"
      message="昵称格式错误"
      :rule="/^[\u4e00-\u9fa5]{3,8}$/"
      ref="nickname"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="密码"
      v-model="password"
      message="密码格式错误"
      :rule="/^\d{4,10}$/"
      ref="password"
    ></hm-input>
    <hm-button @click="register">注册</hm-button>
    <div class="tologin">
      有账号去
      <router-link to="/login">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    register() {
      console.log("注册");
      const result1 = this.$refs.username.validate(this.username);
      const result2 = this.$refs.nickname.validate(this.nickname);
      const result3 = this.$refs.password.validate(this.password);
      if (!result1 || !result2 || !result3) {
        return;
      }
      this.$axios({
        url: "/register",
        method: "post",
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }
      }).then(res => {
        console.log(res.data);
        //判断响应状态
        if (res.data.statusCode == 200) {
          this.$toast.success(res.data.message);
          //跳转到登录页面,路由跳转的时候可以传参
          this.$router.push({
            name: "login",
            params: {
              username: this.username,
              password: this.password
            }
          });
        } else if (res.data.statusCode == 401) {
          this.$toast.fail(res.data.message);
        }
      });
    }
  },
  data() {
    return {
      username: "",
      password: "",
      nickname: ""
    };
  }
};
</script>

<style lang="less" scoped>
.register {
  .tologin {
    text-align: right;
    font-size: 15px;
    padding-right: 20px;
    a {
      color: blue;
    }
  }
}
</style>
