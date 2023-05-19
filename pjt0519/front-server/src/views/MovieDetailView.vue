<template>
  <div>
    <h4>제목 : {{ movie?.title }}</h4>
    <h4>줄거리 : {{ movie?.overview }}</h4>
    <h4>개봉일 : {{ movie?.release_date }}</h4>
    <h4>평점 : {{ movie?.vote_average }}</h4>
    <h4>관람평 수 : {{ movie?.vote_count }}</h4>
    <h4>장르 : {{ movie?.genres }}</h4>
    <h4>런타임 : {{ movie?.runtime }}</h4>
  </div>
</template>

<script>
import axios from 'axios'

const API_KEY = 'db499efb2cc0ba6f9698b4699f1b762e'

export default {
  data() {
    return {
      movie: null,
    };
  },
  created() {
    this.getMovieDetail()
  },
  methods: {
    getMovieDetail() {
      const id = this.$route.params.id
      const DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`
      
      axios({
        method: 'get',
        url: DETAIL_URL
      })
      .then((response) => {
        this.movie = response.data
      })
    }
  }
};
</script>