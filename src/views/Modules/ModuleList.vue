<template>
  <main class="container">
    <vue-title title="Ensino Remoto"></vue-title>
    <div class="principal">
      <h1>Ensino Remoto - Módulos</h1>
      <div class="modules">

        <div class="card" style="width: 18rem;" v-for="(module) in modules" :key="module.id">
          <img :src="module.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ module.name }}</h5>
            <p class="card-text">{{ module.description }}</p>
            <router-link class="nav-link" :to="`/module/${module.slug}`" >Ir ao módulo</router-link>
          </div>
        </div>
        
      </div>
    </div>
  </main>
</template>

<script>
import VueTitleVue from '../../components/VueTitle.vue';
import http from '../../services/http';
import apiRoutes from '../../services/apiRoutes';
export default {
  name:'ModuleList',
  components: {
    'vue-title': VueTitleVue
  },
  data: () => ({
    modules: []
  }),
  created() {
    this.fetchModules();
  },
  methods: {
    async fetchModules() {
      try {
        const { data } = await http.get(apiRoutes.module);
        this.modules = data;
      } catch(err) {
        console.log(err);
      }
    }
  }
}
</script>

<style scoped>
.principal {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modules {
  margin-top: 2rem;

  display: flex;
  width: 100%;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
}


.card {
  background: rgba(255, 255, 255, .4);
}
</style>