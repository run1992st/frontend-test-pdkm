<template>
  <div id="app">
    <router-link class="mx-8 w-32 h-8 text-2xl" v-for="route in routes" :key="route.description" :to="route.path">
      <button class="p-2 font-extrabold tracking-widest text-gray-900 hover:text-red-300">{{route.description}}</button>
    </router-link>
    <router-view class="mt-8"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      routes: [
        { description: "Home", path: "/" },
        { description: "Pokemons", path: "/pokemons" },
        { description: "Test1", path: "/test1" },
        { description: "Test2", path: "/test2" },
        { description: "Test3", path: "/test3" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
router-link {
  text-decoration: none;
}
</style>
