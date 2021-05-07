<template>
    <div>
        <menu-principal></menu-principal>
        <router-view></router-view>
    </div>
</template>

<script>
import MenuVue from '../../components/Menu.vue';
export default {
    name:'Module',
    components: {
        'menu-principal':MenuVue
    },
    mounted() {

    }
}
</script>