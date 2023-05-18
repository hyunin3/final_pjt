import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieView from '../views/MovieView.vue'
import RandomView from '../views/RandomView.vue'
import WatchListView from '../views/WatchListView.vue'
import MovieDetailView from '../components/MovieDetailView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movies',
    name: 'MovieView',
    component: MovieView
  },
  {
    path: '/random',
    name: 'RandomView',
    component: RandomView
  },
  {
    path: '/watch-list',
    name: 'WatchListView',
    component: WatchListView
  },
  {
    path: '/moviedetail',
    name: 'MovieDetailView',
    component: MovieDetailView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
