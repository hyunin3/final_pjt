<template>
  <div class="container">
    <button @click="getRandomMovie" class="btn btn-warning d-grid gap-2 col-6 mx-auto">뽑기</button>
    <br>
    <br>
    <div class="ticket">
      <div class="center">
        <img :src="imgUrl" alt="">
      </div>
    </div>
    <p>{{randomMovie.title}}</p>
  </div>
</template>

<script>
import lodash from 'lodash'
import axios from 'axios'
const TOP_RATED_URL =  `https://api.themoviedb.org/3/movie/top_rated?api_key=db499efb2cc0ba6f9698b4699f1b762e&language=ko-KR&page=1`
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export default {
  name: 'TicketView',
  data () {
    return {
      randomMovie: '',
      imgUrl: null,
    }
  },

  
  methods: {
    getRandomMovie () {

      axios({
        method: 'get',
        url: TOP_RATED_URL
      })
      .then((response) => {
        const moviesData = response.data.results

        this.randomMovie = lodash.sample(moviesData)
        this.imgUrl = `${IMG_URL}` + this.randomMovie.poster_path
      })
    },
  }
}
</script>

<style scoped>
.ticket {
  width: 160px;
  height: 250px;
  background-image: imgUrl;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.ticket::before, .ticket::after {
  content: "";
  position: absolute;
  height: 100px;
  width: 100px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 50%;
}

.ticket::before {
  top: 0;
  left: 0;
  transform: translate(-60%, -60%);
}

.ticket::after {
  bottom: 0;
  right: 0;
  transform: translate(60%, 60%);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 조정 가능한 높이 값 */
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>