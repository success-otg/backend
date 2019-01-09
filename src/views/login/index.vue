<template>
  <div class="login fill-contain">
    <h1>饿了么后台管理系统</h1>
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户名登录" name="0">
        <Username :image-url="imageUrl"/>
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="1">
        <Phone :image-url="imageUrl"/>
      </el-tab-pane>
      <el-tab-pane label="邮箱登录" name="2">
        <Email :image-url="imageUrl"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Username from '../../components/login/Username'
  import Phone from '../../components/login/Phone'
  import Email from '../../components/login/Email'
  import {getCaptchas} from "../../api"

  export default {
    name: "login",
    components: {
      Username,
      Phone,
      Email
    },
    data() {
      return {
        activeName: '0',
        imageUrl: ''
      }
    },
    mounted(){
      this.getCaptchas()
    },
    methods:{
      async getCaptchas(){
        let res = await getCaptchas()
        this.imageUrl = res.code
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