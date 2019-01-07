<template>
  <div class="layout">
    <el-container class="fill-contain">
      <el-aside :style="{width: rw + 'px'}">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="" router class="el-menu-vertical-demo" :collapse="isCollapse"
                 background-color="#324057" text-color="white">
          <el-menu-item index="home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span slot="title">添加数据</span>
            </template>
            <el-menu-item index="addGoods">添加商品</el-menu-item>
            <el-menu-item index="addShop">添加商铺</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">管理数据</span>
            </template>
            <el-menu-item index="adminList">管理员列表</el-menu-item>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-menu-item index="foodList">食品列表</el-menu-item>
            <el-menu-item index="shopList">商铺列表</el-menu-item>
            <el-menu-item index="orderList">订单列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span slot="title">echarts</span>
            </template>
            <el-menu-item index="echart1">echart1</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span slot="title">编辑</span>
            </template>
            <el-menu-item index="textEdit">文本编辑</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </template>
            <el-menu-item index="adminSetting">管理员设置</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "layout",
    data() {
      return {
        isCollapse: true,
        rw: 200
      }
    },
    created() {
      console.log(this.$router)
    },
    methods: {
      toggle() {
        if (this.isCollapse) {
          this.rw = 60
        }else {
          this.rw = 200
        }
        console.log(this.rw)
      },
      handleOpen() {

      },
      handleClose() {

      }
    },
    watch: {

    }
  }
</script>

<style>
  .layout {
    height: 100%;
  }

  .el-header {
    background-color: #b3c0d1;
  }

  .el-aside {
    background-color: #324057;
    color: white;
    overflow: hidden;
  }

  .el-main {
    background-color: #e9eef3;
  }

  .el-menu {
    border: none;
  }

  .el-menu-item {
    width: 100px;
  }
</style>