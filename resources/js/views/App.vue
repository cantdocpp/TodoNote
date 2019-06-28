<template>
    <div class="main">
        <nav class="topnav">
            <div class="topnav__inner">
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
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="navbar__item__end">
                    <!-- <i class="material-icons">settings</i> -->
                    <div class="dropdown is-right" :class="settingClicked ? 'is-active' : ''">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <i class="material-icons">settings</i>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item">
                                    Dropdown item
                                </a>
                                <a class="dropdown-item">
                                    Other dropdown items
                                </a>
                                <a href="#" class="dropdown-item is-active">
                                    Active dropdown item
                                </a>
                                <a href="#" class="dropdown-item">
                                    Other dropdown item
                                </a>
                                <hr class="dropdown-divider">
                                <a href="#" class="dropdown-item">
                                    With a divider
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="app">
            <div class="main__content">
                <div class="sidenav" v-if="$route.name != 'login' && $route.name != 'register'">
                    <aside class="menu">
                        <ul class="menu-list">
                            <li><router-link :to="{ name: 'theTask', params: {section: 'today'} }"><i class="material-icons icon">calendar_today</i>Today</router-link></li>
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

    export default {
        data() {
            return {
                settingClicked: false
            }
        },

        methods: {
            clickedSetting() {
                this.settingClicked = true;
            }
        },
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

    .app {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center !important;

        .main__content {
            margin-top: 40px !important;
            width: 950px;
            display: flex;

            .sidenav {
                width: 25%;

                aside {
                    overflow-y: auto;

                    .menu {
                        .menu-list {
                            
                        }
                    }
                }
            }

            .content {
                width: 70%
            }
        }
    }

    

    .topnav {
       width: 100%;
       position: fixed;
       display: flex;
       height: 50px;
       align-items: center;
       justify-content: center;
       z-index: 400;
       top: 0px;

        .topnav__inner {
            width: 950px;
            position: relative;
            display: flex;

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

                button {
                    padding: 0px;
                    border: none;
                    box-shadow: none;
                    height: 0px
                }
            }

            .navbar__hamburger {
                span {
                    color: black;
                    width: 33px;
                    height: 5px;
                }
            }
        }
    }

    .icons {
        cursor: pointer;
        vertical-align: middle
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
