<template>
    <b-nav id="nav" >
        <b-navbar toggleable="sm" class="container nav d-flex flex-row justify-content-between align-items-center">
            <span class="d-flex justify-content-between align-items-center">
                    <img src="../assets/img/uem.png" alt="" class="menu-uem">
                    <img src="../assets/img/profurg.png" alt="Profurg Logo" class="menu-img">
            </span>
            <ul class="">
                <b-navbar-toggle target="nav-text-collapse" class="mb-4"></b-navbar-toggle>
                
                <span class="d-flex justify-content-center">
                    <b-collapse id="nav-text-collapse" is-nav>
                        <b-navbar-nav  >
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
                        </b-navbar-nav>
                    </b-collapse>
                </span>
                
            </ul>
        </b-navbar>
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
.menu-uem {
    width: 120px;
}
.menu-img {
    width: 100px;
}

.router-link-exact-active {
    color:var(--theme-accent-hover-green);
}

@media only screen and (max-width: 700px) {
    .menu-uem {
        height: 60px;
    }
}
</style>