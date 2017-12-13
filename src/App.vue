<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="main" />
  </div>
</template>

<script>
import Firebase from 'firebase'

import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  created () {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
      } else {
        this.$router.push('/auth/')
      }
    })
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
