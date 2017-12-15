<template>
  <div class="container">
    <div class="table-wrapper">
      <table class="table is-fullwidth">
        <!-- TODO: Split header/body -->
        <template v-for="day in recordsReverse">
          <daily-detail-header :day="day.day" :key="day.day"></daily-detail-header>
          <daily-detail :day-records="day.records" :key="day.day"></daily-detail>
        </template>
      </table>
    </div>
  </div>  
</template>

<script>
import {mapState} from 'vuex'

import DailyDetail from './DailyDetail'
import DailyDetailHeader from './DailyDetailHeader'

export default {
  name: 'detail',
  components: {
    DailyDetail,
    DailyDetailHeader
  },
  computed: {
    ...mapState([
      'records'
    ]),
    recordsReverse () {
      return Object.keys(this.records).reverse().map(key => {
        return {
          day: key,
          records: this.records[key]
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.table-wrapper {
  margin: 0 80px;
}
</style>
