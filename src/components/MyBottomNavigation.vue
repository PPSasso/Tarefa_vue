<template>
  <v-bottom-navigation v-model="value"
  dark
  background-color="grey darken-4"
  style="box-shadow=0"
  >
    <v-btn value="Home Page" href="/">
      <span>Home Page</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn value="Action" href="/action">
      <span>Action</span>

      <v-icon>mdi-car-traction-control</v-icon>
    </v-btn>

    <v-btn value="Kids" href="/kids">
      <span>Kids</span>

      <v-icon>mdi-balloon</v-icon>
    </v-btn>
    <v-btn value="Comedy" href="comedy">
      <span>Comedy</span>

      <v-icon>mdi-emoticon-excited-outline</v-icon>
    </v-btn>
    <v-btn value="Horror" href="horror">
      <span>Horror</span>

      <v-icon>mdi-knife</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({ value: 'recent' }),
  }
</script>

<style>

</style>