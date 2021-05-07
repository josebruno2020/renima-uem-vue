<template>
    <nav id="nav">
        <router-link to="/">Welcome</router-link> |
        <router-link to="/register">Register</router-link>
    </nav>
</template>


<script>
export default {
    name:'Menu',
    data:function() {
        return {

        }
    },
    mounted() {
        
    }
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>