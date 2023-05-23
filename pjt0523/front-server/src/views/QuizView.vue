<template>
  <div>
    <h1>영화 퀴즈</h1>
    <div v-if="!quizStarted">
      <button @click="startQuiz" class="btn btn-primary">퀴즈 시작</button>
    </div>
    <div v-else>
      <h2>{{currentQuestion.question}}</h2>
      <ul>
        <li v-for="(option, index) in currentQuestion.options" :key="index">
          <label>
            <input type="radio" :value="option" v-model="selectedAnswer">{{option}}
          </label>
        </li>
      </ul>
      <button @click="submitAnswer" class="btn btn-primary">제출</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quizStarted: false,
      questions: [
        {
          question: '이 영화의 제목은 무엇일까요?',
          options: ['옵션 1', '옵션 2', '옵션 3', '옵션 4'],
          answer: '옵션 4'
        },
        // 다른 퀴즈 질문들을 추가할 수 있습니다.
      ],
      currentQuestionIndex: 0,
      selectedAnswer: null,
      correctAnswersCount: 0
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  },
  methods: {
    startQuiz() {
      // axios => 장고의 퀴즈 db를 건들여서 퀴즈를 가져와야 함
      this.quizStarted = true;
    },
    submitAnswer() {
      if (this.selectedAnswer === this.currentQuestion.answer) {
        this.correctAnswersCount++;
      }
      
      this.currentQuestionIndex++;
      this.selectedAnswer = null;
      
      if (this.currentQuestionIndex === this.questions.length) {
        this.navigateToResult();
      }
    },
    navigateToResult() {
      if (this.correctAnswersCount >= 1) {
        // 1문제 이상 정답인 경우 다른 라우터로 이동 
        this.$router.push({name: 'SuccessQuiz'})
      } else {
        // 0문제 이하 정답인 경우 다른 라우터로 이동 
        // console.log('aaa')
        this.$router.push({name: 'FailureQuiz'})
      }
    }
  }
};
</script>
