import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../login/login'
import Home from '../home/index.vue'
import user from '../api/userInfo'
import Content from '../view/content/content.vue'
import Welcome from '../view/welcome/welcome.vue'
import Pictures from '../view/pictures/pictures.vue'
Vue.use(VueRouter)
const routes = [
  // { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/',
    component: Home,
    children: [
      { path: '/', component: Welcome },
      { path: '/content', component: Content },
      { path: '/pictures', component: Pictures }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else if (user.getInfo()) {
    next()
  } else {
    alert('还没有登录')
    next('/login')
  }
})
export default router
