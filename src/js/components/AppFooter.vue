<template>
  <div class="app-footer">
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-text">Marketing Site</li>
          <li><a href="#One">One</a></li>
          <li><a href="#Two">Two</a></li>
        </ul>
      </div>
      <div class="top-bar-right">
        <ul class="menu">
          <li><input type="search" placeholder="Search"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppFooter'
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-bar{
    height: 133px;
    background: #FFFFFF;
    border-bottom: 1px solid #10172C26;
  }
</style>
