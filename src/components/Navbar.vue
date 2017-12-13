<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>

        <div class="navbar-burger" v-bind:class="navbarClassObject" v-on:click="toggleNavbarIsActive">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" v-bind:class="navbarClassObject" v-show="this.user.isAnonymous">
        <div class="navbar-end">
          <router-link :to="{ name: 'AuthLogin'}" class="navbar-item">Login</router-link>
        </div>
      </div>

      <div class="navbar-menu" v-bind:class="navbarClassObject" v-show="!this.user.isAnonymous">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Kim Tae Yeon
            </a>

            <div class="navbar-dropdown is-right">
              <a class="navbar-item">
                Today
              </a>
              <a class="navbar-item">
                Calendar
              </a>
              <a class="navbar-item">
                Monthly Chart
              </a>
              <a class="navbar-item">
                Summary by day
              </a>
              <a class="navbar-item">
                Summary by month
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Add
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" @click.prevent="logout">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Firebase from 'firebase'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Navbar',
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapState([
      'user'
    ]),
    navbarClassObject () {
      return {
        'is-active': this.isActive
      }
    }
  },
  methods: {
    ...mapActions([
      'updateUser'
    ]),
    logout () {
      Firebase.auth().signOut()
      this.updateUser()
      this.$router.push({name: 'AuthLogin'})
    },
    toggleNavbarIsActive () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
