<template>
    <main class="container">
        <vue-title title="Formulário"></vue-title>
        <div class="principal"> 
            <loading v-if="loading"></loading>
            <template v-else-if="!loading && !isSent">
                <h1 class="text-center">Formulário - {{module.name}}</h1>
                <b-form @submit.prevent="onSubmit" class="form mt-5">
                <div class="form-group" v-for="question in questions" :key="question.id">
                    <h4 
                        :class="{incorrectQuestion:incorrectQuestions.indexOf(question.number) > -1}"
                    >
                        Pergunta {{ question.number }}
                    </h4>

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
           
            <template v-else-if="isSent">
                <modal 
                    @emptyModal="emptyModal"
                    @moduleActive="setModuleActive"
                    :title="modal.title" 
                    :msg="modal.msg"
                    :img="modal.img"
                    :type="modal.type"
                ></modal>
            </template>
        </div>
    </main>
</template>

<script>
import LoadingVue from '../../components/Loading.vue'
import ModalQuestionsVue from '../../components/ModalQuestions.vue'
import VueTitle from '../../components/VueTitle.vue'
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
            userAnswers:{},
            alert:null,
            incorrectQuestions:[],
            percent:null,
            isSent:false,
            modal: {
                title:'',
                msg:'',
                type:''
            },
        }
    },
    components: {
        'loading':LoadingVue,
        'modal':ModalQuestionsVue,
        'vue-title':VueTitle
    },
    mounted() {
        this.requestQuestions();
    },
    watch: {
        id:function() {
            this.requestQuestions();
        }
    },
    computed: {
        errorIncorrectQuestion:function(question) {
            let valor = this.incorrectQuestions.indexOf(question.number)
            if(valor == - 1) {
                return false;
            } else {
                return true;
            }
        }
    },
    methods: {
        onSubmit() {
            this.loading = true;
            this.incorrectQuestions = [];
            this.emptyModal();
            http.post(apiRoutes.moduleIndex+`/${this.id}/questions`, {
                answer:this.userAnswers
            })
            .then(res => {
                console.log(res);
                this.loading = false;
                this.incorrectQuestions = res.data.incoorectAnswers;
                this.percent = res.data.percent;
                console.log(this.incorrectQuestions);
                this.isSent = true;
                //Status que retorna quando não foi atingido a porcentagem;
                if(res.status == 206) {
                    this.isSuccess = true;
                    this.modal.type = 'danger';
                    this.modal.title = 'Tente novamente';
                    this.modal.msg = `Você atingiu ${this.percent}% das questões. Tente assistir os vídeos novamente e refazer o questionário.`;
                    //variaveis para modal de erro
                } else {
                    //variaveis para modal de sucesso
                    this.isSuccess = true;
                    this.modal.type = 'success';
                    this.modal.title = 'Parabéns!';
                    this.modal.msg = `Parabéns! Você atingiu ${this.percent}% das respostas!`;
                    
                }

                this.$emit('moduleActive');
               
            })
            .catch(e => {
                console.log(e);
            })
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
        },
        emptyModal() {
            this.isSent = false;
            this.modal.type = '';
            this.modal.title = '';
            this.modal.img = '';
            this.modal.msg = '';
        },
        setModuleActive() {
            return this.$emit('moduleActive');
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
.principal {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.incorrectQuestion {
    color: var(--theme-text-danger);
}

div .modal-content {
    background-color: red !important;
}
</style>