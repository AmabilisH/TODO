import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/TodoList.vue'
import IssueList from '../components/IssueList.vue'
import TodosIssues from '../components/TodosIssues.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/issues',
      name: 'IssueList',
      component: IssueList
    },
    {
      path: '/todos-issues',
      name: 'TodosIssues',
      component: TodosIssues
    }
  ]
})
