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
                <input type="text" class="input__form" placeholder="Your Name" v-model="name">
                <input type="text" class="input__form" placeholder="Email" v-model="email">
                <input type="password" class="input__form" placeholder="Password" v-model="password">
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
                email: ''
            }
        },

        methods: {
            submit() {
                const sendData = {
                    name: this.name,
                    password: this.password,
                    email: this.email
                }

                axios.post('http://localhost:8000/api/users', sendData)
                .then(response => {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error)
                    console.log('asd')
                })
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