<template>
  <div class="app-toolbar">
    <div class="top-bar">
      <div class="top-bar-left">
        <div class="show-for-medium">
          <ul class="menu">
            <li class="">
              <router-link to="/"><img class="logo" src="../../assets/star-wars-black.svg"></router-link>
            </li>

            <li class="menu-text">
              <router-link to="/">Star Wars</router-link>
            </li>
            <li class="menu-text">
              <router-link to="/Films">Filme</router-link>
            </li>
            <li class="menu-text">
              <router-link to="/Characters">Charaktere</router-link>
            </li>
            <li class="menu-text">
              <router-link to="/Planets">Planeten</router-link>
            </li>

          </ul>
        </div>

        <div class="show-for-small-only">
          <div class="grid-x">
            <div class="cell small-2">
              <ul class="dropdown menu" data-dropdown-menu>
                <li class="menu-text">
                  <i class="fi-list size-24"></i>
                  <ul class="menu">
                    <li class="menu-text">
                      <router-link to="/">Star Wars</router-link>
                    </li>
                    <li class="menu-text">
                      <router-link to="/Films">Filme</router-link>
                    </li>
                    <li class="menu-text">
                      <router-link to="/Characters">Charaktere</router-link>
                    </li>
                    <li class="menu-text">
                      <router-link to="/Planets">Planeten</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="cell small-8">
              <router-link to="/"><img class="logo" src="../../assets/star-wars-black.svg"></router-link>
            </div>
            <div class="cell small-2"></div>

          </div>


        </div>




      </div>
      <div class="top-bar-right show-for-medium">
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
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (min-width: 40em) {
    .top-bar-left {
      padding-left: 10%;
    }

    .top-bar-right {
      padding-right: 10%;
    }

    .top-bar {
      height: var(--toolbar-height-medium);
      border-bottom: 1px solid #10172C26;
    }
  }

  @media screen and (max-width: 39.9375em) {
    .top-bar {
      height: var(--toolbar-height-small);
      border-bottom: 1px solid #10172C26;
      background: none;
    }

  }

  .logo {
    width: 83px;
  }

  a {
    color: #10172C;
  }

  .search-form[type=search] {
    background-image: url('../../assets/fi-magnifying-glass.svg');
    background-position: calc(100% - 1rem) 1rem;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    padding-right: 40px;
  }

  .search-form[type=search]:focus {
    background-image: none;
  }


</style>
