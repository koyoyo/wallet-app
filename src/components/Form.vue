<template>
  <div class="container">
    <h1 class="has-text-centered is-size-2">Insert</h1>
    <form>
      <div class="field">
        <b-field>
          <b-input type="number" placeholder="0" v-model.number="amount"></b-input>
        </b-field>
      </div>

      <div class="field select-category">
        <b-field>
          <b-radio-button v-model="category" v-for="categoryChoice in categories"
              :native-value="categoryChoice.code"
              :key="categoryChoice.code">
            <b-icon :icon="categoryChoice.icon"></b-icon>
            <span>{{ categoryChoice.name }}</span>
          </b-radio-button>
        </b-field>
      </div>
      <div class="field">
        <b-field label="note">
          <b-input v-model.trim="note"></b-input>
        </b-field>
      </div>
      <div class="field">
        <b-field label="Date">
          <b-datepicker placeholder="Click to select..." icon="calendar-today"
            v-model.trim="date" :max-date="today" :date-formatter="dateFormat"></b-datepicker>
        </b-field>
      </div>

      <div class="field">
        <b-field>
          <button class="button is-primary" type="button" v-on:click="submit">
            Button
          </button>
        </b-field>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'Form',
  data () {
    let today = new Date()
    return {
      today: today,
      amount: '',
      category: '',
      note: '',
      date: today
    }
  },
  computed: {
    ...mapState([
      'categories'
    ])
  },
  methods: {
    ...mapActions([
      'insertRecord'
    ]),
    dateFormat: function (thisDate) {
      return moment(thisDate).format('DD/MM/YYYY')
    },
    submit (event) {
      this.insertRecord({
        date: moment(this.date).format('YYMMDD'),
        data: {
          'amount': this.amount,
          'category': this.category,
          'note': this.note
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.select-category {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px 0;
}
</style>
