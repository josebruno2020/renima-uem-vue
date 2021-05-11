<template>
    <main class="container d-flex justify-content-around flex-wrap main">
        <section class="d-flex align-items-center justify-content-center">
            <img-guest></img-guest>
        </section>
        <article class="right d-flex flex-column justify-content-center">
            <h1 class="text-center">Login</h1>
            
            <b-form @submit.prevent="onSubmit">
                <b-form-group
                    id="input-group-1"
                    label="Seu E-mail"
                    label-for="email"
                >
                    <b-form-input
                    id="email"
                    v-model="user.email"
                    type="email"
                    placeholder="Seu e-mail"
                    required
                    autofocus
                    ></b-form-input>
                    <error-form :error="errors.email"></error-form>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label="Sua Senha"
                    label-for="password"
                >
                    <b-form-input
                    id="password"
                    v-model="user.password"
                    type="password"
                    placeholder="***"
                    
                    ></b-form-input>
                </b-form-group>
                <p class="mt-2">Ainda não tem cadastro? <router-link to="/register">Registre-se</router-link></p>
                <b-button v-if="!loading" type="submit">Fazer login</b-button>
                <loading v-else></loading>
            </b-form>
        </article>

    </main>
</template>

<script>
import http from '../services/http.js';
import apiRoutes from '../services/apiRoutes.js';
import ImgGuestVue from '../components/ImgGuest.vue'
import LoadingVue from '../components/Loading.vue';
import ErrorFormVue from '../components/ErrorForm.vue';
import router from '../router/index';
import { fillUser } from '../services/utils';
export default {
    name:'Login',
    data:function() {
        return {
            user: {
                email:null,
                password:null
            },
            errors:[],
            loading:false
        }
    },
    components: {
        'img-guest':ImgGuestVue,
        'loading':LoadingVue,
        'error-form':ErrorFormVue
    },
    methods: {
        onSubmit() {
            this.errors = [];
            if(!this.user.email || !this.user.password) {
                this.errors.email = 'Preencha todos os campos!';
                return;
            }
            this.loading = true;
            const result = http.post(apiRoutes.login, {
                email:this.user.email,
                password:this.user.password
            });
            result.then((res) => {
                this.$emit('logado', true);
                let user = JSON.stringify(res.data.user);
                let token = res.data.token;
                fillUser(user, token);
                
                this.loading = false;
                router.push('module/preparatory');
            })
            .catch(() => {
                this.loading = false;
                this.errors.email = 'Usuário e/ou senha inválidos!'
            })
        }
    }
}
</script>

<style scoped>
.container {
    height: 90vh;
}
.form-control {
    margin-bottom: 20px;
}

.right {
    max-width: 50%;
}

.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>