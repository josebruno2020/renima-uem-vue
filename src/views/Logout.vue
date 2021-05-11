<template>
    <div></div>
</template>
<script>
export default {
    name:'Logout',
    created() {
        this.$emit('logado', false);
        localStorage.removeItem('user-token');
        localStorage.removeItem('user');
        return this.$router.push('/login');
    }
}
</script>