<template>
  <div id="app">
    <router-link v-for="route in routes" :key="route.description" :to="route.path">
      {{route.description}}
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      routes:[{description:"Home",path:"/"},
      {description:"Pokemons",path:"/pokemons"},
      {description:"Test1",path:"/test1"},
      {description:"Test2",path:"/test2"},
      {description:"Test3",path:"/test3"},
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
