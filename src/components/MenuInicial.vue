<template>
    <b-nav id="nav">
        <ul class="container nav d-flex flex-row justify-content-between">
            <span class="d-flex">
                <img src="../assets/img/uem.png" alt="" class="menu-img">
            </span>
            <span class="d-flex">
                <li class="nav-item">
                    <router-link to="/">
                        Página Incial 
                    </router-link>
                    <router-link to="/register">
                        Cadastro
                    </router-link>
                    <router-link class="pr-4" to="/fale-conosco">
                        Fale Conosco 
                    </router-link> 
                    <router-link to="/termos">
                        Termos de Uso
                    </router-link>
                </li>
            </span>
            
        </ul>
        
    </b-nav>
</template>

<script>
export default {
    name:'MenuInicial'
}
</script>

<style scoped>
.navbar-brand, .navbar-text {
    color: var(--theme-foreground);
}
a {
    color: var(--theme-foreground);
    margin-right: 20px;
    transition: all 0.3s;
    text-decoration: none;
}
a:hover {
    filter: brightness(50%);
    color: #C4C4C4 !important;
}
.menu-img {
    width: 100px;
}

.router-link-exact-active {
    color:var(--theme-accent-hover-green);
}


</style>