<template>
    <div id="app">
        <Header/>
        <router-view />
    </div>
</template>

<script>
// import $ from 'jquery'
import Header from './components/Header.vue'

export default {
    name: 'App',
    components: {
        Header,
    },
    mounted () {
      
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Patua+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
#app {
    font-family: 'Noto Sans';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #F5F6F8;
    word-break: break-word;
}
</style>
