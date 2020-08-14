<template>
  <div class="bg-gray-200">
      Test Function 2
      <button @click.prevent = "manipulate()">Clickme</button>
  </div>
</template>

<script>
import CustomDate from "../_utils/CustomDate"
export default {
  methods: {
    manipulate(){

      const testDateString = "2020-08-10T14:54:52+07:00"

      let date = new CustomDate(testDateString) 

      console.log("DD/MM/YYYY HH:MM : ",date.dateMonthYear)
      console.log("Thai Calendar : ",date.thaiFormat)
      console.log("Number of Date in the month : ",date.maxMonthDate)
      console.log("Quarter : ",date.quarter)
      console.log("Unix timestamp : ",date.getTime())
    }
  },
    
}
</script>

<style>

</style>