<template>
    <div></div>
</template>
<script>
export default {
    name:'Logout',
    created() {
        localStorage.removeItem('user-token');
        localStorage.removeItem('user');
        return this.$router.push('/login');
    }
}
</script>