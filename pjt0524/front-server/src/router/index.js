import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleView from '@/views/ArticleView'
import MoviesView from '@/views/MoviesView'
import MovieDetailView from '@/views/MovieDetailView'
import QuizView from '@/views/QuizView'
import RecommendView from '@/views/RecommendView'
import TicketView from '@/views/TicketView'
import CreateView from '@/views/CreateView'
import DetailView from '@/views/DetailView'
import SignUpView from '@/views/SignUpView'
import LogInView from '@/views/LogInView'
import SuccessQuiz from '@/components/SuccessQuiz.vue'
import FailureQuiz from '@/components/FailureQuiz.vue'
import RecommendDetailView  from '@/components/Movies/RecommendDetailView.vue'


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
    path: '/movie/:id',
    name: 'MovieDetailView',
    component: MovieDetailView 
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

  // 게시글 id
  {
    path: '/:id',
    name: 'DetailView',
    component: DetailView,
  },
  // 퀴즈 결과에 따른 라우터
  {
    path: '/success',
    name: 'SuccessQuiz',
    component: SuccessQuiz,
  },
  {
    path: '/failure',
    name: 'FailureQuiz',
    component: FailureQuiz,
  },
  // 추천 페이지 개별 영화 이동
  {
    path: '/recommend/:id',
    name: 'RecommendDetailView',
    component: RecommendDetailView 
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router