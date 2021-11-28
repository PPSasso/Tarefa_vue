<template>
  <v-app>
    <my-system-bar></my-system-bar>
    <my-app-bar></my-app-bar>
    <v-main>
      <div class="sidebar">
        <side-bar></side-bar>
        <router-view/>
      </div>
    </v-main>
    <my-footer></my-footer>
    <my-bottom-navigation></my-bottom-navigation>
  </v-app>
</template>

<script>
import MyAppBar from './components/MyAppBar.vue';
import MyBottomNavigation from './components/MyBottomNavigation.vue';
import MyFooter from './components/MyFooter.vue';
import MySystemBar from './components/MySystemBar.vue';
import SideBar from './components/SideBar.vue';

export default {
  components: { MySystemBar, MyAppBar, SideBar, MyFooter, MyBottomNavigation },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .sidebar{
    height: 100%;
    display: flex;

    background-color: rgb(41, 41, 41);
  }
</style>
