<template>
    <p class="error">
        {{error}}
    </p>
</template>

<script>
export default {
    name:'ErrorForm',
    props:['error']
}
</script>

<style scoped>
.error {
    color: red;
    margin-top: 0.25rem;
    font-size: 0.875em;
}
</style>