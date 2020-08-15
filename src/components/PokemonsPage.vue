<template>
  <div>
    Pokemons Fetching Page
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  async mounted() {
    const pokemonsPromises = [];
    this.loading = true;
    for (let i = 1; i < 10; i++) {
      pokemonsPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }

    let promises = await Promise.all(pokemonsPromises).then((responses) => {
      return responses.map((response) => {
        return response.json();
      });
    });

    let pokemons = await Promise.all(promises);
    this.loading = false;

    console.log(
      pokemons.map((pokemon) => ({
        name: pokemon.name,
        imageSrc: pokemon.sprites.front_default,
      }))
    );
  },
};
</script>

<style>
</style>