<template>
  <div class="flex flex-col items-center py-16 text-lg tracking-wide bg-gray-100">
    <div class="mt-4 max-w-lg w-full flex justify-between">
      <h1 class="self-start">Array</h1>
      <h1 class="w-64">Result(Second Largest)</h1>
    </div>

   <div class="mt-4 max-w-lg w-full flex justify-between" v-for="result of results" :key="result.array">
      <h1 class="self-start">{{result.originalArray}}</h1>
      <h1 class="w-64">{{result.secondLargest}}</h1>
    </div>
    
  </div>
</template>

<script>
import findSecondLargest from "@/_utils/array-function";
export default {
  data() {
    return {
      results: null,
    };
  },
  mounted() {
    let testArrays = [
      [],
      [1],
      [1, 2, 3],
      [1, 1],
      [1, 2, 3, 4, 5, 6],
      [1, 5, 3, 2, 5, 10],
      [100, 5, 3, 2, 99],
      [35, 5, 3, 2, 5, 100],
      [1, 5, 101, 2, 5, 10],
      [10, 10, 9],
    ];

    this.results = testArrays.map((testArray) => {
      return {
        originalArray: testArray,
        secondLargest: findSecondLargest(testArray),
      };
    });


  },
};
</script>

<style>
</style>
