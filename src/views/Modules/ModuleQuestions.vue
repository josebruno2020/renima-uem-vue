<template>
    <main class="container">
        <div class="principal"> 
            <loading v-if="loading"></loading>
            <template v-else>
                <h1 class="text-center">Questões do Modulo {{module.name}}</h1>
                <b-form @submit.prevent="onSubmit" class="form mt-5">
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
import apiRoutes from '../../services/apiRoutes'
import http from '../../services/http'
export default {
    name:'ModuleQuestions',
    props:['id'],
    data:function() {
        return {
            loading:true,
            module:{},
            questions:[],
        }
    },
    components: {
        'loading':LoadingVue
    },
    mounted() {
        this.requestQuestions();
    },
    watch: {
        id:function() {
            this.requestQuestions();
        }
    },
    methods: {
        onSubmit() {
            alert('legal!!')
        },
        requestQuestions() {
            http.get(apiRoutes.moduleIndex+`/${this.id}/questions`)
            .then((res) => {
                this.module = res.data.module;
                this.questions = res.data.questions;
                this.loading = false;

            })
            .catch(e => {
                this.loading = false;
                console.log(e)
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
.form {
    width: 100%;
}

.question {
    text-align: justify;
}

.form-submit {
    display: flex;
    justify-content: center;
}
</style>