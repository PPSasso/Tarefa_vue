import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    title: "Film list",
    movies: []
  },

  mutations: {
    SET_MOVIES(state, payload){
      state.movies = payload
    }
  },

  actions: {
    fetchMovies({commit}){
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=af2b92fcde8ab01f025ca8d3ae33243c')
      .then(res =>{
        const payload = res.data.results

        console.log(payload);

        commit('SET_MOVIES', payload)
      })
      .catch(err=>{console.log(err)})
    }
  },
  getters:{
    bigTitle(state){
      return state.title.toUpperCase()
    }
  }
})
