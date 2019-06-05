<template>
    <div class="task__list">
        <span class="section__title"> {{capitalizeSection}} </span>
        <span class="date"> {{todayDate}} </span>
        <div class="task__content">
            <div class="add__task">
                <div class="add__task-content">
                    <i class="material-icons">add</i>
                    <span>Add Task</span>
                </div>
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
            }
        },

        methods: {
            
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
        font-size: 30px;
        font-weight: 400;
    }

    .task__content {
        margin-top: 10px;
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
        }
    }

    
</style>