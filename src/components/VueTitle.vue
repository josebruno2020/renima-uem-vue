<template>
    <title></title>
</template>

<script>
    export default {
        name: 'vue-title',
        props: {
            title: {
                required:false,
                type:String
            }
        },
        computed: {
            separate:function() {
                if(this.title) {
                    return '-';
                } else {
                    return '';
                }

            }
        },
        watch: {
            title: {
                immediate: true,
                handler() {
                    document.title = this.title+` ${this.separate} `+"Reanima UEM";
                }
            }
        },
    }
</script>