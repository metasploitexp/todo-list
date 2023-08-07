<template>
    <div class="home-page">
        <CreateTask />
        <TaskList />
    </div>
</template>

<script>
import CreateTask from '@/components/CreateTask.vue';
import TaskList from '@/components/TaskList.vue';

export default {
    name: 'homePage',
    components: {
        CreateTask,
        TaskList,
    }
}
</script>

<style lang="scss">
    .home-page {
        width: 700px;
        height: 100%;
        min-height: 100vh;
        margin: 0 auto;
        padding: 20px;
        background: #c4bebe;
        display: flex;
        flex-flow: column;
        gap: 50px;
    }
</style>