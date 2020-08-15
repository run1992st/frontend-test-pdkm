<template>
  <div class="flex flex-col items-center  py-16 text-md tracking-wide bg-gray-100">
    <div class="mt-4 max-w-lg w-full flex justify-between" v-for="format of formats" :key="format.desc">
      <h1 class="self-start">{{format.desc}}</h1>
      <h1 class="w-64">{{format.formatted}}</h1>
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