<template>
  <div>
    <div class="px-24 grid grid-cols-6" >
      <div class="" v-for="pokemon in pokemons" :key="pokemon.name">
        <img class=" " :src="pokemon.imageSrc" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemons: [],
      loading: false,
    };
  },
  async mounted() {
    const pokemonsPromises = [];
    this.loading = true;
    for (let i = 1; i < 104; i++) {
      pokemonsPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }

    let promises = await Promise.all(pokemonsPromises).then((responses) => {
      return responses.map((response) => {
        return response.json();
      });
    });

    let pokemons = await Promise.all(promises);
    this.loading = false;

    this.pokemons = pokemons.map((pokemon) => ({
      name: pokemon.name,
      imageSrc: pokemon.sprites.front_default,
    }));
  },
};
</script>

<style>
</style>