<template>
  <div class="login fill-contain">
    <h1>饿了么后台管理系统</h1>
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户名登录" name="0">
        <Username/>
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="1">配置管理</el-tab-pane>
      <el-tab-pane label="邮箱登录" name="2">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Username from '../../components/login/Username'
  import {getCaptchas} from "../../api"

  export default {
    name: "login",
    components: {
      Username
    },
    data() {
      return {
        activeName: '0'
      }
    },
    mounted(){
      this.getCaptchas()
    },
    methods:{
      async getCaptchas(){
        let captcha = await getCaptchas()
        console.log(captcha)
      }
    }
  }
</script>

<style lang="less">
  .login {
    height: 100%;
    box-sizing: border-box;
    padding-top: 150px;
    background-color: #16254b;

    h1 {
      color: #ccc;
      text-align: center;
      margin-bottom: 50px;
    }

    .el-tabs {
      background-color: #ddd;
      width: 25%;
      min-width: 300px;
      margin: 0 auto;

      .el-tabs__nav-scroll {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>