<template>
    <main>
        <loading v-if="loading"></loading>
        <h1 class="text-center">Modulo {{ module.name }}</h1>

        <div class="container-fluid mt-3">

            <div class="d-flex justify-content-center mt-4">  
                <div class="video" v-html="module.video">
                    
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
import apiRoutes from '../../services/apiRoutes'
import http from '../../services/http'
export default {
    name:'ModuleIndex',
    props:['slug'],
    data:function() {
        return {
            loading:true,
            module:{}

        }
    },
    components: {
        'loading':LoadingVue,
    },
    mounted() {
        this.requestModule();
    },
    methods: {
        toQuestions() {
            this.$router.push(`/module/${this.module.id}/questions`);
        },
        requestModule() {
            http.get(apiRoutes.moduleIndex+`/${this.slug}`)
            .then((res) => {
                console.log(res);
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
        slug:function() {
            this.requestModule();
        }
    },
   
    
}
</script>

<style scoped>
.module-video {
    width: 560px !important;
    height: 350px !important;
}


@media only screen and (max-width: 700px) {
    .module-video {
        width: 320px !important;
        height: 250px !important;
    }
    
}  
</style>