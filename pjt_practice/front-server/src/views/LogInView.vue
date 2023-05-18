<template>
  <div>
    <h1>LogIn Page</h1>
    <form @submit.prevent="login">
      <label for="username">ID : </label>
      <input type="text" id="username" v-model="username" placeholder="아이디를 입력해주세요"><br>

      <label for="password"> password : </label>
      <input type="password" id="password" v-model="password" placeholder="비밀번호를 입력해주세요"><br>

      <!-- <input type="submit" value="logIn"> -->
      <button class="btn btn-primary" @click="login({username, password})">Login</button>
      <button class="btn btn-primary" @click="logout()">Logout</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LogInView',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    login() {
      const username = this.username
      const password = this. password

      const payload = {
        username, password
      }

      this.$store.dispatch('login', payload)
    },
    logout() {
      this.$store.dispatch('logout')

    },

  }
}
</script>
