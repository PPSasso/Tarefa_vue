<template>
  <div>
    <v-app-bar
      color="grey darken-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon href="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon href="/action">
        <v-icon>mdi-car-traction-control</v-icon>
      </v-btn>
      <v-btn icon href="/kids">
        <v-icon>mdi-balloon</v-icon>
      </v-btn>
      <v-btn icon href="/comedy">
        <v-icon>mdi-emoticon-excited-outline</v-icon>
      </v-btn>
      <v-btn icon href="/horror">
        <v-icon>mdi-knife</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>

export default {
    name:"MyAppBar",

    data(){
      return{
        title: this.$store.getters.bigTitle
      }
    }


}

</script>

<style>

</style>