<template>
  <div>
    <h1>영화를 잘 아시는 분이군요! 그렇다면 곧 개봉하는 영화들에 대해 알아볼까요?</h1>
    <UpcomingMovies/>
  </div>
</template>

<script>
import UpcomingMovies from '../components/Movies/UpcomingMovies.vue'

export default {
  name: 'SuccessQuiz',
  components: {
    UpcomingMovies,
  },

}
</script>

<style>

</style>