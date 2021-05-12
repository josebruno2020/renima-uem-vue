<template>
    <main class="container">
        <div class="principal">
            <h1>{{module.name}}</h1>
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
import { getUser, setModuleActive } from '../../services/utils';
export default {
    name:'Preparatory',
    data:function() {
        return  {
            module:{},
            questions:[],
            loading:true,
            userAnswers:{},
            alert:null
        }
    },
    components: {
        'loading':LoadingVue
    },
    created() {
        let user = getUser();
        if(user.module_active != 1) {
            http.get(apiRoutes.moduleShow+`/${user.module_active}`)
            .then((res) => {
                let slug = res.data.module.slug
                return router.push(`/module/${slug}`)
            }) 
            .catch(e => {
                console.log(e);
            })
        }
    },
    mounted() {
        http.get(apiRoutes.modulePreparatory)
        .then((res) => {
            this.loading = false;
            let result = res.data;
            this.module = result.module;
            this.questions = result.questions;
        })
        .catch(e => {
            this.loading = false;
            console.log(e);
        })
        
    },
    methods: {
        onSubmit() {
            this.alert = null;
            this.loading = true;
            http.post(apiRoutes.modulePreparatory, {
                answer: this.userAnswers
            })
            .then(res => {
                let moduleActive = res.data.module_active;
                setModuleActive(moduleActive);
                this.$emit('moduleActive');
                let slug = res.data.slug;
                router.push(`/module/${slug}`)
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