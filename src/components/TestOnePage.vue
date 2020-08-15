<template>
  <div class="bg-gray-200">
    {{this.getProductsTotalWeight(productsArray)}}
  </div>
</template>

<script>
import productsArray from "@/_utils/exam-data.json";
import getProductsTotalWeight from "@/_utils/products-function"

export default {
  data() {
    return {
      productsArray
    }
  },
  methods: {
    getProductsTotalWeight
  },
};
</script>

<style>
</style>