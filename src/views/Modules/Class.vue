<template>
    <main>
        <vue-title :title="title"></vue-title>
        <menu-principal :active="module.id"></menu-principal>
        <loading v-if="loading"></loading>
        <h1 class="text-center">{{module.name}}</h1>
        <div class="container-fluid mt-3">
            <h3 class="text-center">{{classUser.name}}</h3>
            <div class="d-flex justify-content-center mt-4">  
                <div class="video" v-html="classUser.video"></div>
            </div>

            <div class="form-group d-flex justify-content-center mt-5">
                <router-link v-if="nextClass" :to="`/class/${nextClass.id}`">Próxima aula >></router-link>
                <b-button v-if="classUser.number === totalClasses" @click="toQuestions"  class="btn" title="Responder Formulário">Responder formulário</b-button> 
            </div>
        </div>
    </main>
</template>

<script>
import LoadingVue from '../../components/Loading.vue'
import MenuVue from '../../components/Menu.vue'
import VueTitle from '../../components/VueTitle.vue'
import router from '../../router'
import apiRoutes from '../../services/apiRoutes'
import http from '../../services/http'
import { getUser } from '../../services/utils'
export default {
    name:'Class',
    props:['id'],
    data:function() {
        return {
            loading:true,
            classUser:{},
            module:{},
            title:'',
            totalClasses: 0,
            nextClass: null

        }
    },
    components: {
        'loading':LoadingVue,
        'menu-principal':MenuVue,
        'vue-title':VueTitle
    },
    mounted() {
        this.requestClass();
    },
    methods: {
        toQuestions() {
            this.$router.push(`/module/${this.module.id}/questions`);
        },
        requestClass() {
            let user = getUser();
            http.get(apiRoutes.class+`/${this.id}`)
            .then((res) => {
                this.classUser = res.data.class;
                this.title = this.classUser.name;
                this.module = res.data.module;
                this.totalClasses = res.data.total;
                this.nextClass = res.data.next;
                if(user.module_active != this.module.id) {
                    http.get(apiRoutes.moduleShow+`/${user.module_active}`)
                    .then(res => {
                        let slug = res.data.module.slug;
                        return router.push(`/module/${slug}`)
                    })
                    .catch(e => {
                        console.log(e)
                    })
                    
                }
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
.video :first-child {
    width: 560px;
    height: 350px;
}


@media only screen and (max-width: 700px) {
    .video :first-child {
        width: 320px !important;
        height: 250px !important;
    }
    
}  
</style>