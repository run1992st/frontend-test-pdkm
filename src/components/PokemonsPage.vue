<template>
  <div>
    <div v-if="loading" class="lg:px-40 xl:px-64 flex flex-wrap">
      <PokemonPageCard v-for="n in 104" :key="n" :skeleton="true" />
    </div>
    <div v-if="!loading" class="lg:px-40 xl:px-64 flex flex-wrap" name="fade" tag="div">
      <PokemonPageCard
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :imageSrc="pokemon.imageSrc"
        :name="pokemon.name|capitalize"
      />
    </div>
  </div>
</template>

<script>
import PokemonPageCard from "./PokemonPageCard";

export default {
  components: {
    PokemonPageCard,
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  data() {
    return {
      pokemons: [],
      loading: true,
    };
  },
  async mounted() {
    setTimeout(async () => {
      const pokemonsPromises = [];
      this.loading = true;
      for (let i = 1; i <= 104; i++) {
        pokemonsPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
      }

      let promises = await Promise.all(pokemonsPromises).then((responses) => {
        return responses.map((response) => {
          return response.json();
        });
      });

      let pokemons = await Promise.all(promises);

      this.pokemons = pokemons.map((pokemon) => ({
        name: pokemon.name,
        imageSrc: pokemon.sprites.front_default,
      }));
      this.loading = false;
    }, 1000);
  },
};
</script>

<style scoped>
fade-enter-active,
fade-leave-active {
  transition: all 1s;
}
fade-enter,
fade-leave-to {
  opacity: 0;
}
</style>