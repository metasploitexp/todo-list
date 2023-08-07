<template>
    <div class="task">
        <span class="task__label">{{id}}) {{ task.title }}</span>
        <div class="task__delete" @click="$emit('deleteTask')">
            delete
        </div>
    </div>
</template>

<script>
export default {
    name: 'taskList',
    props: {
        task: {
            type: Object,
            default: {},
        },
        index: {
            type: Number,
            default: 0,
        }
    },
    computed: {
        id() {
            return this.index + 1;
        }
    }
}
</script>

<style lang="scss">
    .task {
        // width: 100%;
        background: #fff;
        border-radius: 5px;
        height: 30px;
        font-size: 18px;
        display: flex;
        align-items: center;
        flex-flow: row nowrap;
        padding: 10px;

        &__delete {
            cursor: pointer;
            user-select: none;
            color: #fff;
            background: #e73a3a;
            padding: 5px 10px;
            border-radius: 5px;
            text-align: center;
            width: fit-content;
            font-size: 18px;
            margin-left: auto;
        }
    }
</style>