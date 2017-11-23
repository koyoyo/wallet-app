<template>
  <tr>
    <td>{{ displayRecordNoteOrCategory(record) }}</td>
    <td class="is-narrow has-text-right">{{ record.amount | numberWithCommas }}</td>
    <td class="is-narrow" v-if="canEdit">
      <b-icon icon="settings" size="is-small"></b-icon>
    </td>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DailyDetail',
  props: ['record', 'canEdit'],
  computed: {
    ...mapGetters([
      'getCategoryNameFromCode'
    ])
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

