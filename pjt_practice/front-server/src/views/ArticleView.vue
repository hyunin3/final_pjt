<template>
  <div>
    <h1>퀴즈를 풀고 나만의 티켓을 만들어보세요!</h1>
    <router-link :to="{ name: 'QuizView' }">[Let's QUIZ!]</router-link>
    <ArticleList />
    <hr>

     <div v-if="!loggedIn">
      To use this app you'll need to
      <router-link to="/login">
        Login
      </router-link>
      or
      <router-link to="/register">
        Register
      </router-link>
      </div>
      
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'
import { authComputed } from '../store/helpers.js'

export default {
  name: 'ArticleView',
  components: {
    ArticleList,
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부
    },
     ...authComputed
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      if (this.isLogin) {
        this.$store.dispatch('getArticles')
      } else {
        alert('로그인이 필요한 페이지입니다...')
        this.$router.push({ name: 'LogInView' })
      }

      // 로그인이 되어 있으면 getArticles action 실행
      // 로그인 X라면 login 페이지로 이동
    }
  }
}
</script>

<style>

</style>
