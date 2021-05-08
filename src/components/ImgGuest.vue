<template>
    <div class="img-guest">
        <img class="img" src="../assets/img/doctor-register.png" alt="Doutor">
    </div>
</template>

<script>
export default {
    name:'ImgGuest'
}
</script>

<style scoped>
.img {
    width: 260px;
}

@media only screen and (max-width: 700px) {
    .img {
        width: 180px;
        margin-bottom: 10%;
    }
    
}  
</style>