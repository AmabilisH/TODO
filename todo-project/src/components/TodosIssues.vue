<template>
  <div>
    <h1>Lista de tareas y problemas</h1>
    <!-- formulario de entrada de tareas -->
    <form @submit.prevent="addTodo">
      <el-input placeholder="Agregar nueva tarea" v-model="todo"></el-input>
      <el-button type="primary" @click="addTodo">Agregar</el-button>
    </form>
    <el-row :gutter="12">
      <!-- área de visualización de tareas pendientes -->
      <TodoItem
        v-for="(todo, index) in todos"
        :key="`todo-${index}`"
        :item="todo"
        :index="index"
        @remove-item="removeTodo"
        type="todo"
      />
      <!-- zona de visualización de problemas -->
      <TodoItem
        v-for="(issue, index) in issues"
        :key="`issue-${index}`"
        :item="issue.title"
        :index="index"
        @remove-item="closeIssue"
        type="issue"
      />
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
import TodoItem from '@/components/TodoItem';

const client = axios.create({
  baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`,
  headers: {
    'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type':'application/json',
  },
})

export default {
  name: 'TodosIssues',
  components: {
    TodoItem
  },
  data() {
    return {
      todo: '',
      todos: [],
      issues: []
    };
  },
  methods: {
    addTodo() {
      if (this.todo.trim() !== '') {
        this.todos.push(this.todo);
        this.todo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    closeIssue(index) {
      const target = this.issues[index];
      client.patch(`/issues/${target.number}`, {
        state: 'closed'
      }).then(() => {
        this.issues.splice(index, 1);
      });
    },
    getIssues() {
      client.get('issues').then((res) => {
        this.issues = res.data;
      });
    }
  },
  created() {
    this.getIssues();
  }
};
</script>

<style scoped>

</style>
