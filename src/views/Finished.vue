<template>
    <main>
        <vue-title title="Parabéns"></vue-title>
        <h1 class="text-center">Parabéns! 🎉</h1>

        <div class="text-center mt-5">
            <p>Agora você pode visualizar seu certificado ou podemos mandar no seu e-mail!</p>
            <p>Obrigado por participar de nosso Projeto!</p>
            
        </div>

        <loading class="mt-5" v-if="loading"></loading>
        <div class="actions mt-5" v-else-if="!loading">
            <a :href="certificateUrl" target="_blank" title="Visualizar certificado">Visualizar certificado</a>
            <b-button @click="sendCertificate" title="Mandar por e-mail">Mandar por e-mail</b-button>
        </div>

        <div v-if="emailSend" class="mt-5">
            <alert :msg="msg" :type="type"></alert>
        </div>
    </main>
</template>

<script>
import AlertVue from '../components/Alert.vue';
import LoadingVue from '../components/Loading.vue';
import VueTitleVue from '../components/VueTitle.vue';
import router from '../router';
import apiRoutes from '../services/apiRoutes';
import http from '../services/http';
import { getUser } from '../services/utils';
import webRoutes from '../services/webRoutes';
export default {
    name:'Finished',
    props: ['id'],
    data: function() {
        return {
            certificateUrl:'',
            userId:null,
            loading:false,
            emailSend:false,
            msg:'',
            type:'success'
        }
    },
    components: {
        'loading':LoadingVue,
        'alert':AlertVue,
        'vue-title':VueTitleVue
    },
    created() {
        this.getUserModule()
        const user = getUser();
        this.userId = user.id;
        console.log(this.userId);
        this.certificateUrl = webRoutes.certificate+this.userId+`?module=${this.id}`;
    },
    methods: {
        getUserModule() {
            http.get(`${apiRoutes.userModule}/${this.id}`)
            .then(res => {
                if (!res.data.is_finished) {
                    router.push(`/module/list`)
                }
            })
            .catch(err => console.log(err))
        },
        sendCertificate() {
            this.emailSend = false;
            this.loading = true;
            http.get(apiRoutes.emailCertificate+`/${this.userId}`)
            .then((res) => {
                this.emailSend = true;
                this.msg = res.data.message;
                this.type = 'success';
            })
            .catch(e => {
                this.emailSend = true;
                this.type = 'danger';
                this.msg = 'Não conseguimos mandar o certificado. Por favor, tente mais tarde.'
                console.log(e)
            })
            .finally(() => {
                this.loading = false;
            })
        }
    }


}
</script>

<style scoped>
.actions {
    display: flex;
    justify-content: space-around;
}
</style>