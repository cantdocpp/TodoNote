<template>
    <div class="task__list">
        <span class="section__title"> {{capitalizeSection}} </span>
        <span class="date"> {{todayDate}} </span>
        <div class="task__content">
            <div class="add__task" @click="isAddingTask">
                <div class="add__task-content" v-if="! addingTask">
                    <i class="material-icons">add</i>
                    <span>Add Task</span>
                </div>
            </div>
            <div class="add__task-form" v-if="addingTask">
                <input type="text" autofocus v-model="taskInput">
                <button class="add__task-button">Add Task</button>
                <span class="cancel" @click="isAddingTask">Cancel</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['section'],
        data() {
            return {
                options:{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
                today: new Date(),
                region: navigator.language,
                addingTask: false,
                taskInput: ''
            }
        },

        methods: {
            isAddingTask() {
                if (! this.addingTask) {
                    this.addingTask = true
                } else {
                    this.taskInput = ''; 
                    this.addingTask = false
                }
            }
        },

        computed: {
            capitalizeSection() {
                return this.section.charAt(0).toUpperCase() + this.section.slice(1)
            },

            todayDate() {
                return this.today.toLocaleDateString(this.region, this.options)
            }
        },

        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    .section__title {
        font-size: 26px;
        font-weight: 400;
    }

    .task__content {
        margin-top: 10px;
    }

    .add__task-form {
        input {
            width: 100%;
            height: 35px;
            border-radius: 3px;
            border: 1px solid #ddd;
            padding-left: 10px;
        }

        input:focus {
            outline: none;
        }

        .add__task-button {
            color: white;
            background: black;
            border: 1px solid black;
            padding: 8px;
            margin-top: 7px;
            border-radius: 3px;
            font-weight: 700;
        }

        .cancel {
            font-size: 14px;
            font-weight: 400;
            cursor: pointer;
            margin-left: 10px;
        }
    }

    .date {
        color: #aaa;
        font-size: 12px;
    }

    .add__task-content {
        vertical-align: middle;
        padding: 0px;
        position: relative;
        cursor: pointer;
        width: 100%;

        i {
            vertical-align: middle;
        }

        span {
            vertical-align: middle;
            display: inline-block;
            margin-top: 2px;
            font-size: 15px;
        }
    }

    
</style>