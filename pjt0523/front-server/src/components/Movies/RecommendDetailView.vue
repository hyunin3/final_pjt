<template>
  <div>
    <h1>RecommendDetailView</h1>
    <b-card title="Movie Details" class="mb-2 text-muted">
      <h4 class="mb-2">제목 : {{ movie?.title }}</h4>
      <h4 class="mb-2">줄거리 : {{ movie?.overview }}</h4>
      <h4 class="mb-2">개봉일 : {{ movie?.released_date }}</h4>
      <h4 class="mb-2">평점 : {{ movie?.vote_avg }}</h4>
   
      <img :src="imgUrl" alt="">
      
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
export default {
  data() {
    return {
      movie: '',
      // 기능상 문제는 없지만 여기 null로 해두면 콘솔에 에러찍힘
    };
  },
  computed:{
    imgUrl(){
      return `${IMG_URL}` + this.movie.poster_path
    }
  },
  created() {
    const movieId = this.$route.params.id;
    axios.get(`http://localhost:8000/movies/movies/${movieId}/`)
      .then(response => {
        this.movie = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style>

</style>