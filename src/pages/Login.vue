<template>
  <div class="login">
    <hm-header>登录</hm-header>
    <hm-icon></hm-icon>
    <hm-input
      type="text"
      placeholder="请输入用户名"
      v-model="username"
      message="用户名格式不对"
      :rule="/^1\d{4,10}$/"
      ref="username"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,10}$/"
      message="密码格式不对"
      ref="password"
    ></hm-input>
    <hm-button @click="login">登录</hm-button>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  methods: {
    login() {
      //登录校验
      console.log(this.$refs.username);
      const result1 = this.$refs.username.validate(this.username);
      const result2 = this.$refs.password.validate(this.password);
      console.log(this.$refs.status);

      // console.log("登录成功");
      if (
        result1 &&
        result2
        // this.$refs.username.status === "success" &&
        // this.$refs.password.status === "success"
      ) {
        this.$axios({
          method: "post",
          url: "/login",
          data: {
            username: this.username,
            password: this.password
          }
        }).then(res => {
          console.log(res.data);
          if (res.data.statusCode === 200) {
            alert("恭喜你登录成功");
            this.$router.push("/profile");
          } else {
            alert("用户名或密码错误");
          }
        });
      }
    }
  },
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style></style>
