<template>
    <b-nav id="nav">
        <ul class="container nav d-flex flex-row justify-content-between">
            <span class="d-flex">
            <li class="nav-item">
                <router-link class="pr-4"  v-for="module in modules" :key="module.id" :to="`/module/${module.slug}`">
                    {{module.name}}
                </router-link>
            </li>
            </span>
            <span>
                <li class="nav-item">
                    <a class="nav-link" href="#">{{name}}</a>
                    <router-link class="nav-link text-danger" to="/logout" >Sair</router-link>
                </li>
            </span>
        </ul>
        
        
            
                
                   
                        <!-- <a 
                            class="nav-link {{$loggedUser->module_active == $module->id ? 'active' : ''}} {{$loggedUser->module_active != $module->id ? 'cursor-desabled' : ''}}" 
                            aria-current="page" 
                            href="{{route('module.index', [$module->slug])}}"
                            title="{{ $module->name }}"
                            >
                                {{$module->name}}
                            @if($loggedUser->module_active > $module->id)
                            <i class="fas fa-check-circle" style="color:green;"></i>
                            @else
                            <i class="far fa-times-circle" style="color: red"></i>
                            @endif
                        </a>
                    </li>
                  
            </span>
            <span> -->
        
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
.nav li a{
    color: var(--theme-foreground) !important;
    font-weight: bold;

    transition: all 0.5s;
}

.nav li a:hover {
    filter: brightness(50%);
    color: #C4C4C4 !important;
}

.question {
    text-align: justify;
}

.cursor-desabled {
    cursor: not-allowed;
}
</style>