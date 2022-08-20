<template>
    <main>
        <vue-title :title="title"></vue-title>
        <loading v-if="loading"></loading>
        <h1 class="text-center">{{ module.name }}</h1>

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
import VueTitle from '../../components/VueTitle.vue'
import apiRoutes from '../../services/apiRoutes'
import http from '../../services/http'
import router from '../../router'
export default {
    name:'ModuleIndex',
    props:['slug'],
    data:function() {
        return {
            loading:true,
            module:{},
            title:''

        }
    },
    components: {
        'loading':LoadingVue,
        'vue-title':VueTitle
    },
    async created() {
        await this.requestModule();
        this.userModule();
        
    },
    methods: {
        toQuestions() {
            this.$router.push(`/module/${this.module.id}/questions`);
        },
        userModule() {
            http.post(apiRoutes.userModule, {
                slug: this.slug
            })
            .then((res) => {
                if (!res.data.is_preparatory_done) {
                    return router.push(`/module/${this.module.id}/preparatory`)
                }

                if (res.data.is_finished) {
                    return router.push(`/module/finished/${this.module.id}`)
                }
            })
            .catch(err => console.log(err))
            .finally(() => this.loading = false);
        },
        requestModule() {
            http.get(apiRoutes.module+`/${this.slug}`)
            .then((res) => {
                this.module = res.data.module;
                this.title = this.module.name;
            })
            .catch(e => {
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