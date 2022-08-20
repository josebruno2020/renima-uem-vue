<template>
    <b-nav id="nav">
        
        <b-navbar toggleable="sm" class="container nav d-flex flex-row justify-content-between align-items-center">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <span class="d-flex align-items-center">
                <img src="../assets/img/uem.png" alt="Uem Logo" class="menu-uem">

                <img src="../assets/img/profurg.png" alt="Profurg Logo" class="menu-img">
            </span>
            <span class="d-flex">
                
           
                <b-collapse id="nav-text-collapse" is-nav>
                    <b-navbar-nav  >
                        <router-link to="/module/list">
                            Ensino Remoto
                        </router-link>
                        <span class="d-flex">
                        </span>
                    </b-navbar-nav>
                </b-collapse>
                </span>
            <span class="d-flex nav-right">
                
                <b-nav-item-dropdown  right class="navbar-text">
                    <template #button-content>
                        <span class="navbar-text">{{ user.name }}</span>
                    </template>
                    <router-link class="nav-link" v-if="user.is_finished" to="/finished">Certificado</router-link>
                    <router-link class="nav-link text-danger" to="/logout" >Sair</router-link>
                </b-nav-item-dropdown>
            </span>
        </b-navbar>
        
    </b-nav>
</template>


<script>
import { getUser } from '../services/utils';

export default {
    name:'Menu',
    props:['active'],
    data() {
        return {
            modules:[],
            moduleActive:null,
            user: {}
        }
    },
    created() {
        this.user = getUser();
    },
    methods: {
    }
}
</script>

<style scoped>
.navbar-brand, .navbar-text, .nav-link {
    color: var(--theme-foreground);
}
a{
    color: var(--theme-foreground);
    margin-right: 20px;
    transition: all 0.3s;
    text-decoration: none;
}
.dropdown-toggle {
    color: var(--theme-foreground);
}

a:hover {
    filter: brightness(50%);
    color: #C4C4C4 !important;
}
.disabled{
    pointer-events: none;
    cursor: not-allowed;
    
}
.nav-right {
    justify-self: flex-end;
}
.router-link-exact-active, .router-link-active {
    color:var(--theme-accent-hover-green) !important;
}

.menu-uem {
    width: 120px;
}

.menu-img {
    width: 100px;
    margin-right: 15px;
}

.img-status {
    margin-left: 10px;
    width: 15px;
    color: red;
}

@media only screen and (max-width: 700px) {

    .menu-uem {
        height: 60px;
    }

    
}  

</style>