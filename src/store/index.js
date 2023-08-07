import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
  },
  getters: {
    getTasks: (state) => state.tasks,
  },
  mutations: {
    setTasks: (state, value) => state.tasks = value,
    addTask: (state, value) => state.tasks.push(value),
  },
  actions: {
  },
  modules: {
  }
})
