<template>
  <div>
    <h1>Detail</h1>
    <p>글 번호 : {{ article?.id }}</p>
    <p>제목 : {{ article?.title }}</p>
    <p>내용 : {{ article?.content }}</p>
    <p>작성시간 : {{ article?.created_at }}</p>
    <p>수정시간 : {{ article?.updated_at }}</p>

    <!-- 여기에 직접 작성 안하면 ArticleListItem같은거 하나 만들어서 넘겨주고 -->
    <!-- <div>
      <form action=""></form>
      <ul>
        <li>코멘트1</li>
        <li>코멘트1</li>
        <li>코멘트1</li>
        <li>코멘트1</li>
        <li>코멘트1</li>
      </ul>
    </div> -->
  <!-- <div>
    <button @click="likePost">
      {{ liked ? 'Unlike' : 'Like' }} Post
    </button>
    <p>Total Likes: {{ totalLikes }}</p>
  </div> -->

<!-- <form @submit.prevent="createArticle">
      <label for="content">댓글 : </label>
      <textarea id="content" cols="30" rows="10" v-model="content"></textarea><br>
      <input type="submit" id="submit">
    </form> -->
    <div v-for="comment in comments" :key="comment.id">
      <p>{{ comment.content }}</p>
    </div>
    
    <div>
      <input v-model="commentContent" type="text" placeholder="Write a comment..." />
      <button @click="writeComment">Submit</button>
    </div>


  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'DetailView',
  data() {
    return {
      article: null,
      liked: false,
      totalLikes: 0,
      commentContent: '',
      comments: [],
    }
  },
  // created() {
  //   this.getArticleDetail()
  // },
  
  methods: {
    getArticleDetail() {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/${ this.$route.params.id }/`,
      })
      .then((res) => {
        console.log(res)
        this.article = res.data
      })
      .catch((err) => {
        console.log(err)
      })
    },
    
    // likePost() {
    //   this.liked = !this.liked
    //   this.totalLikes = this.liked ? this.totalLikes + 1 : this.totalLikes - 1
    // },

  //  async writeComment() {
  //     try {
  //       const response = await axios.post(`${API_URL}/api/v1/comments/`, {
  //         article: this.article.id,
  //         content: this.commentContent,
  //       });
  //       this.comments.push(response.data);
  //       this.commentContent = '';
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  // async likePost() {
  //     try {
  //       if (!this.liked) {
  //           await axios.post(`${API_URL}/api/v1/likes/`, {
  //           article: this.article.id,
  //         });
  //         this.liked = true;
  //         this.totalLikes += 1;
  //       } else {
  //         await axios.delete(`${API_URL}/api/v1/likes/${this.article.id}/`);
  //         this.liked = false;
  //         this.totalLikes -= 1;
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  //   async created() {
  //   this.getArticleDetail()
  //   try {
  //     const response = await axios.get(`${API_URL}/api/v1/articles/${this.article.id}/`);
  //     this.comments = response.data.comment_set;
  //   } catch (error) {
  //     // 에러 처리
  //     console.error(error);
  //   }
  // },

}
}
</script>
