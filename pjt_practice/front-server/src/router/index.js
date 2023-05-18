import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleView from '@/views/ArticleView'
import RecommendView from '@/views/RecommendView'
import TicketView from '@/views/TicketView'
import CreateView from '@/views/CreateView'
import DetailView from '@/views/DetailView'
// import SignUpView from '@/views/SignUpView'
// import LogInView from '@/views/LogInView'
import QuizView from '@/views/QuizView'

import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import RegisterUser from "../views/RegisterUser.vue";
import LoginUser from "../views/LoginUser.vue";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ArticleView',
    component: ArticleView
  },
 
  {
    path: '/recommend',
    name: 'RecommendView',
    component: RecommendView
  },
  {
    path: '/quiz',
    name: 'QuizView',
    component: QuizView
  },

  {
    path: '/ticket',
    name: 'TicketView',
    component: TicketView
  },


  {
    path: '/create',
    name: 'CreateView',
    component: CreateView
  },

  // {
  //   path: '/signup',
  //   name: 'SignUpView',
  //   component: SignUpView
  // },

  // {
  //   path: '/login',
  //   name: 'LogInView',
  //   component: LogInView
  // },

  {
    path: '/:id',
    name: 'DetailView',
    component: DetailView,
  },
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: { requiresAuth: true }
  },
  {
    path: "/register",
    name: "register",
    component: RegisterUser
  },
  {
    path: "/login",
    name: "login",
    component: LoginUser
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 1번 해결 로컬스토리지 체크
  const loggedIn = localStorage.getItem("user");

  // 2번 해결 requiresAuth 체크
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 로그인 상태가 아니면 '/' 여기로 보내버린다.
    if (!loggedIn) {
      next("/");
      return;
    }
    next();
  }
  // requiresAuth가 false일때 즉, 권한이 필요 없는 페이지 일때
  next();
});

export default router
