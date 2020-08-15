<template>
  <div class="bg-gray-200">
    <h1>{{result}}</h1>
  </div>
</template>

<script>
import findSecondLargest from "@/_utils/array-function";
export default {
  data() {
    return {
      result: null,
    };
  },
  mounted() {
    let testArray = [1, 2, 3, 4, 5, 6];
    this.result = findSecondLargest(testArray);
  },
};
</script>

<style>
</style>