<template>
    <main class="container">
        <vue-title title="Questionário preparatório"></vue-title>
        <div class="principal">
            <h1>{{quiz.title}}</h1>
            <div class="alert alert-danger" v-if="alert">
                {{alert}}
                <b-button @click="onSubmit">Tentar novamente</b-button>
            </div>
            <loading v-if="loading"></loading>
            <template v-else>
                <b-form @submit.prevent="onSubmit">
                <div class="form-group" v-for="question in questions" :key="question.id">
                    <h4>Pergunta {{ question.number }}</h4>
                    <p class="question">{{ question.question }}</p>
                    <div v-for="answer in question.answers"
                            :key="answer.id" class="answer">
                        <input 
                            :name="`answer[${question.id}]`"
                            :id="`${question.number}${answer.number}`"
                            type="radio"
                            :value="answer.number"
                            v-model="userAnswers[question.id]"
                            required
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
import router from '../../router';
import VueTitle from '../../components/VueTitle.vue';
export default {
    name:'Preparatory',
    props: ['id'],
    data:function() {
        return  {
            module:{},
            questions:[],
            quiz: null,
            loading:true,
            userAnswers:{},
            alert:null
        }
    },
    components: {
        'loading':LoadingVue,
        'vue-title':VueTitle
    },
    created() {
    },
    mounted() {
        http.get(`${apiRoutes.module}/${this.id}/preparatory`)
        .then((res) => {
            let result = res.data;
            this.module = result.module;
            this.quiz = result.quiz;
            this.questions = result.quiz?.questions;

            console.log(res.data);
        })
        .catch(e => {
            console.log(e);
        })
        .finally(() => {
            this.loading = false;
        })
        
    },
    methods: {
        onSubmit() {
            this.alert = null;
            this.loading = true;
            http.post(`${apiRoutes.module}/${this.id}/preparatory`, {
                answer: this.userAnswers,
                module_id: this.module.id
            })
            .then(() => {
                router.push(`/module/${this.module.slug}`)
            })
            .catch(() => {
                this.alert = 'Não foi possível responder o formulário. Tente novamente mais tarde!';
            })
            
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
.form-group {
    margin-top:15px;
}

.form-submit {
    display: flex;
    justify-content: center;
}
.answer {
    margin-bottom: 1%;
}
.answer label {
    padding-left: 2%;
}
</style>