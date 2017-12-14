<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="main" />
  </div>
</template>

<script>
import Firebase from 'firebase'
import { mapActions, mapState } from 'vuex'

import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (this.user.isAnonymous) {
          next({
            name: 'AuthLogin',
            // path: '/auth',
            query: { redirect: to.fullPath }
          })
        } else {
          next()
        }
      } else if (to.matched.some(record => record.meta.redirectAuthenticated)) {
        if (this.user.isAnonymous) {
          next()
        } else {
          next({
            name: 'Detail'
          })
        }
      } else {
        next() // make sure to always call next()!
      }
    })

    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // NOTE: Update in this VS Update in firebaseui signInSuccess
        this.updateUser(user)
      } else {
        this.$router.push({name: 'AuthLogin'})
      }
    })
  },
  methods: {
    ...mapActions([
      'updateUser'
    ])
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Prompt', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main {
  margin-top: 60px;
}
</style>
