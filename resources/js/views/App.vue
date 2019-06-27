<template>
    <div class="main">
        <nav class="topnav">
            <div class="navbar__brand">
                <div class="navbar__brand-title">
                    <router-link 
                    :to="{ name: 'home' }" 
                    class="" 
                    v-if="$route.name != 'login' && $route.name != 'register'">
                    TodoNote
                    </router-link>
                </div>
            </div>

            <div class="navbar__hamburger">
                
            </div>

            <div class="navbar__item__end">
                <i class="material-icons">settings</i>
            </div>
        </nav>

        <div class="container">
            <div class="main__content">
                <div class="sidenav" v-if="$route.name != 'login' && $route.name != 'register'">
                    <aside class="menu">
                        <ul class="menu-list">
                            <li><router-link :to="{ name: 'theTask', params: {section: 'Today'} }"><i class="material-icons icon">calendar_today</i>Today</router-link></li>
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
    .content {
        font-family: 'Roboto', sans-serif;
        margin-left: 50px;
        width: 70%;
    }

    a {
        color: black;
    }

    .topnav {
        height: 50px;
        width: 100%;
        position: fixed;
        display: flex;
        position: relative;
        z-index: 400;

        .navbar__brand {
            display: inline;
            margin-left: 10px;

            .navbar__brand-title {
                display: inline-block;
                font-size: 22px;
                align-items: center;
                height: 100%;
                display: flex;
            }
        }

        .navbar__item__end {
            display: inline-block;
            font-size: 18px;
            right: 10px;
            position: absolute;
            align-items: center;
            height: 100%;
            display: flex;
            cursor: pointer;
        }
    }

    .icons {
        cursor: pointer;
        vertical-align: middle
    }

    .icon {
        font-size: 20px;
        vertical-align: middle;
    }

    .container {
        position: relative;
    }

    .sidenav {
        width: 25%;
    }

    aside {
        overflow-y: auto;
    }

    .main__content {
        display: flex;
        padding-top: 40px;
    }

    @media only screen and (max-width: 768px) {
        .navbar__brand {
            display: none !important;
        }

        aside {
            display: none;
        }
    }
</style>
