<template>
    <div>
        <menu-principal :active="moduleActive"></menu-principal>
        <router-view @moduleActive="getModuleActive"></router-view>
    </div>
</template>

<script>
import MenuVue from '../../components/Menu.vue';
import { getUser } from '../../services/utils';
export default {
    name:'Module',
    data:function() {
        return {
            moduleActive:Number
        }
    }, 
    components: {
        'menu-principal':MenuVue
    },
    created() {
        this.getModuleActive();
    },
    mounted() {

    },
    methods: {
        getModuleActive() {
            let user = getUser();
            return this.moduleActive = user.module_active;
        }
    }
}
</script>