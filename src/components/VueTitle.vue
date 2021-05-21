<script>
    export default {
        name: 'vue-title',
        props: {
            title:''
        },
        computed: {
            separate:function() {
                if(this.title != '') {
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
        render () {
        },
    }
</script>