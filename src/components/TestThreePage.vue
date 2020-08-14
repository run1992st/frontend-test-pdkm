<template>
  <div class="bg-gray-200">
    Test Function 3
    <button @click="manipulate()">clickme</button>
    <h1>{{result}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: 0,
    };
  },
  methods: {
    manipulate() {
      const testArray = [1];

      //Handle Base Case--------------
      if (!testArray) {
        return null;
      } else if (testArray.length === 1) {
        return this.result = testArray[0];
      }
      // ------------------------------

      
      let firstMax = testArray[0];
      let secondMax = null;

      for (let num of testArray) {
        if (num >= firstMax) {
          secondMax = firstMax;
          firstMax = num;
        } else if (num > secondMax || !secondMax) {
          secondMax = num;
        }
      }

      this.result = secondMax;
    },
  },
};
</script>

<style>
</style>