<template>
    <div class="create-task">
        <input type="text" v-model="text" @keyup.enter="create">
        <div class="create-task__button" @click="create">
            Create
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
    name: 'createTask',
    data() {
        return {
            text: '',
        }
    },
    computed: {
       tasks: {
            ...mapGetters({get: 'getTasks'}),
            ...mapMutations({set: 'setTasks'}),
       } 
    },
    methods: {
        create() {
            this.$store.commit('addTask', {id: this.tasks?.length, title: this.text});
            this.text = '';
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
}
</script>

<style lang="scss">
    .create-task {
        display: flex;
        flex-flow: row nowrap;
        gap: 20px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        input {
            width: 300px;
            height: 20px;
            font-size: 20px;
        }

        &__button {
            cursor: pointer;
            user-select: none;
            width: fit-content;
            text-align: center;
            padding: 5px 10px;
            border-radius: 10px;
            font-size: 20px;
            background: #e73a3a;
            color: #fff;
        }
    }
</style>