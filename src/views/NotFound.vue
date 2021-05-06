<template>
    <div>
        <h1>Página não encontrada... 😒</h1>
        <button class="btn" @click="goToRegister">Ir ao Cadastro</button>
    </div>
</template>

<script>
import router from '../router/index.js';
export default {
    name:'NotFound',
    methods: {
        goToRegister() {
            return router.push({path: 'register'});
        }
    }
}
</script>