<template>
    <b-nav id="nav">
        
        <b-navbar toggleable="sm" class="container nav d-flex flex-row justify-content-between">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <span class="d-flex ">
                <img src="../assets/img/uem.png" alt="Uem Logo" class="menu-uem">

                <img src="../assets/img/profurg.png" alt="Profurg Logo" class="menu-img">
            </span>
            <span class="d-flex">
                
           
                <b-collapse id="nav-text-collapse" is-nav>
                    <b-navbar-nav  >
                        <span class="d-flex">
                            <b-nav-item-dropdown class="navbar-text" right v-for="module in modules" :key="module.id"  >
                                <!-- Using 'button-content' slot -->
                                <template #button-content>
                                    <span class="mr-2 navbar-text">{{module.name}}</span>
                                    <span v-if="active > module.id">
                                        <img class="img-status" src="../assets/img/check.png" alt="">
                                    </span>
                                    <span v-else-if="active == module.id">
                                        <img class="img-status" src="../assets/img/active.png" alt="">
                                    </span>
                                    <span v-else>
                                        <img class="img-status" src="../assets/img/error.png" alt="">
                                    </span>
                                </template>
                                <router-link 
                                    v-for="aula in module.class" 
                                    :key="aula.id" 
                                    class="nav-link" 
                                    :class="{disabled:active != module.id}" 
                                    :to="`/class/${aula.id}`"
                                    >
                                        {{aula.name}}
                                    </router-link>
                            </b-nav-item-dropdown>
                        </span>
                    </b-navbar-nav>
                </b-collapse>
                </span>
            <span class="d-flex nav-right">
                
                <b-nav-item-dropdown  right class="navbar-text">
                    <template #button-content>
                        <span class="navbar-text">{{ name }}</span>
                    </template>
                    <router-link class="nav-link" to="/fale-conosco">Fale Conosco</router-link>
                    <router-link class="nav-link text-danger" to="/logout" >Sair</router-link>
                </b-nav-item-dropdown>
            </span>
        </b-navbar>
        
    </b-nav>
</template>


<script>
import apiRoutes from '../services/apiRoutes';
import http from '../services/http';
import { getUser } from '../services/utils';
export default {
    name:'Menu',
    props:['active'],
    data:function() {
        return {
            modules:[],
            name:'',
            moduleActive:null
        }
    },
    created() {
        let user = getUser();
        this.name = user.name;
        this.moduleActive = user.module_active;
        http.get(apiRoutes.menu)
        .then((res) => {
            let result = res.data;
            this.modules = result.modules;
        })
        .catch(e=> {
            console.log(e);
        })
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

.question {
    text-align: justify;
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
    .images {
        display: none !important;
    }
    
}  

</style>