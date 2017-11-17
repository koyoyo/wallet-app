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
          <b-radio-button v-model="category"
              native-value="Food">
              <b-icon icon="close"></b-icon>
              <span>Food</span>
          </b-radio-button>

          <b-radio-button v-model="category"
              native-value="Drink">
              <b-icon icon="check"></b-icon>
              <span>Drink</span>
          </b-radio-button>

          <b-radio-button v-model="category"
              native-value="Transport">
              <b-icon icon="check"></b-icon>
              <span>Transport</span>
          </b-radio-button>

          <b-radio-button v-model="category"
              native-value="Other">
              <b-icon icon="check"></b-icon>
              <span>Other</span>
          </b-radio-button>
        </b-field>
      </div>
      <div class="field">
        <b-field label="note">
          <b-input v-model.trim="note"></b-input>
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
export default {
  name: 'Form',
  data () {
    return {
      amount: '',
      category: '',
      note: ''
    }
  },
  methods: {
    submit: function (event) {
      console.log(this.amount)
      console.log(this.category)
      console.log(this.note)
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
