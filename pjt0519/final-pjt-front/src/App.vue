<template>
  <div id="app">
    <div id="navbar">
      <nav>
        <router-link :to="{ name: 'ArticleView' }">Article</router-link> |
        <router-link :to="{ name: 'MoviesView' }">영화</router-link> |
        <router-link :to="{ name: 'QuizView' }">Quiz</router-link> |
        <router-link :to="{ name: 'RecommendView' }">추천 영화</router-link> |
        <router-link :to="{ name: 'TicketView' }">오리지널 티켓 뽑기</router-link>
      </nav>

      <nav>
        <router-link v-if="!isLogin" :to="{ name: 'SignUpView' }">회원가입</router-link> |
        <router-link v-if="!isLogin" :to="{ name: 'LogInView' }">로그인</router-link>|
        <button v-if="isLogin" type="button" class="logoutButton" @click="logout">LogOut</button>
      </nav>
    </div>

    <router-view/>

  </div>
</template>

<script>

export default {
  methods: {
    logout() {
      this.$store.dispatch("logout") // 로그아웃
    },
    // isLoggedin() {
    //   // 로그인 상태를 확인하는 로직
    //   // 예: 로컬 스토리지에 토큰이 저장되어 있는지 확인
    //   return !!localStorage.getItem('token');
    // }
    
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부 확인
    }
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navbar {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
