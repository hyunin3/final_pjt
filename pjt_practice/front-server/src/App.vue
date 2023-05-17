<template>
  <div id="app">
    <div id="navbar">
      <nav>
        <router-link :to="{ name: 'ArticleView' }">영화</router-link> |
        <router-link :to="{ name: 'QuizView' }">Poster Quiz</router-link> |
        <router-link :to="{ name: 'RecommendView' }">추천 영화</router-link> |
        <router-link :to="{ name: 'TicketView' }">오리지널 티켓 뽑기</router-link>
      </nav>

      <nav>
        <router-link :to="{ name: 'SignUpView' }">회원가입</router-link> |
        <router-link :to="{ name: 'LogInView' }">로그인</router-link>
      </nav>
    </div>

    <router-view/>

  </div>
</template>

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
