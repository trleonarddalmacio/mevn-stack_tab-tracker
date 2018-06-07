<template>
  <v-toolbar fixed dark class="blue">
    <v-toolbar-title class="mr-4" >
      <v-btn flat dark to="/">TabTracker</v-btn>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        flat
        dark
        to="/songs">Browse</v-btn>
    </v-toolbar-items>

    <v-spacer />

    <v-toolbar-items >
      <v-btn
        flat
        dark
        to="/register"
        v-if="!$store.state.isUserLoggedIn">Sign Up</v-btn>
      <v-btn
        flat
        dark
        to="/login"
        v-if="!$store.state.isUserLoggedIn">Log In</v-btn>
      <v-btn
        flat
        dark
        to="/"
        @click="logout"
        v-if="$store.state.isUserLoggedIn">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to homepage
    }
  }
}
</script>

<style scoped>
</style>
