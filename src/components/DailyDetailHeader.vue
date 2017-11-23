<template>
  <thead>
    <tr>
      <th :colspan="totalColumn"><span class="day">{{ date }}</span> {{ monthYear }}</th>
    </tr>
  </thead>
</template>

<script>
import moment from 'moment'

export default {
  name: 'DailyDetailHeader',
  props: ['day'],
  data () {
    return {
      canEdit: true
    }
  },
  computed: {
    totalColumn () {
      return this.canEdit ? 3 : 2
    },
    dateObject () {
      return moment(this.day, 'YYMMDD')
    },
    date () {
      return this.dateObject.date()
    },
    monthYear () {
      return this.dateObject.format('MMMM YYYY')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

