<template>
    <main class="container">
        <div class="principal">
            <h1>{{module.name}}</h1>
            <loading v-if="loading"></loading>
            <template v-else>
                <b-form @submit.prevent="onSubmit">
                <div class="form-group" v-for="question in questions" :key="question.id">
                    <h4>Pergunta {{ question.number }}</h4>
                    <p class="question">{{ question.question }}</p>
                    <div v-for="answer in question.answers"
                            :key="answer.id">
                        <input 
                            :name="`answer[${question.id}]`"
                            :id="`${question.number}${answer.number}`"
                            type="radio"
                            
                        >
                        <label 
                            :for="`${question.number}${answer.number}`">{{ answer.answer }}</label>
                    </div>
                    
                </div>
                <div class="form-submit mt-5">
                    <b-button v-if="!loading" type="submit">Responder</b-button>
                </div>
                
                </b-form>
            </template>
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
        onSubmit() {
            this.loading = true;
        }
    }
}
</script>


<style scoped>
.principal {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.question {
    text-align: justify;
}

.form-submit {
    display: flex;
    justify-content: center;
}
</style>