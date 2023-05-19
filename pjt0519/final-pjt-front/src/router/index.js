import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleView from '@/views/ArticleView'
import MoviesView from '@/views/MoviesView'
import QuizView from '@/views/QuizView'
import RecommendView from '@/views/RecommendView'
import TicketView from '@/views/TicketView'
import CreateView from '@/views/CreateView'
import DetailView from '@/views/DetailView'
import SignUpView from '@/views/SignUpView'
import LogInView from '@/views/LogInView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ArticleView',
    component: ArticleView
  },

  {
    path: '/movies',
    name: 'MoviesView',
    component: MoviesView
  },
 
  {
    path: '/quiz',
    name: 'QuizView',
    component: QuizView
  },
 
  {
    path: '/recommend',
    name: 'RecommendView',
    component: RecommendView
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

  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },

  {
    path: '/login',
    name: 'LogInView',
    component: LogInView
  },

  {
    path: '/:id',
    name: 'DetailView',
    component: DetailView,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
