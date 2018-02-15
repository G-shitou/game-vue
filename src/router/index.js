import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from '../pages/index'
import DetailPage from '../pages/detail'
import Lushi from '../pages/detail/lushi'
import Moshou from '../pages/detail/moshou'
import Shouwang from '../pages/detail/shouwang'
import Xingji from '../pages/detail/xingji'
import OrderListPage from '../pages/listpage'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
        path: '/orderList',
        component: OrderListPage
    },
    {
        path:'/detail',
        component:DetailPage,
        redirect:'/detail/lushi',
        children:[
            {
                path:'lushi',
                component:Lushi
            },
            {
                path:'shouwang',
                component:Shouwang
            },
            {
                path:'moshou',
                component:Moshou
            },
            {
                path:'xingji',
                component:Xingji
            }
        ]
    }
  ]
})
