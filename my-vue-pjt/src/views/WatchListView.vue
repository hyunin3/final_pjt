<template>
  <div>
    <h1>WatchListView</h1>
    <h1>보고 싶은 영화</h1>



<input type="text" v-model="content">
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="todo in todoList" :key="todo.date">
        <input type="checkbox" @click="updateTodo(todo)">

        <span :class="{ finish: todo.finish }">{{ todo.content }}</span>

      </li>
    </ul>
    <br>

    <button @click="deleteTodo">목록 삭제</button>


  </div>
</template>

<script>


export default {
  name: 'WatchListView',
  components: {
   
  },
  data () {
    return {
      content: '',
      todoList: [],
    }
  },
  methods: {
    addTodo () {
      const todo = {
        content: this.content,
        finish: false,
        
      }
      this.todoList.push(todo)
      this.content = ''
    },

    updateTodo (todo) {
      todo.finish = !todo.finish
    },

    deleteTodo () {
      const newTodoList = this.todoList.filter(function (todo) {
        return !todo.finish
      })
      this.todoList = newTodoList

    }
      }

}
</script>

<style>

</style>