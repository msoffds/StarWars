<template>
  <div class="app-toolbar">
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="" >
            <router-link to="/"><img class="logo" src="../../assets/star-wars-black.svg"></router-link>
            </li>
          <li class="menu-text">
            <router-link to="/">Star Wars</router-link>


            <!--<router-link
            v-for="post in posts"
            active-class="is-active"
            class="link"
            :to="{ name: 'post', params: { id: post.id } }">
            {{post.id}}. {{post.title}}
          </router-link>--></li>
          <li class="menu-text"><router-link to="/Films">Filme</router-link></li>
          <li class="menu-text"><router-link to="/Characters">Charaktere</router-link></li>
          <li class="menu-text"><router-link to="/Planets">Planeten</router-link></li>

        </ul>
      </div>
      <div class="top-bar-right">
        <ul class="menu">
          <li><input type="search" placeholder="Suche" class="search-form"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppToolbar'
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-bar{
    height: var(--toolbar-height);
    border-bottom: 1px solid #10172C26;
  }
  .logo{
    width:83px;
  }
  .top-bar-left{
    padding-left: 10%;
  }
  .top-bar-right {
    padding-right: 10%;
  }
  a{
    color:#10172C;
  }

  .search-form[type=search]{
    background-image: url('../../assets/fi-magnifying-glass.svg');
    background-position:calc(100% - 1rem) 1rem;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    padding-right: 40px;
  }

  .search-form[type=search]:focus {
    background-image:none;
  }


</style>
