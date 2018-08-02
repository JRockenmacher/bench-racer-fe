<template>
  <div>
    <pie 
      :options="options"
      :chart-data="chartData" 
      />
  </div>  
</template>

<script>
import { Pie } from 'vue-chartsjs'
export default {
  components: {
    Pie
  },
  props: {
    chassis: {
      type: Number,
      default: 0
    },
    powertrain: {
      type: Number,
      default: 0
    },
    misc: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      options: {
        legend: {
          labels: {
            fontColor: "white",
          }
        }
        
      },
      chartData: {
        labels: ['Chassis', 'Powertrain', 'Misc.'],
        datasets: [
        {
          label: 'Data One',
          backgroundColor: ['red', 'green', 'grey'],
          data: [8,4,1]
        }
        ],
      }
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
