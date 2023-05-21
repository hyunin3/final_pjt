<template>
  <div class="ticket">
    <img :src="imgUrl" alt="">
  </div>
</template>

<script>
const IMG_URL = 'https://image.tmdb.org/t/p/w200'

export default {
  name: 'MovieCard',
  props:{
    movie : Object,
  },
  computed:{
    imgUrl(){
      // return '정해진 url http' + this.movie.{axios로 받아온 데이터의 url}
      return `${IMG_URL}` + this.movie.poster_path
    }
  },
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

/* .ticket::before:nth-child(1) {
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ticket::before:nth-child(2) {
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
}

.ticket::before:nth-child(3) {
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
}

.ticket::before:nth-child(4) {
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}

.ticket::before:nth-child(5) {
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
}

.ticket::before:nth-child(6) {
  bottom: 50%;
  left: 0;
  transform: translate(-50%, 50%);
}

.ticket::before:nth-child(7) {
  bottom: 50%;
  right: 0;
  transform: translate(50%, 50%);
} */
</style>