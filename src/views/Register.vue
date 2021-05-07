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
                <div class="group">
                    <b-form-group
                        id="input-group-1"
                        label="Seu Nome"
                        label-for="name"
                    >
                        <b-form-input
                        id="name"
                        v-model="name"
                        type="text"
                        placeholder="Seu nome"
                        autofocus
                        required
                        ></b-form-input>
                        <p class="error">{{errors.name}}</p>
                    </b-form-group>
                </div>
                
                <div class="group">
                    <b-form-group
                        id="input-group-1"
                        label="Seu Telefone"
                        label-for="phone"
                    >
                        <the-mask
                        id="phone"
                        v-model="phone"
                        class="form-control"
                        type="text"
                        :mask="['(##) #####-####']"
                        placeholder="(99) 99999-9999"
                        required
                        ></the-mask>
                        <p class="error">{{errors.phone}}</p>
                    </b-form-group>
                </div>


                <div class="group">
                    <b-form-group
                        id="input-group-1"
                        label="Seu E-mail"
                        label-for="email"
                    >
                        <b-input
                        id="email"
                        v-model="email"
                        type="text"
                        placeholder="Seu e-mail"
                        required
                        ></b-input>
                        <p class="err">{{ errors.email }}</p>
                    </b-form-group>
                </div>
                
                <div class="group">
                    <b-form-group
                        id="input-group-2"
                        label="Sua Senha"
                        label-for="password"
                    >
                        <b-form-input
                        id="password"
                        v-model="password"
                        type="password"
                        placeholder="***"
                        
                        
                        ></b-form-input>
                        <p class="error">{{errors.password}}</p>
                    </b-form-group>
                </div>

                <div class="group">
                
                    <b-form-group
                        id="input-group-2"
                        label="Confirme sua senha"
                        label-for="passwordConfirm"
                    >
                        <b-form-input
                        id="passwordConfirm"
                        v-model="passwordConfirm"
                        type="password"
                        placeholder="***"
                        
                        ></b-form-input>
                        <p class="error" style="color:red;">{{errors.passwordConfirm}}</p>
                    </b-form-group>
                </div>
                <input 
                    type="checkbox" 
                    id="use" 
                    v-model="use"
                >
            
                <label class="pl-3" for="use">Li e aceito os <router-link to="/termos"> Termos de Uso</router-link></label>
                <p class="mt-2">Já tem cadastro? Faça o<router-link to="/login"> login</router-link></p>
                <b-button :class="{buttonDisabled:thereError}" type="submit">Fazer cadastro</b-button>
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
            name:null,
            email:null,
            phone:null,
            password:null,
            passwordConfirm:null,
            errors:[],
            use:false
        }
    },
    components: {
        'img-guest':ImgGuestVue,
        'the-mask':TheMask
    },
    methods: {
        
    },
    watch: {
        password:function(val) {
            console.log(this.thereError)
            if(val.length <= 4) {
                return this.errors['password'] = 'A senha deve ser maior que 4 caracteres';
            } else {
                return this.errors.password = null;
            }
           
        },
        passwordConfirm:function(val) {
            if(val != this.password) {
                return this.errors.passwordConfirm = 'As senhas devem ser iguais';
            } else {
                return this.errors.passwordConfirm = null;
            }
        }
    },
    computed: {
        thereError:function() {
            return this.errors.length;
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
.container-fluid {
    height: 80vh;
}
.form-control {
    /* padding-top: 20px; */
}

.right {
    max-width: 50%;
}
.buttonDisabled {
    cursor: no-drop;
}
.group {
    margin-bottom: 20px;
}
.error {
    color: red;
    margin-top: 0.25rem;
    font-size: 0.875em;
}

</style>