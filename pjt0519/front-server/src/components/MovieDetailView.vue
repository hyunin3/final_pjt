<template>
  <div class>
    <h1>Detail</h1>
    <!-- <img :src="imgUrl" alt=""> -->
    <p>title: {{this.$route.query.movie?.title}}</p>
    <p>overview: {{this.$route.query.movie?.overview}}</p>
    <p>popularity: {{this.$route.query.movie?.popularity}}</p>
    <p>release_date: {{this.$route.query.movie?.release_date}}</p>

  </div>
</template>

<script>
// const IMG_URL = 'https://image.tmdb.org/t/p/w300'

export default {
  name: 'MovieDetailView',
  props:{
  
  },
  // computed:{
  //   imgUrl(){
  //     return `${IMG_URL}` + this.$route.query.movie.poster_path
  //   }
  // },
 
}
</script>