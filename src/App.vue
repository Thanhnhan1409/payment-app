<template>
  <div class="container" id="app">
    <router-view></router-view>
    <Navigation />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  components: {
    Navigation
  },
 
}
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100% !important;
  min-height: 700px;
  height: 100%;
  border: 2px solid rgb(33, 31, 31);
  border-radius: 12px;
}
</style>
