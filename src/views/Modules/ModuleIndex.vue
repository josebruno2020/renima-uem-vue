<template>
    <main>
        <loading v-if="loading"></loading>
        <h1 class="text-center">Modulo {{ module.name }}</h1>

        <div class="container-fluid mt-3">
            <p>Aulas do Módulo: </p>
            <div>  
                <div  class="aulas">
                    <router-link v-for="aula in module.class" :key="aula.id" class="aula" :to="`/class/${aula.id}`">
                        {{aula.name}}
                    </router-link> 
                </div>
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
.aulas {
    display: flex;
    flex-direction: column;
   
} 
.aula {
    margin-bottom: 20px;
}
</style>