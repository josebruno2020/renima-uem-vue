<template>
    <b-nav id="nav">
        
        <b-navbar toggleable="sm" class="container nav d-flex flex-row justify-content-between">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <span class="d-flex">
                <b-navbar-brand>Reanima UEM</b-navbar-brand>

                <b-collapse id="nav-text-collapse" is-nav>
                    <b-navbar-nav  >
                        <router-link v-for="module in modules" :key="module.id" class="mr-4"  :to="`/module/${module.slug}`">
                            {{module.name}}
                        </router-link>
                    </b-navbar-nav>
                </b-collapse>
                </span>
            <span class="d-flex nav-right">
                <router-link class="nav-link text-danger" to="/logout" >Sair</router-link>
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
.navbar-brand, .navbar-text {
    color: var(--theme-foreground);
}
a {
    color: var(--theme-foreground);
    margin-right: 20px;
    transition: all 0.3s;
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
</style>