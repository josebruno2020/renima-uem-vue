<template>
    <div>

        <h1 class="text-center">{{title}}</h1>

        <div class="mt-4 d-flex justify-content-center mb-4">
            <img v-if="type == 'success'" src="../assets/img/doctorsuccess.png" class="modal-img" alt="">
            <img v-else src="../assets/img/doctorwelcome.png" class="modal-img" alt="">

        </div>

        <div :class="`alert alert-${type}`">
            {{msg}}
        </div>
        <div class="d-flex justify-content-center mt-4">
            <b-button v-if="type == 'success'" @click="toNextModule">Próximo Módulo</b-button>
            <b-button v-else @click="backToQuestions">Voltar ao questinário</b-button>
        </div>
        
    </div>
    
</template>


<script>
import router from '../router';
import apiRoutes from '../services/apiRoutes';
import http from '../services/http';
import { setModuleActive, setUserFinished } from '../services/utils';
export default {
    name:'modal',
    props: ['title', 'type', 'msg'],
    methods: {
        toNextModule() {
            http.get(apiRoutes.updateModuleActive)
            .then(res => {
                let moduleActive = res.data.module_active;
                setModuleActive(moduleActive)
                this.$emit('moduleActive');
                //Concluiu os modulos
                if(res.data.is_finished == true) {
                    setUserFinished();
                    return router.push('/finished');
                }
                this.searchModule(moduleActive);
                })
            .catch(e => {
                console.log(e)
            })
        },
        backToQuestions() {
            return this.$emit('emptyModal');
        },
        searchModule(moduleActive) {
             http.get(apiRoutes.moduleShow+`/${moduleActive}`)
            .then((res) => {
                let slug = res.data.module.slug
                return router.push(`/module/${slug}`)
            }) 
            .catch(e => {
                console.log(e);
            })
        }
    }
    
}

</script>

<style scoped>
.modal-img {
    width: 150px;
}


</style>