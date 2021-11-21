<template>
  <v-footer
    dark
    padless
    width="100%"
    elevation=0
  >
    <v-card
      flat
      tile
      width="100%"
      class="grey darken-4 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
       Um protótipo VUE em andamento...
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>PPSasso</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    name:"MyFooter",
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>

<style>

</style>