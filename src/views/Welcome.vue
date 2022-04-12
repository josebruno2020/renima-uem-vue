<template>
  <div class="home container">
    <vue-title title="Home"></vue-title>
    <h1 class="text-center mb-3 mt-3">Seja Bem-vindo!</h1>
    <div  class="center mt-3 mb-3">
        <img alt="Emergência" class="img" src="../assets/img/emergency.jpg">
    </div>
    <div class="welcome-text">
        <h4 class="text-center">Projeto Reanima UEM</h4>
        <p>A área de Ensino do Programa do Mestrado Profissional em Gestão, Tecnologia e Inovação em Urgência e Emergência (PROFURG), desenvolveu este site como uma forma de compartilhar conhecimentos que agregam valor aos profissionais e ajudam a impulsionar o desenvolvimento do setor de saúde.</p>
        <p>
        Uma das iniciativas mais recentes é a de fornecer um ensino remoto dentro do Mestrado Profissional em Gestão, Tecnologia e Inovação em Urgência e Emergência (PROFURG), em conjunto com a Universidade Estadual de Maringá fornecendo informações, orientações e vídeo aulas com conteúdo que possam auxiliar ao profissional da saúde como conteúdo de apoio.</p>
    </div>
    

    <div class="center">
        <b-button @click="goToRegister" class="mt4-4" variant="primary">Começar</b-button>

    </div>
    
  </div>
</template>

<script>
import router from '../router/index.js';
import VueTitle from '../components/VueTitle.vue';
export default {
  name: 'Welcome',
  data:function() {
      return {

      }
  },
  components: {
    'vue-title':VueTitle
  },
  methods: {
      goToRegister() {
          return router.push({path:'register'});
      }
  }
}
</script>

<style scoped>
.center {
    display: flex;
    justify-content: center;
}

.img {
    height: 250px;
}
.welcome-text {
  margin-top: 30px;
}
.welcome-text p{
    text-align: justify;
}

@media only screen and (max-width: 700px) {
    .img {
        height: 150px;
    }
    
} 
</style>
