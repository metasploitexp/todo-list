<template>
    <div class="task-list">
        <Task v-for="task, index in tasks" :key="task.id" :index="index" :task="task" @deleteTask="deleteTask(index)" />
    </div>
</template>

<script>
import Task from '@/components/Task.vue';
import {mapGetters, mapMutations} from 'vuex';

export default {
    name: 'taskList',
    components: {
        Task,
    },
    computed: {
        tasks: {
            ...mapGetters({get: 'getTasks'}),
            ...mapMutations({set: 'setTasks'}),
       } 
    },
    methods: {
        deleteTask(index) {
            this.tasks = this.tasks.filter(task => task.id !== index);
            this.tasks.forEach((task, idx) => {
                if (index < task.id) {
                    this.tasks[idx].id -= 1;
                }
            })
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    },
    mounted() {
        const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.tasks = localTasks;
    }
}
</script>

<style lang="scss">
    .task-list {
        display: flex;
        flex-flow: column;
        gap: 10px;
    }
</style>