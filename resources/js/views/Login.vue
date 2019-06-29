<template>
    <div class="input__form">
        <div class="input__form-content">
            <div class="form__header">
                <span>Login</span>
            </div>
            
            <div class="register__link">
                <span>Don't have an account ?  <router-link :to="{ name: 'register' }">Register</router-link></span>
            </div>

            <div class="form__content">
                <input type="text" class="input__form" placeholder="Email" v-model="email" :class="emailError ? 'is-error' : ''">
                <p class="help is-danger" v-if="emailError">email required</p>
                <p class="help is-danger" v-if="!isEmail">Valid email required</p>
                <input type="password" class="input__form" placeholder="Password" v-model="password" :class="passwordError ? 'is-error' : ''">
                <p class="help is-danger" v-if="passwordError">password required</p>
            </div>

            <div class="form__footer">
                <button @click="login">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import store from '../store';

    export default {
        data() {
            return {
                email: '',
                password: '',
                emailError: false,
                passwordError: false,
                isEmail: true,
                errors: []
            }
        },

        methods: {
            login() {
                let data = {
                    email: this.email,
                    password: this.password,
                }

                this.checkForm();
                if(this.frontendValidation() === false) {
                    return ;
                }

                store.dispatch("doLogin", data);
            },

            checkForm: function () {
                this.emailError = false;
                this.passwordError = false;
                this.isEmail = true
                this.errors = []

                if (!this.password) {
                    this.passwordError = true;
                    this.errors.push("Password required.");
                }
                if (!this.email) {
                    this.emailError = true;
                    this.errors.push('Email required.');
                } else if (!this.validEmail(this.email)) {
                    this.isEmail = false;
                    this.errors.push('Valid email required.');
                }
            },

            validEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },

            frontendValidation: function() {
                if (!this.passwordError && !this.emailError && this.isEmail) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
</script>

<style lang="scss">
    .content {
        width: 100% !important;
    }

    .input__form {
        width: 400px;
        margin: 0px auto;
        border: 1px solid #ddd;
        position: relative;
        border-radius: 5px;
    }

    .register__link {
        width: 80%;
        display: block;
        margin: auto;
        font-size: 15px;
        color: #aaa;
        margin-top: 20px;
    }

    .form__content {
        margin: 20px 0;
        display: block;

        .input__form {
            width: 80%;
            display: block;
            margin: auto;
            border: 1px solid #ddd;
            outline: none;
        }

         input[type=password], input[type=text] {
            margin-top: 15px;
            padding: 10px 10px;
            border-radius: 3px;
            box-shadow: none;
        }

    }

    .form__header {
        padding-top: 30px;

        span {
            font-size: 1.5em;
            margin: 0 auto;
            text-align: center;
            display: block;
            font-weight: 500;
        }
    }

    .form__footer {
        padding-bottom: 20px;

        button {
            margin: 0 auto;
            display: block;
            width: 80%;
            padding: 8px 0;
            background: #db4c3f;
            border: none;
            border-radius: 3px;
            color: white;
            font-size: 15px;
            margin-top: 30px !important;
        }

        button:hover {
            background: #c53727;
        }
    }
</style>