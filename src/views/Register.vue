<template>
    <main class="d-flex flex-wrap mt-5">
        <vue-title title="Cadastro"></vue-title>
        <section class="middle d-flex justify-content-center">
            <img-guest></img-guest>
        </section>
        <article class="middle  d-flex flex-column justify-content-center">
            <h1 class="text-center">Faça o seu cadastro e participe!</h1>
           <error-form v-if="msg" :error="msg"></error-form>
            <b-form @submit.prevent="register">
                <div class="group">
                    <b-form-group
                        id="input-group-1"
                        label="Seu Nome"
                        label-for="name"
                    >
                        <b-form-input
                        id="name"
                        name="name"
                        data-vv-as="nome"
                        v-model="user.name"
                        type="text"
                        placeholder="Seu nome"
                        autofocus
                        v-validate="'required'"
                        :class="{'is-danger':errors.has('name')}"
                        @focus="msg = ''"
                        ></b-form-input>
                        <error-form :error="errors.first('name')"></error-form>
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
                        name="phone"
                        v-model="user.phone"
                        :class="{'is-danger':errors.has('phone')}"
                        class="form-control"
                        type="text"
                        :mask="['(##) #####-####']"
                        placeholder="(99) 99999-9999"
                        v-validate="'required'"
                        data-vv-as="telefone"
                        ></the-mask>
                        <error-form :error="errors.first('phone')"></error-form>
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
                        name="email"
                        data-vv-as="e-mail"
                        v-model="user.email"
                        :class="{'is-danger':errors.has('email')}"
                        type="text"
                        placeholder="Seu e-mail"
                        v-validate="'required|email|min:3'"
                        ></b-input>
                        <error-form :error="errors.first('email')"></error-form>
                    </b-form-group>
                </div>
                
                <div class="group">
                    <b-form-group
                        id="input-group-2"
                        label="Sua Senha"
                        label-for="password"
                    >
                        <b-form-input
                        :class="{'is-danger':errors.has('password')}"
                        id="password"
                        name="password"
                        data-vv-as="senha"
                        v-model="user.password"
                        type="password"
                        placeholder="***"
                        v-validate="'required|min:4'"
                        ref="password"
                        ></b-form-input>
                        <error-form :error="errors.first('password')"></error-form>
                    </b-form-group>
                </div>

                <div class="group">
                
                    <b-form-group
                        id="input-group-2"
                        label="Confirme sua senha"
                        label-for="passwordConfirm"
                    >
                        <b-form-input
                        :class="{'is-danger':errors.has('passwordConfirm')}"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        data-vv-as="confirmação de senha"
                        v-model="user.passwordConfirm"
                        type="password"
                        placeholder="***"
                        v-validate="'confirmed:password'"
                        ></b-form-input>
                        <error-form :error="errors.first('passwordConfirm')"></error-form>
                    </b-form-group>
                </div>
                <input 
                    type="checkbox" 
                    id="use" 
                    v-model="use"
                    name="use"
                    data-vv-as="Termos de Uso"
                    v-validate="'required'"
                >
            
                <label class="pl-3" for="use">Li e aceito os <router-link to="/termos"> Termos de Uso</router-link></label>
                <error-form :error="errors.first('use')"></error-form>
                <p class="mt-2">Já tem cadastro? Faça o<router-link to="/login"> login</router-link></p>
                
                <b-button v-if="!loading"  type="submit">Fazer cadastro</b-button>
            
                <loading v-else></loading>
            
                
            </b-form>
        </article>

    </main>
</template>

<script>
import ImgGuestVue from '../components/ImgGuest.vue'
import {TheMask} from 'vue-the-mask';
import LoadingVue from '../components/Loading.vue';
import ErrorFormVue from '../components/ErrorForm.vue';
import apiRoutes from '../services/apiRoutes';
import http from '../services/http';
import { fillUser } from '../services/utils';
import router from '../router/index';
import VueTitleVue from '../components/VueTitle.vue';
import Register from '../models/Register';

export default {
    name:'Register',
    data:function() {
        return {
            user: new Register(),
            use:false,
            loading:false,
            msg:''
        }
    },
    components: {
        'img-guest':ImgGuestVue,
        'the-mask':TheMask,
        'loading':LoadingVue,
        'error-form':ErrorFormVue,
        'vue-title':VueTitleVue
    },
    methods: {
        register() {
            this.$validator.validateAll()
            .then(success => {
                if(success) {
                    this.loading = true;
                        http.post(apiRoutes.register, {
                            name:this.user.name,
                            email:this.user.email,
                            phone:this.user.phone,
                            password:this.user.password
                        })
                        .then((res) => {
                            this.$emit('logado', true);
                            let user = JSON.stringify(res.data.user);
                            let token = res.data.token;
                            fillUser(user, token);
                            this.loading = false;
                            return router.push({name:'Preparatory'});
                        })
                        .catch(({response})=> {
                            this.loading = false;

                            if (response.status === 422) {
                              return this.msg = 'E-mail já está em uso.';
                            }

                            return this.msg = 'Não foi possível processar sua informação. Tente novamente mais tarde.';
                            
                        })
                }
            })
            
        }
    },
}
</script>

<style scoped>
.middle {
  width: 50vw;
  padding: 0 8%;
}

.group {
    margin-bottom: 20px;
}

.is-danger {
    border-color: #dc3545;
}

@media only screen and (max-width: 700px) {
  .middle {
    width: 100vw;
  }

}



</style>