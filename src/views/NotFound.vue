<template>
    <main >
        <h1 class="text-center">Página não encontrada... 😒</h1>
        <button class="btn" @click="goToRegister">Ir ao Cadastro</button>
    </main>
</template>

<script>
import router from '../router/index.js';
export default {
    name:'NotFound',
    methods: {
        goToRegister() {
            return router.push({path: '/register'});
        }
    }
}
</script>


<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>