<template>
  <div class="bg-gray-200">
    Test Function 1
    <button @click.prevent="manipulate()">clickme</button>
  </div>
</template>

<script>
import warehouseData from "@/_utils/exam-data.json";

export default {
  methods: {
    manipulate() {

      const ineditableProducts = warehouseData.filter((data) => {
        return !data.is_editable_price;
      });

      const productWeight = ineditableProducts.map(({name,products}) => {

        const totalSubWeight = products.reduce((total, subProduct) => {
          return total + subProduct.weight;
        }, 0);

        return {name,weight:totalSubWeight}
      });

      console.log(ineditableProducts, "  ", productWeight);
    },
  },
};
</script>

<style>
</style>