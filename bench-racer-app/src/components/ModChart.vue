<template>
  <div class="chart-container">
    <h5 class="chart-title">Mod Cost Breakdown:</h5>
    <pie
      :options="options"
      :chart-data="chartData" 
      />
  </div>  
</template>

<script>
import Pie from '@/../chart.js'
export default {
  name:"mod-chart",
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
          data: [36,63,1]
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
  .chart-container {
    background-color: rgba(0,0,0, 0.7);
    padding: 1em;
    max-height: 450px;
    width: auto;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #pie-chart{
    max-height: 390px;
    max-width: 390px;
  }
  .chart-title{
    color: white;
    text-align: center;
  }
</style>
