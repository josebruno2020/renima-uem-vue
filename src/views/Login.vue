<template>
    <main class="main">
        <vue-title title="Login"></vue-title>
        <section class="d-flex align-items-center justify-content-center">
            <img-guest></img-guest>
        </section>
        <article class="right d-flex flex-column justify-content-center">
            <h1 class="text-center">Login</h1>
            <error-form v-if="msg" :error="msg"></error-form>
            <b-form @submit.prevent="onSubmit">
                <b-form-group
                    id="input-group-1"
                    label="Seu E-mail"
                    label-for="email"
                >
                    <b-form-input
                    name="email"
                    data-vv-as="e-mail"
                    id="email"
                    v-model="user.email"
                    type="email"
                    placeholder="Seu e-mail"
                    autofocus
                    v-validate="'required|email'"
                    @focus="msg = ''"
                    :class="{'is-danger':errors.has('email')}"
                    ></b-form-input>
                    
                    <error-form :error="errors.first('email')"></error-form>
                    
                </b-form-group>
                

                <b-form-group
                    id="input-group-2"
                    label="Sua Senha"
                    label-for="password"
                >
                    <b-form-input
                    name="password"
                    data-vv-as="senha"
                    id="password"
                    v-model="user.password"
                    type="password"
                    placeholder="***"
                    v-validate="'required'"
                    :class="{'is-danger':errors.has('password')}"
                    ></b-form-input>
                    <error-form :error="errors.first('password')"></error-form>
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
import VueTitleVue from '../components/VueTitle.vue';
import Login from '../models/Login';
export default {
    name:'Login',
    data:function() {
        return {
            user: new Login(),
            loading:false,
            msg:'',
        }
    },
    components: {
        'img-guest':ImgGuestVue,
        'loading':LoadingVue,
        'error-form':ErrorFormVue,
        'vue-title':VueTitleVue
    },
    methods: {
        onSubmit() {
            this.$validator.validateAll()
            .then(success => {
                if(success) {
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
                        router.push({name:'Preparatory'});
                    })
                    .catch(() => {
                        this.loading = false;
                        this.msg = 'Usuário e/ou senha inválidos!'
                    })
                }
            })
            
        }
    }
}
</script>

<style scoped>
.main {
    height: 80vh;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}
.right {
    padding: 0% 8%;
}

.is-danger {
    border-color: #dc3545;
}




@media only screen and (max-width: 700px) {
    .main {
        height: auto !important;
    }
    .right {
        width: 100%;
    }
    
}
</style>