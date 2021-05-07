<template>
    <main class="container">
        <div class="principal">
            <h1>{{module.name}}</h1>
            <loading v-if="loading"></loading>
            
        </div>
        
    </main>
</template>

<script>
import LoadingVue from '../../components/Loading.vue'
import http from '../../services/http.js';
import apiRoutes from '../../services/apiRoutes';
export default {
    name:'Preparatory',
    data:function() {
        return  {
            module:{},
            questions:[],
            loading:true
        }
    },
    components: {
        'loading':LoadingVue
    },
    mounted() {
        http.get(apiRoutes.modulePreparatory)
        .then((res) => {
            this.loading = false;
            let result = res.data;
            this.module = result.module;
            this.questions = result.questions;
            console.log(res)
        })
        .catch(e => {
            this.loading = false;
            console.log(e);
        })
        
    },
    methods: {
        
    }
}
</script>


<style scoped>
.principal {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>