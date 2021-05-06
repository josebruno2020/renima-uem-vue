<template>
    <div>
        <button @click="changeTheme" >Mudar tema do site</button>
    </div>
</template>

<script>
export default {
    name:'ColorTheme',
    data:function() {
        return {
            theme:Boolean,
        }
    },
    mounted() {
        if (this.isUsingDarkTheme()) {
            this.setTheme('theme-dark')
        }
    },
    methods: {
        changeTheme() {
            let theme = document.body.className;
            if(theme == 'theme-dark') {
                return document.body.className = '';
            } else {
                return document.body.className = 'theme-dark';
            }
        },
        isUsingDarkTheme () {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        },
        setTheme (themeName) {
            document.body.className = themeName || ''
        }
    },  
   
}
</script>

<style scoped>

</style>