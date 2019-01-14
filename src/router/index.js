import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName:'login'*/ '../views/login')
    },
    {
      path: '/manage',
      component: () => import(/* webpackChunkName:'layout'*/ '../views/layout'),
      children: [
        {
          path: '/home',
          name: '首页',
          component: () => import(/* webpackChunkName:'home'*/ '../views/home')
        },
        {
          path: '/addGoods',
          name: '添加商品',
          meta: ['添加数据', '添加商品'],
          component: () => import(/* webpackChunkName:'add'*/ '../views/addData/addGoods')
        },
        {
          path: '/addShop',
          name: '添加商铺',
          meta: ['添加数据', '添加商铺'],
          component: () => import(/* webpackChunkName:'add'*/ '../views/addData/addShop')
        },
        {
          path: '/adminList',
          name: '管理员列表',
          meta: ['数据管理', '管理员列表'],
          component: () => import(/* webpackChunkName:'manage'*/ '../views/manageData/adminList')
        },
        {
          path: '/foodList',
          name: '食品列表',
          meta: ['数据管理', '食品列表'],
          component: () => import(/* webpackChunkName:'manage'*/ '../views/manageData/foodList')
        },
        {
          path: '/orderList',
          name: '订单列表',
          meta: ['数据管理', '订单列表'],
          component: () => import(/* webpackChunkName:'manage'*/ '../views/manageData/orderList')
        },
        {
          path: '/shopList',
          name: '商铺列表',
          meta: ['数据管理', '商铺列表'],
          component: () => import(/* webpackChunkName:'manage'*/ '../views/manageData/shopList')
        },
        {
          path: '/userList',
          name: '用户列表',
          meta: ['数据管理', '用户列表'],
          component: () => import(/* webpackChunkName:'manage'*/ '../views/manageData/userList')
        },
        {
          path: '/echart1',
          name: '图表1',
          meta: ['图表', '图表1'],
          component: () => import(/* webpackChunkName:'manage'*/ '../views/echarts/echart1')
        },
        {
          path: '/edit',
          name: '文本编辑',
          meta: ['编辑', '文本编辑'],
          component: () => import(/* webpackChunkName:'manage'*/ '../views/edit/textEdit')
        },
        {
          path: '/adminSetting',
          name: '管理员设置',
          meta: ['设置', '管理员设置'],
          component: () => import(/* webpackChunkName:'manage'*/ '../views/settings/adminSetting')
        },
      ]
    }
  ]
})
export default router