<template>
  <div>
    <h1>Recommend Page</h1>
    <hr>
    <div v-for="movie in movies" :key="movie.id">
            <h2>{{ movie.title }}</h2>
            <!-- 영화에 대한 정보와 댓글 입력 폼을 여기에 추가 -->
            <form @submit.prevent="submitComment(movie)">
                <input v-model="commentContent" placeholder="Comment here...">
                <button type="submit">Submit</button>
            </form>
        </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            movies: [],
            commentContent: '',
        };
    },
    methods: {
        submitComment(movie) {
            axios.post('http://localhost:8000/comments/', {  // Django 서버의 URL
                movie_id: movie.movie_id,
                content: this.commentContent,
            }).then(() => {
                this.commentContent = '';
                // 댓글이 성공적으로 저장되면 입력 폼을 비웁니다.
                // 필요에 따라 댓글을 다시 불러올 수 있습니다.
            });
        },
    },
    created() {
        axios.get('http://localhost:8000/movies/')
            .then(response => {
                this.movies = response.data;
            });
    },
    }



</script>

<style>

</style>
