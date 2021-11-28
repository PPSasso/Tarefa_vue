<template>
  <v-card
    class="mx-auto my-2"
    width="320"
    max-height="20"
    dark
    
  >
    
    <v-img
      width="100%"
      max-height="320"
      :src="require(`@/assets/${movie.imgRef}`)"
    ></v-img>

    <v-card-title>{{movie.name}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{movie.genre}}
      </div>

      <div>{{movie.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Watch
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:['movie'],

}
</script>

<style>

</style>