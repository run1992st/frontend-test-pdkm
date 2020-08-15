<template>
  <div id="app">
    <div class="shadow-md py-4">
      <h1 class="text-6xl  font-black">FRONTEND TEST</h1>
      <router-link
        class="mx-8 w-32 h-8 text-2xl"
        v-for="route in routes"
        :key="route.description"
        :to="route.path"
      >
        <button
          class="p-2 font-extrabold tracking-widest text-gray-900 hover:text-red-300"
        >{{route.description}}</button>
      </router-link>
    </div>
    <router-view class="py-8" />
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
