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


<form @submit.prevent="createArticle">
      <label for="content">댓글 : </label>
      <textarea id="content" cols="30" rows="10" v-model="content"></textarea><br>
      <input type="submit" id="submit">
    </form>


  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'DetailView',
  data() {
    return {
      article: null
    }
  },
  created() {
    this.getArticleDetail()
  },
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
    createComments() {
      const content = this.content

      axios({
        method: 'post',
        url: `${API_URL}/api/v1/articles/`,
        data: { content},
        headers: {
          Authorization: `Token ${this.$store.state.token}`
        }
      })
      .then(() => {
        // console.log(res)
        this.$router.push({name: 'ArticleView'})
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
