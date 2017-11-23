<template>
  <tbody>
    <template v-if="dayRecords.length">
      <record-detail v-for="record in dayRecords" :record="record" :can-edit="canEdit">
      </record-detail>
    </template>
    <template v-else>
      <tr>
        <td :colspan="totalColumn" class="is-narrow has-text-centered">No Input data</td>
      </tr>
    </template>
  </tbody>
</template>

<script>
import { mapGetters } from 'vuex'

import RecordDetail from './RecordDetail'

export default {
  name: 'DailyDetail',
  props: ['dayRecords'],
  components: {
    RecordDetail
  },
  data () {
    return {
      canEdit: true
    }
  },
  computed: {
    ...mapGetters([
      'getCategoryNameFromCode'
    ]),
    totalColumn () {
      return this.canEdit ? 3 : 2
    }
  },
  methods: {
    displayRecordNoteOrCategory (record) {
      if (record.note) {
        return record.note
      } else {
        return this.getCategoryNameFromCode(record.category)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

