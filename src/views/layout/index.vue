<template>
  <div class="layout">
    <el-container class="fill-contain">
      <el-aside :width= 'rw'>
        <menu-list @fromMenu="toggle" :is-collapse="true"></menu-list>
      </el-aside>
      <el-container>
        <el-header><top/></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import menuList from '../../components/layout/menuList'
  import top from '../../components/layout/top'
  import {mapState} from 'vuex'
  export default {
    name: "layout",
    components:{
      menuList,
      top
    },
    data() {
      return {
        rw: '56px'
      }
    },
    computed: {
      ...mapState(['collapsed'])
    },
    created() {

    },
    mounted(){
    },
    methods: {
      toggle(){
        if (this.collapsed){
          this.rw = '56px'
        } else {
          this.rw = '200px'
        }
      },
    },
    watch:{
      collapsed: 'toggle'
    }
  }
</script>

<style lang="less">
  .layout {
    height: 100%;
    .el-header {
      background-color: #b3c0d1;
    }

    .el-aside {
      background-color: #324057;
      color: white;
      overflow: hidden;
      .el-menu {
        border: none;
        i{
          color: white;
        }
      }
      .el-radio-group{
        background-color: #324057 !important;
      }
    }

    .el-main {
      background-color: #e9eef3;
    }


  }



</style>