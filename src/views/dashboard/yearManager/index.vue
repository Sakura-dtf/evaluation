<template>
  <div style="padding: 32px; background: #f0f2f5">
    <crad />
    <list />
  </div>
</template>

<script>
import crad from './components/card.vue'
// import LineChart from './components/LineChart'
// import RaddarChart from './components/RaddarChart'
// import PieChart from './components/PieChart'
// import BarChart from './components/BarChart'
import List from './components/list'

export default {
  components: {
    crad,
    // RaddarChart,
    // PieChart,
    // BarChart,
    List
  }
}
</script>

<style>
.chart-wrapper {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
