<template>
  <div>
    <h1 class="has-text-centered">Login</h1>
    <div id="firebase-ui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'

export default {
  name: 'AuthLogin',
  mounted () {
    const uiConfig = {
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInSuccessUrl: '/#/detail',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ]
    }

    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebase-ui-auth-container', uiConfig)
  }
}
</script>

<style lang="scss" scoped>
@import '~firebaseui/dist/firebaseui.css'
</style>
