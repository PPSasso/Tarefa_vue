<template>
  <div class="mainDiv">
    <v-row >
      <v-col v-for="item in moviesList" :key="item.name" dark class="list">
        <my-card v-if="item.genre == 'Kids'" :movie="item"></my-card>
      </v-col>
    </v-row>
   
  </div>
</template>

<script>
import MyCard from '../components/MyCard.vue'


  export default {
    data(){
      return{
        moviesList: this.$store.state
      }
    },  
    
    components: { MyCard },
      name: 'Kids',
    };
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