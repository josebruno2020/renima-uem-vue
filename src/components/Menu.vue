<template>
    <b-nav id="nav">
        
        <b-navbar toggleable="sm" class="container nav d-flex flex-row justify-content-between">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <span class="d-flex">
                <img src="../assets/img/uem.png" alt="" class="menu-img">

                <b-collapse id="nav-text-collapse" is-nav>
                    <b-navbar-nav  >
                        <router-link v-for="module in modules" :key="module.id"   :to="`/module/${module.slug}`">
                            {{module.name}}
                        </router-link>
                    </b-navbar-nav>
                </b-collapse>
                </span>
            <span class="d-flex nav-right">
                <router-link class="nav-link text-danger" to="/logout" >Sair</router-link>
                <router-link class="nav-link" to="/fale-conosco">Fale Conosco</router-link>
                <b-nav-text>{{name}}</b-nav-text>
                
            </span>
        </b-navbar>
        
    </b-nav>
</template>


<script>
import apiRoutes from '../services/apiRoutes';
import http from '../services/http';
export default {
    name:'Menu',
    data:function() {
        return {
            modules:[],
            name:''
        }
    },
    created() {
        let user = JSON.parse(localStorage.getItem('user'));
        this.name = user.name;
        http.get(apiRoutes.menu)
        .then((res) => {
            let result = res.data;
            this.modules = result.modules;
        })
        .catch(e=> {
            console.log(e);
        })
    },
}
</script>

<style scoped>
.navbar-brand, .navbar-text, .nav-link {
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

.question {
    text-align: justify;
}

.cursor-desabled {
    cursor: not-allowed;
}
.nav-right {
    justify-self: flex-end;
}
.router-link-exact-active, .router-link-active {
    color:var(--theme-accent-background);
}

.menu-img {
    width: 100px;
    margin-right: 15px;
}

</style>