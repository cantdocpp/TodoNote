<template>
    <div class="main">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link :to="{ name: 'home' }" class="brand">TodoNote</router-link>
            </div>
        </nav>

        <div class="container">
            <div class="main__content">
                <div class="sidenav">
                    <aside class="menu">
                        <ul class="menu-list">
                            <li><router-link :to="{ name: 'home' }">home</router-link></li>
                            <li><router-link :to="{ name: 'theTask' }">Today</router-link></li>
                        </ul>
                    </aside>
                </div>
                <div class="content">
                    <router-view></router-view>

                </div>
            </div>
        </div>  
    </div>
    

</template>
<script>
    import TodoList from '../component/TodoList';

    export default {
        data() {
            return {

            }
        },

        components: {
            TodoList
        }
    }
</script>

<style lang="scss" scoped>
    a {
        color: black;
    }

    .brand {
        position: absolute;
        margin-top: 8px;
        display: inline-block;
        font-size: 20px;
    }

    nav {
        padding: 0 10px;
        height: 50px !important;
        position: relative;
    }

    .container {
        position: relative;
        padding: 10px;
    }

    .sidenav {
        width: 25%;
    }

    aside {
        overflow-y: auto;
    }

    .main__content {
        display: flex;
        padding-top: 20px;
    }


    @media only screen and (max-width: 768px) {
        .navbar-brand {
            display: none;
        }

        aside {
            display: none;
        }
    }
</style>
