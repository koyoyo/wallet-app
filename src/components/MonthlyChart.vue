<template>
  <div class="monthly-chart">
    <h1 class="has-text-centered is-size-2">October 2017</h1>
    <div class="container">
      <div class="columns">
        <div class="column is-half-desktop">
          <pie-chart :data="this.chartData" :options="this.options"></pie-chart>
        </div>
        <div class="column is-half-desktop">
          <div class="columns is-multiline is-mobile">
            <div class="column item is-half" v-for="item in items" v-bind:key="item.name">
              <div class="">
                <div class="item-header columns is-mobile is-gapless is-vcentered">
                  <div class="column item-icon is-narrow">
                    <b-icon icon="account" type="is-light"></b-icon>
                  </div>
                  <div class="column item-name">{{ item.name }}</div>
                  <div class="column item-percent is-narrow">50%</div>
                </div>
                <div class="item-amount">{{ item.amount }}</div> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sticky-footer">
        Total: 35,000
      </div>
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
<style lang="scss" scoped>
@import '~bulma/sass/utilities/initial-variables';
@import '~bulma/sass/utilities/derived-variables';

h1 {
  margin: 20px 0;
}

.monthly-chart .container {
  padding: 20px;
}
.item {
  padding: 0.25rem;
  > div {background-color: $primary;}
  
  .item-header {
    margin-bottom: 0;
  }

  .item-amount {
    font-size: 1.6rem;
    text-align: center;
    letter-spacing: -1px;
  }

  .item-percent {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px !important;
  }

  .item-icon {
    margin-right: 0.5rem;
    padding: 5px !important;
    background-color: $dark;
  }
}

</style>
