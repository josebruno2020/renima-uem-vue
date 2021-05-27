<template>
    <div class="container">
        <div :class="`alert alert-${type}`">
            {{ msg }}
        </div>
    </div>
    
</template>

<script>
export default {
    name:'Alert',
    props: ['msg', 'type']
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}
</style>