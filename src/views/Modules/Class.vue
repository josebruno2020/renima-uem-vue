<template>
    <main>
        <menu-principal></menu-principal>
        <loading v-if="loading"></loading>
        <h1 class="text-center">{{module.name}}</h1>
        <div class="container-fluid mt-3">
            <h3 class="text-center">{{classUser.name}}</h3>
            <div class="d-flex justify-content-center mt-4">  
                <div class="video" v-html="classUser.video">
                    {{classUser.video}}
                </div>
            </div>

            <div class="form-group d-flex justify-content-center mt-5">
                
                <b-button @click="toQuestions"  class="btn" title="Responder Formulário">Responder formulário</b-button> 
            </div>
        </div>
    </main>
</template>

<script>
import LoadingVue from '../../components/Loading.vue'
import MenuVue from '../../components/Menu.vue'
import apiRoutes from '../../services/apiRoutes'
import http from '../../services/http'
export default {
    name:'ModuleIndex',
    props:['id'],
    data:function() {
        return {
            loading:true,
            classUser:{},
            module:{}

        }
    },
    components: {
        'loading':LoadingVue,
        'menu-principal':MenuVue
    },
    mounted() {
        this.requestClass();
    },
    methods: {
        toQuestions() {
            this.$router.push(`/module/${this.module.id}/questions`);
        },
        requestClass() {
            http.get(apiRoutes.class+`/${this.id}`)
            .then((res) => {
                console.log(res);
                this.classUser = res.data.class;
                this.module = res.data.module;
                this.loading = false;
            })
            .catch(e => {
                this.loading = false;
                console.log(e)
            })
        }
    },
    watch: {
        id:function() {
            this.requestClass();
        }
    },
   
    
}
</script>

<style scoped>
.module_video {
    width: 560px !important;
    height: 350px !important;
}


@media only screen and (max-width: 700px) {
    .module_video {
        width: 320px !important;
        height: 250px !important;
    }
    
}  
</style>