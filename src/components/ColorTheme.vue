<template>
    <div class="button">
        <toggle-button :value="theme"
                @change="changeTheme"
               color="#82C7EB"
               :labels="{checked: 'Claro', unchecked: 'Escuro'}"/>
    </div>
</template>

<script>
export default {
    name:'ColorTheme',
    data:function() {
        return {
            theme:false,
        }
    },
    created() {
        let theme = localStorage.getItem('theme');
        if(!theme) {
            if (this.isUsingDarkTheme()) {
                this.theme = true;
                this.setTheme('theme-dark')
                localStorage.setItem('theme', 'theme-dark');
            } else {
                this.theme = false;
                document.body.className = '';
                localStorage.setItem('theme', 'blank');
            }
        } else {
            console.log(theme)
            if(theme != 'theme-dark') {
                this.theme = true;
            }
            this.setTheme(theme);
        }
        
        
    },
    methods: {
        changeTheme() {
            let theme = document.body.className;
            localStorage.removeItem('theme');
            if(theme == 'theme-dark') {
                localStorage.setItem('theme', 'blank');
                return document.body.className = '';
            } else {
                localStorage.setItem('theme', 'theme-dark');
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
.button {
    display: flex;
    justify-content: flex-end;
}
</style>