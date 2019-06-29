<template>
    <div class="main">
        <nav class="topnav" v-if="$route.name != 'login' && $route.name != 'register'">
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
                    <div class="hamburger__iner">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </div>

                <div class="navbar__item__end">
                    <!-- <i class="material-icons">settings</i> -->
                    <div class="dropdown is-right" :class="settingClicked ? 'is-active' : ''">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="clickedSetting">
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
                            <li><router-link :to="{ name: 'theTask', params: {section: 'today'} }"><i class="material-icons icons">calendar_today</i> <span>Today</span> </router-link></li>
                        </ul>
                    </aside>
                </div>
                <div class="content">
                    <div class="app__content">
                        <router-view></router-view>
                    </div>
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
                if (! this.settingClicked) {
                    this.settingClicked = true
                } else {
                    this.settingClicked = false
                }
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
            margin-top: 80px !important;
            width: 950px;
            display: flex;

            .sidenav {
                width: 35%;

                aside {
                    overflow-y: auto;                  
                }
            }

            .content {
                width: 70%
            }
        }
    }

    .menu-list span {
        vertical-align: middle
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
                display: none;
                flex-direction: column;
                border-radius: 2px;
                align-items: center;
                vertical-align: middle;
                justify-content: center;
                cursor: pointer;
                margin-left: 10px;

                .bar {
                    display: block;
                    width: 25px;
                    background-color: black;
                    height: 3px;
                    margin-bottom: 4px;
                    border-radius: 2px;
                    transition: all 0.4s ease-in-out;
                }
            }
        }
    }

    .icons {
        cursor: pointer;
        vertical-align: middle;
        font-size: 20px;
    }

    @media only screen and (max-width: 768px) {
        .navbar__brand {
            display: none !important;
        }

        .navbar__hamburger {
            display: flex !important;
        }

        .content {
            width: 100%;
            display: flex;
            margin-left: none;

            .app__content {
                width: 90%;
                justify-content: center;
            }
        }

        .sidenav {
            display: none;
        }
    }
</style>
