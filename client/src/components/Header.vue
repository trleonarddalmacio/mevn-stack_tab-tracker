<template>
  <v-toolbar fixed dark class="blue">
    <v-toolbar-title class="mr-4" >
      <v-btn flat dark to="/">TabTracker</v-btn>
    </v-toolbar-title>

    <!-- TODO: IMPLEMENT -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer />

    <v-toolbar-items>
      <v-btn flat dark to="/register">Sign Up</v-btn>
      <v-btn flat dark to="/login">Log In</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
