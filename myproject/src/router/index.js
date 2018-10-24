import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const components=
  {
    login:()=>import('@/views/login'),
    layout:()=>import('@/views/layout'),
    home:()=>import('@/views/home'),
    addAdmin:()=>import('@/views/admin/addAdmin'),
    adminList:()=>import('@/views/admin/adminList'),
    publish:()=>import('@/views/news/publishNews'),
    newsList:()=>import('@/views/news/newsList'),
    addSwiper:()=>import('@/views/swiper/addSwiper'),
    swiperList:()=>import('@/views/swiper/swiperList')
  }
export default new Router({
  routes: [
    {
      path: '/',
      name: '登陆',
      component: components.login,
    },
    {
      path:'/layout',
      name:'布局页',
      component:components.layout,
      redirect:'/layout/home',
      children:[
        {
          path:'home',
          name:'首页',
          component:components.home,
        },
        {
          path:'addAdmin',
          name:'添加管理员',
          component:components.addAdmin
        },
        {
          path:'EditAdmin',
          name:'编辑管理员',
          component:components.addAdmin
        },
        {
          path:'adminList',
          name:'管理列表',
          component:components.adminList,
        },
        {
          path:"publish",
          name:"发布文章页",
          component:components.publish,
        },
        {
          path:"newsList",
          name:"新闻列表",
          component:components.newsList,
        },
        {
          path:"addSwiper",
          name:"添加轮播图",
          component:components.addSwiper,
        },
        {
          path:"swiperList",
          name:"轮播图列表",
          component:components.swiperList,

        }
      ]
    }
  ]
})
