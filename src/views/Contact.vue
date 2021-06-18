<template>
    <main class="container">
        <vue-title title="Fale Conosco"></vue-title>
        <h1 class="text-center">Fale Conosco</h1>
        <p class="text-center mt-3">Está com alguma dúvida? Não deixe de nos mandar uma mensagem! 😉</p>
        <div class="container-fluid mt-3">
            <div class="form">
                <b-form @submit.prevent="onSubmit">
                    <b-form-group
                        id="name-label"
                        label="Seu Nome:"
                        label-for="name"
                    >
                        <b-form-input
                        id="name"
                        name="name"
                        data-vv-as="nome"
                        v-model="contact.name"
                        type="text"
                        placeholder="Seu Nome"
                        v-validate="'required'"
                        :class="{'is-danger':errors.has('name')}"
                        autofocus
                        ></b-form-input>
                        <error-form :error="errors.first('name')"></error-form>
                    </b-form-group>

                    <b-form-group
                        id="email-label"
                        label="Seu E-mail:"
                        label-for="email"
                    >
                        <b-form-input
                        id="email"
                        name="email"
                        data-vv-as="e-mail"
                        v-model="contact.email"
                        type="email"
                        placeholder="Seu e-mail"
                        v-validate="'required|email'"
                        :class="{'is-danger':errors.has('email')}"
                        ></b-form-input>
                        <error-form :error="errors.first('email')"></error-form>
                    </b-form-group>


                    <b-form-group
                        id="message-label"
                        label="Sua Mensagem:"
                        label-for="message"
                    >
                        <b-form-textarea
                        id="message"
                        name="message"
                        data-vv-as="mensagem"
                        v-model="contact.message"
                        placeholder="Escreva sua mensagem aqui..."
                        v-validate="'required|max:300'"
                        :class="{'is-danger':errors.has('message')}"
                        ></b-form-textarea>
                        <error-form :error="errors.first('message')"></error-form>
                    </b-form-group>

                    <b-button v-if="!loading" type="submit">Enviar Mensagem</b-button>
                    <loading v-else></loading>
                    <div v-if="alert != null" class="alert alert-success mt-4">
                        {{ alert }}
                    </div>
                </b-form>
            </div>
            
        </div>
    </main>
    
</template>

<script>
import LoadingVue from '../components/Loading.vue';
import VueTitleVue from '../components/VueTitle.vue';
import apiRoutes from '../services/apiRoutes';
import http from '../services/http';
import Contact from '../models/Contact';
import ErrorForm from '../components/ErrorForm.vue';
export default {
    name:'Contact',
    data:function() {
        return {
            contact: new Contact(),
            loading:false,
            alert:null
        }
    },
    components: {
        'loading':LoadingVue,
        'vue-title':VueTitleVue,
        ErrorForm
    },
    methods: {
        onSubmit() {
            this.$validator.validateAll()
            .then(success => {
                if(success) {
                    this.loading = true;
                    http.post(apiRoutes.mailContact, {
                        name:this.contact.name,
                        email:this.contact.email,
                        message:this.contact.message
                    })
                    .then(() => {
                        this.alert = 'E-mail enviado com sucesso. Responderemos o quanto antes!';
                        this.loading = false;
                    })
                    .catch(e => {
                        console.log(e)
                        this.loading = false;
                        this.alert = 'Não foi possível mandar a mensagem. Tente novamente mais tarde!'
                    })
                }
            })
            
        }
    }
}
</script>

<style scoped>
.container-fluid {
    display: flex;
    justify-content: center;
}

.form {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.form-group {
    margin-bottom: 20px;
}

.is-danger {
    border-color: #dc3545;
}
</style>