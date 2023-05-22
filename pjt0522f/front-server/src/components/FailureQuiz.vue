<template>
  <div>
    <h1>저런... 영화를 잘 보시지 않는군요! 그렇다면 이러한 유명한 영화들은 어떤가요?</h1>
    <PopularMovies/>
  </div>
</template>

<script>
import PopularMovies from '../components/Movies/PopularMovies.vue'

export default {
  name: 'FailureQuiz',
  components: {
    PopularMovies,
  },

}
</script>

<style>

</style>