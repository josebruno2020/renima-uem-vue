<template>
  <div id="app">
    <div>
      <color-theme></color-theme>
      <menu-principal></menu-principal>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ColorThemeVue from './components/ColorTheme.vue';
import MenuVue from './components/Menu.vue';
export default {
    name:'App',
    components: {
        'color-theme': ColorThemeVue,
        'menu-principal':MenuVue
    }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


</style>
