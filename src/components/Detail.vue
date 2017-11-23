<template>
  <div class="container">
    <div class="table-wrapper">
      <table class="table is-fullwidth">
        <!-- TODO: Split header/body -->
        <template v-for="(dayRecords, day) in records">
          <daily-detail-header :day="day" :key="day"></daily-detail-header>
          <daily-detail :day-records="dayRecords" :key="day"></daily-detail>
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
    ])
  }
}
</script>

<style lang="scss" scoped>
.table-wrapper {
  margin: 0 80px;
}
</style>
