<template>
  <div class="py-16 text-lg bg-gray-100">
    <h3>Result Object : </h3>
    <p class="mt-4">{{this.getProductsTotalWeight(productsArray)}}</p>
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