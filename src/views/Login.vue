<template>
    <main class="container-fluid d-flex justify-content-around flex-wrap">
        <section class="d-flex align-items-center justify-content-center">
            <img-guest></img-guest>
        </section>
        <article class="right d-flex flex-column justify-content-center">
            <h1 class="text-center">Login</h1>
            
            <div v-if="alert.display" class="alert alert-danger">
                {{alert.msg}}
            </div>
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
                    ></b-form-input>
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
                <b-button type="submit">Fazer login</b-button>
            </b-form>
        </article>

    </main>
</template>

<script>
import http from '../services/http.js';
import apiRoutes from '../services/apiRoutes.js';
import ImgGuestVue from '../components/ImgGuest.vue'
export default {
    name:'Login',
    data:function() {
        return {
            alert:{
                display:false,
                msg:''
            },
            user: {
                email:null,
                password:null
            }
        }
    },
    components: {
        'img-guest':ImgGuestVue
    },
    methods: {
        onSubmit() {
            if(!this.user.email || !this.user.password) {
                this.alert.display = true;
                this.alert.msg = 'Preencha todos os campos!';
                return;
            }
            const result = http.post(apiRoutes.login, {
                email:this.user.email,
                password:this.user.password
            });
            result.then((res) => {
                console.log(res);
            })
            .catch(e => {
                console.log(e)
            })
            console.log(this.user.email, this.user.password);
            console.log('submit')
        }
    }
}
</script>

<style scoped>
.container-fluid {
    height: 80vh;
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