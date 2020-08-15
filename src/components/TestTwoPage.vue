<template>
  <div class="bg-gray-200">
    <div class="flex items-center justify-center" v-for="format of formats" :key="format.desc">
      <h1>{{format.desc}}</h1>
      <p>{{format.formatted}}</p>
    </div>
  </div>
</template>

<script>
import CustomDate from "../_utils/CustomDate";
export default {
  data() {
    return {
      testDateString: "2020-08-10T14:54:52+07:00",
      date: null,
      formats: [],
    };
  },
  mounted() {
    this.date = new CustomDate(this.testDateString);
    this.formats = [
      { desc: "DD/MM/YYYY HH:MM : ", formatted: this.date.dateMonthYear },
      { desc: "Thai Calendar : ", formatted: this.date.thaiFormat },
      {
        desc: "Number of Date in the month : ",
        formatted: this.date.maxMonthDate,
      },
      { desc: "Quarter : ", formatted: this.date.quarter },
      { desc: "Unix timestamp : ", formatted: this.date.getTime() },
    ];
  },
};
</script>

<style>
</style>