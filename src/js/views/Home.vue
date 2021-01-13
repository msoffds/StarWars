<template>
  <div class="home">

    <div class="grid-y">
      <div class="cell small-2"></div>
      <div class="grid-x align-center cell small-8"> <!-- Aligned to the center -->
        <div class="cell small-8 parent">
          <img class="child" src="../../assets/star-wars-white.svg">
        </div>
      </div>
      <div class="cell small-2"></div>
    </div>



    <!--<h1>{{ msg }}</h1>-->

  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    background: #10172C;
    height: calc(100vh - var(--toolbar-height));
  }

  .grid-y{
    height: calc(100vh - var(--toolbar-height));
  }

  .parent{
    position: relative;
  }

  .child {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-height: 100%;
    transform: translate(-50%, -50%);
  }
</style>
