<template>
    <div class="login">
        <h1>Login</h1>
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

    </div>
</template>

<script>
import http from '../services/http.js';
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
    methods: {
        onSubmit() {
            if(!this.user.email || !this.user.password) {
                this.alert.display = true;
                this.alert.msg = 'Preencha todos os campos!';
                return;
            }
            console.log(this.user.email, this.user.password);
            console.log('submit')
        }
    }
}
</script>

<style scoped>
.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>