<template>
    <div class="input__form">
        <div class="input__form-content">
            <div class="form__header">
                <span>Welcome To TodoNote</span>
            </div>
            
            <div class="login__link">
                <span>Already have an account ?  <router-link :to="{ name: 'login' }">Log in</router-link></span>
            </div>

            <div class="form__content">
                <input type="text" class="input__form" :class="nameError ? 'is-error' : ''" placeholder="Your Name" v-model="name">
                <p class="help is-danger" v-if="nameError">Username required</p>
                <input type="text" class="input__form" placeholder="Email" :class="emailError ? 'is-error' : ''" v-model="email">
                <p class="help is-danger" v-if="emailError">email required</p>
                <p class="help is-danger" v-if="!isEmail">Valid email required</p>
                <input type="password" class="input__form" :class="passwordError ? 'is-error' : ''" placeholder="Password" v-model="password">
                <p class="help is-danger" v-if="passwordError">password required</p>
            </div>

            <div class="form__footer">
                <button @click="submit">Register</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                name : '',
                password: '',
                email: '',
                errors: [],
                nameError: false,
                emailError: false,
                passwordError: false,
                isEmail: true
            }
        },

        methods: {
            submit() {
                this.checkForm();
                if(this.frontendValidation() === false) {
                    return ;
                }

                const sendData = {
                    name: this.name,
                    password: this.password,
                    email: this.email
                }

                let self = this;

                axios.post('http://localhost:8000/api/register', sendData)
                .then(response => {
                    console.log(response);
                    self.clearingForm();
                })
                .catch(function(error) {
                    // self.errors = error.response.data.errors;
                    console.error(error.response);
                    console.log(error.response)
                })
            },

            checkForm: function () {
                this.errors = [];

                this.nameError = false;
                this.emailError = false;
                this.passwordError = false;
                this.isEmail = true

                if (!this.name) {
                    this.nameError = true;
                    this.errors.push("Name required.");
                }
                if (!this.password) {
                    this.passwordError = true;
                    this.errors.push("Password required.");
                }
                if (!this.email) {
                    this.emailError = true;
                    this.errors.push('Email required.');
                } else if (!this.validEmail(this.email)) {
                    // console.log(this.validEmail(this.email), '<<<<<<<<valid email')
                    this.isEmail = false;
                    this.errors.push('Valid email required.');
                }

                if (!this.errors.length) {
                    return true;
                }
            },

            validEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },

            clearingForm: function() {
                this.name = '';
                this.email = '';
                this.password = '';
                this.errors = [];
                this.nameError = false;
                this.emailError = false;
                this.passwordError = false;
                this.isEmail = true;
            },

            frontendValidation: function() {
                if (!this.nameError && !this.passwordError && !this.emailError && this.isEmail) {
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

    .login__link {
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
        }

        .help {
            margin-left: 40px;
        }

         input[type=password], input[type=text] {
            margin-top: 15px;
            padding: 10px 10px;
            border-radius: 3px;
            box-shadow: none;
        }

        .is-error {
            border: 1px solid red;
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