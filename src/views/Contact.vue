<template>
    <main class="container">
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
                        v-model="name"
                        type="text"
                        placeholder="Seu Nome"
                        required
                        autofocus
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="email-label"
                        label="Seu E-mail:"
                        label-for="email"
                    >
                        <b-form-input
                        id="email"
                        v-model="email"
                        type="email"
                        placeholder="Seu e-mail"
                        required
                        ></b-form-input>
                    </b-form-group>


                    <b-form-group
                        id="message-label"
                        label="Sua Mensagem:"
                        label-for="message"
                    >
                        <b-form-textarea
                        id="message"
                        v-model="message"
                        placeholder="Escreva sua mensagem aqui..."
                        required
                        ></b-form-textarea>
                    </b-form-group>

                    <b-button v-if="!loading" type="submit">Enviar Mensagem</b-button>
                    <loading v-else></loading>
                    <div v-if="alert" class="alert alert-success mt-4">
                        {{ alert }}
                    </div>
                </b-form>
            </div>
            
        </div>
    </main>
    
</template>

<script>
import LoadingVue from '../components/Loading.vue';
export default {
    name:'Contact',
    data:function() {
        return {
            name:null,
            email:null,
            message:null,
            loading:false,
            alert:null

        }
    },
    components: {
        'loading':LoadingVue
    },
    methods: {
        onSubmit() {
            // this.loading = true;
            this.alert = 'Mensagem enviada com sucesso!'
            //Aqui manda request pro back-end
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

.form-control {
    margin-bottom: 20px;
}

</style>