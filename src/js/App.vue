<template>
  <div id="app">
    <app-toolbar></app-toolbar>
    <router-view></router-view>

  </div>
</template>

<script>
  import AppToolbar from '../js/components/AppToolbar.vue';


  export default {
  name: 'app',
  components:{
    AppToolbar
  }
};
</script>

<style>
  body{
    --toolbar-height-medium: 133px;
    --toolbar-height-small: 64px;
  }
</style>

