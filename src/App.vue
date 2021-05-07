<template>
  <div id="app">
    <div>
      <color-theme></color-theme>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ColorThemeVue from './components/ColorTheme.vue';
export default {
    name:'App',
    components: {
        'color-theme': ColorThemeVue
    }
}
</script>

<style>

</style>
