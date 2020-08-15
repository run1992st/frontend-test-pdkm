<template>
  <div class="py-16 text-base text-gray-800 bg-gray-100">
    <h1>
      <span class="font-bold">First Case</span> : product.proucts[].weight is total weight of subproducts
    </h1>
    <h3 class="mt-4">Result Object :</h3>
    <p class="mt-1">{{this.productsTotalWeight(productsArray)}}</p>
    <hr class="mt-8" />
    <br />
    <h1 class="mt-8">
      <span class="font-bold">Second Case</span> : product.proucts[].weight is weight per unit of subproducts.(Have to multiply by amount first)
    </h1>
    <h3 class="mt-4">Result Object :</h3>
    <p class="mt-1">{{this.productsSubTotalWeight(productsArray)}}</p>
  </div>
</template>

<script>
import productsArray from "@/_utils/exam-data.json";
import {
  productsTotalWeight,
  productsSubTotalWeight,
} from "@/_utils/products-function";

export default {
  data() {
    return {
      productsArray,
    };
  },
  methods: {
    productsTotalWeight,
    productsSubTotalWeight,
  },
};
</script>

<style>
</style>