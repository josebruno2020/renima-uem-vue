<template>
  <div id="app">
    <div>
      <color-theme></color-theme>
      <menu-inicial></menu-inicial>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ColorThemeVue from './components/ColorTheme.vue';
import MenuInicialVue from './components/MenuInicial.vue';
export default {
    name:'App',
    components: {
        'color-theme': ColorThemeVue,
        'menu-inicial':MenuInicialVue
    }
}
</script>

<style>

</style>
