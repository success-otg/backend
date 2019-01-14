<template>
  <div class="top">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{path: '/home'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-dropdown @command="handleCommand" menu-align="start">
      <img class="el-dropdown-link" :src="imgUrl" alt="logo">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="adminSetting">设置</el-dropdown-item>
        <el-dropdown-item command="signout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import {signout} from "../../api"

  export default {
    name: "top",
    data(){
      return {
        imgUrl: require('../../assets/images/default.jpeg')
      }
    },
    methods:{
      async handleCommand(command){
        switch (command) {
          case 'home':
            this.$router.push('/home')
            break
          case 'adminSetting':
            this.$router.push('/adminSetting')
            break
          case 'signout':
            this.signout()
            break
        }
      },
      async signout(){
        console.log(123)
        const res = await signout()
        console.log(res)
        if (res.status === 1){
          this.$message({
            type: 'success',
            message: res.message
          })
          this.$router.push('/')
        } else {
          this.$message({
            type: 'error',
            message: res.message
          })
        }
      }
    }
  }
</script>

<style lang="less">
.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  .el-breadcrumb__separator{
    color: #999;
  }
  /*border: 1px  solid red;*/
  .el-dropdown-link{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
</style>