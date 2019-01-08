<template>
  <div class="menu">
  <el-radio-group v-model="collapseFlag" style="margin-bottom: 20px;">
    <el-radio-button :label="false"><i class="el-icon-d-arrow-right"></i></el-radio-button>
    <el-radio-button :label="true"><i class="el-icon-d-arrow-left"></i></el-radio-button>
  </el-radio-group>
  <el-menu default-active="/" router class="el-menu-vertical-demo" :collapse="collapseFlag"
           background-color="#324057" text-color="white">
    <el-menu-item index="/">
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
      <el-menu-item index="edit">文本编辑</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </template>
      <el-menu-item index="adminSetting">管理员设置</el-menu-item>
    </el-submenu>
  </el-menu>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: "menuList",
    data(){
      return {
        collapseFlag: this.isCollapse
      }
    },
    props: {
      isCollapse: Boolean,
    },
    computed:{
      ...mapState(['collapsed'])
    },
    methods: {
      ...mapMutations(['changeCollapseStatus']),
      change(){
        this.changeCollapseStatus()
      }
    },
    watch: {
      collapseFlag: 'change'
    }
  }
</script>

<style scoped>

</style>