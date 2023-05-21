<template>
  <div>
    <h2>Comments</h2>
    <form @submit.prevent="submitComment">
      <textarea v-model="newComment" placeholder="Write a comment"></textarea>
      <button type="submit">Submit</button>
    </form>
    <div v-for="comment in comments" :key="comment.id">
      <h3>{{ comment.user }}</h3>
      <p>{{ comment.content }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      newComment: '',
      comments: []
    };
  },
  computed: {
    ...mapState(['user']),  // Vuex store의 `user` state를 `this.user`로 매핑
  },
  methods: {
   async submitComment() {
  const movieId = this.$route.params.id;

  // `this.user`가 존재하고, `this.user.id`가 존재하는지 확인합니다.
  if (this.user && this.user.id) {
    const response = await axios.post('http://localhost:8000/api/comments/', {
      movie_id: movieId,
      user: this.user.id,
      content: this.newComment
    });
    this.comments.push(response.data);
    this.newComment = ''
} else {
    // `this.user`나 `this.user.id`가 존재하지 않는다면 오류 메시지를 출력하거나
    // 다른 조치를 취합니다.
    console.error('User or user.id is not defined.');
  }}
  },
  async created() {
    const movieId = this.$route.params.id;
    const response = await axios.get(`/api/comments/?movie=${movieId}`);
    this.comments = response.data;
  }
}
</script>
