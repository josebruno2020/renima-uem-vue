<template>
  <div id="app">
    <div>
      <color-theme></color-theme>
      <menu-inicial v-if="!logado"></menu-inicial>
    </div>
    <router-view @logado="setLogado"/>
  </div>
  
</template>

<script>
import ColorThemeVue from './components/ColorTheme.vue';
import MenuInicialVue from './components/MenuInicial.vue';
export default {
    name:'App',
    data:function() {
        return {
            logado:false
        }
    },
    created() {
        let isLogged = localStorage.getItem('logado');
        if(isLogged == 'true') {
            this.logado = isLogged;
        }
    },
    components: {
        'color-theme': ColorThemeVue,
        'menu-inicial':MenuInicialVue,
    },
    methods: {
        setLogado(val) {
            localStorage.setItem('logado', val);
            return this.logado = val;

        }
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Default Title',
      // all titles will be injected into this template
      titleTemplate: '%s | My Awesome Webapp'
    }
}
</script>

<style>

</style>
