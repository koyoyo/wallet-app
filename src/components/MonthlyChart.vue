<template>
  <div class="monthly-chart">
    <h1>October 2017</h1>
    <div class="container">
      <pie-chart :data="this.chartData" :options="this.options"></pie-chart>
    </div>
    <div class="container">
      <ul v-for="item in items" v-bind:key="item.name">
        <li class="item">
          <div class="item-header">
            50%<br />{{ item.name }}
          </div>
          <div class="item-amount">{{ item.amount }}</div> 
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PieChart from './PieChart'

export default {
  name: 'MonthlyChart',
  components: {
    PieChart
  },
  data () {
    return {
      items: [
        {
          'name': 'Food',
          'amount': 1000
        },
        {
          'name': 'Drink',
          'amount': 10000
        },
        {
          'name': 'Transport',
          'amount': 30000
        },
        {
          'name': 'Other',
          'amount': 5000
        }
      ],
      options: {
        legend: null
      }
    }
  },
  computed: {
    chartData: function () {
      let labels = []
      let amounts = []
      this.items.forEach(function (item) {
        labels.push(item.name)
        amounts.push(item.amount)
      })

      return {
        labels: labels,
        datasets: [
          {
            label: 'Data One',
            backgroundColor: [
              '#f87979',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 46, 86, 0.2)',
              'rgba(255, 66, 106, 0.2)'
            ],
            data: amounts
          }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.monthly-chart .container {
  padding: 20px;
}
.item {
  float: left;
  margin-right: 5px;
}

.item-amount {
  text-align: center;
}
</style>
