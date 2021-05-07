<template>
    <main class="container-fluid d-flex justify-content-around flex-wrap">
        <section class="d-flex align-items-center justify-content-center">
            <img-guest></img-guest>
        </section>
        <article class="right d-flex flex-column justify-content-center">
            <h1 class="text-center">Faça o seu cadastro e participe!</h1>
            
            <div v-if="alert.display" class="alert alert-danger">
                {{alert.msg}}
            </div>
            <b-form @submit.prevent="register">
                <b-form-group
                    id="input-group-1"
                    label="Seu Nome"
                    label-for="name"
                >
                    <b-form-input
                    id="name"
                    v-model="register.name"
                    type="text"
                    placeholder="Seu nome"
                    autofocus
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-1"
                    label="Seu Telefone"
                    label-for="phone"
                >
                    <the-mask
                    id="phone"
                    v-model="register.phone"
                    class="form-control"
                    type="text"
                    :mask="['(##) #####-####']"
                    placeholder="(99) 99999-9999"
                    required
                    ></the-mask>
                </b-form-group>

                <b-form-group
                    id="input-group-1"
                    label="Seu E-mail"
                    label-for="email"
                >
                    <b-input
                    id="email"
                    v-model="register.email"
                    type="text"
                    placeholder="Seu e-mail"
                    required
                    ></b-input>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label="Sua Senha"
                    label-for="password"
                >
                    <b-form-input
                    id="password"
                    v-model="register.password"
                    type="password"
                    placeholder="***"
                    
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label="Confirme sua senha"
                    label-for="passwordConfirm"
                >
                    <b-form-input
                    id="passwordConfirm"
                    v-model="register.passwordConfirm"
                    type="password"
                    placeholder="***"
                    
                    ></b-form-input>
                </b-form-group>
                <input 
                    type="checkbox" 
                    id="use" 
                    v-model="use"
                >
                <label for="use">Li e aceito os <router-link to="/termos"> Termos de Uso</router-link></label>
                <p class="mt-2">Já tem cadastro? Faça o<router-link to="/login"> login</router-link></p>
                <b-button type="submit">Fazer cadastro</b-button>
            </b-form>
        </article>

    </main>
</template>

<script>
import ImgGuestVue from '../components/ImgGuest.vue'
import {TheMask} from 'vue-the-mask';
export default {
    name:'Register',
    data:function() {
        return {
            alert:{
                display:false,
                msg:''
            },
            register: {
                name:null,
                email:null,
                phone:null,
                password:null,
                passwordConfirm:null
            },
            use:false
        }
    },
    components: {
        'img-guest':ImgGuestVue,
        'the-mask':TheMask
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

</style>