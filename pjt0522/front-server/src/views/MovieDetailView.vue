<template>
   <div>
    <b-card title="Movie Details" class="mb-2 text-muted">
      <h4 class="mb-2">제목 : {{ movie?.title }}</h4>
      <h4 class="mb-2">줄거리 : {{ movie?.overview }}</h4>
      <h4 class="mb-2">개봉일 : {{ movie?.release_date }}</h4>
      <h4 class="mb-2">평점 : {{ movie?.vote_average }}</h4>
      <h4 class="mb-2">관람평 수 : {{ movie?.vote_count }}</h4>
      <h4 class="mb-2">장르 : {{ movie?.genres }}</h4>
      <h4 class="mb-2">런타임 : {{ movie?.runtime }}</h4>
    </b-card>

    <div class="mb-3">
      <b-button variant="primary" @click="like">
        {{ liked ? 'Unlike' : 'Like' }} 좋아요
      </b-button>
      <b-button variant="info" class="ml-2" @click="getLikeStatusAndCount">Check total likes</b-button>
    </div>

    <p class="text-muted">Total Likes: {{ totalLikes }}</p>
    <CommentsSection />
  </div>
</template>

<script>
import axios from 'axios'
import CommentsSection from '@/components/CommentsSection.vue';
const API_KEY = 'db499efb2cc0ba6f9698b4699f1b762e'

export default {
  components: {
    CommentsSection
  },
  data() {
    return {
      movie: null,
      liked: false,
      totalLikes: 0,
      contentId: this.$route.params.id,
      
      // contentId: 1,
    };
  },
  created() {
    this.getMovieDetail()
    // this.getLikeStatusAndCount()
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
    },
     getLikeStatusAndCount() {
      axios.get('http://localhost:8000/api/likes/', {
        params: {
          content_id: this.contentId,
        },
      })
        .then(response => {
          this.liked = response.data.liked;
          this.totalLikes = response.data.total_likes;
        })
        .catch(error => {
          console.error(error);
        });
    },
    like() {
      if (!this.liked) {
        axios.post('http://localhost:8000/api/likes/', { user: this.$store.state.userId, // Vuex store에서 현재 로그인한 사용자의 ID를 가져옵니다.
        content: this.contentId, },
      //   {headers: {
      // 'Authorization': `Token ${this.$store.state.userToken}`}}
        )
          .then(response => {
            this.liked = true;
            this.totalLikes += 1;
            this.likeId = response.data.id
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        axios.delete(`http://localhost:8000/api/likes/${this.likeId}/`, {},
        // {headers: {
        //   'Authorization': `Token ${this.$store.state.userToken}`
        // }}
        )
          .then(() => {
            this.liked = false;
            this.totalLikes -= 1;
          })
          .catch(error => {
            console.error(error);
          });

    
  }}
}}
</script>