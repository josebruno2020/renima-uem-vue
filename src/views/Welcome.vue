<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Seja Bem-vindo!</h1>
    <hr>
    <b-button @click="goToRegister" variant="primary">Começar</b-button>
  </div>
</template>

<script>
import router from '../router/index.js';
export default {
  name: 'Welcome',
  data:function() {
      return {

      }
  },
  components: {
    
  },
  methods: {
      goToRegister() {
          return router.push({path:'register'});
      }
  }
}
</script>

<style scoped>

</style>
