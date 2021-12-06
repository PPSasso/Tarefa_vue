<template>
  <div class="mainDiv">
    <v-row
      v-for="(item,i) in movies" 
      :key=i 
      dark 
      class="list" 
      >
      <my-card v-if="35 === item.genre_ids[0]" :movie="item"></my-card>
    </v-row>
   
  </div>
</template>

<script>
import MyCard from '../components/MyCard.vue'


  export default {
    computed:{
      movies(){
        return this.$store.state.movies
      }
    },
    
    components: { MyCard },

    async created(){
      this.$store.dispatch("fetchMovies")

    }
  }
</script>

<style scoped>
  .mainDiv{
    display: flex;
    margin: 2% 10%

  }

  .list{
    margin: 0 10px;
    margin-bottom: 700px;

    background-color: rgb(41, 41, 41);
  }
</style>