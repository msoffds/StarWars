<template>
  <div class="card-view">
    <h1 class="title">{{pageName}}</h1>
    <div class="main-content">
      <div class="grid-x">
        <div class="cell small medium-1 large-2"></div>
        <div class="cell small-12 medium-10 large-8">

          <div v-if="route == 'Films'">
            <film-cards v-bind:data="data"></film-cards>
          </div>
          <div v-if="route == 'Characters'">
            <character-cards v-bind:data="data"></character-cards>
          </div>
          <div v-if="route == 'Planets'">
            <planet-cards v-bind:data="data"></planet-cards>
          </div>

        </div>
        <div class="cell small medium-1 large-2"></div>

      </div>

      <app-footer></app-footer>
    </div>
  </div>

</template>

<script>
  import axios from'axios'
  import FilmCards from '../components/FilmCards.vue'
  import CharacterCards from '../components/CharacterCards.vue'
  import PlanetCards from '../components/PlanetCards.vue'
  import AppFooter from '../components/AppFooter.vue';

  export default {
    components: {
      AppFooter,
      FilmCards,CharacterCards,PlanetCards
    },
    name: 'card-view',
    data () {
      return {
        pageNameList: [
          "Filme",
          "Charaktere",
          "Planeten"
        ],
        pageName:null,
        route:this.$route.name,
        data: {},
        endpointList:[
          "https://swapi.dev/api/films/",
          "https://swapi.dev/api/people/",
          "https://swapi.dev/api/planets/"
        ],
        endpoint: 'https://swapi.dev/api/films/',
      }
    },
    created () {},
    methods: {
      getAllPosts () {
        axios.get(this.endpoint).then(response => {this.data = response.data}).catch(error => {
          console.log('-----error-------')
          console.log(error)
        })
      }
    },
    watch: {
      '$route.name': {
        handler: function() {
          this.route=this.$route.name;
          switch(this.route) {
            case "Films":
              this.pageName=this.pageNameList[0];
              this.endpoint=this.endpointList[0];
              break;
            case "Characters":
              this.pageName=this.pageNameList[1];
              this.endpoint=this.endpointList[1];
              break;
            case "Planets":
              this.pageName=this.pageNameList[2];
              this.endpoint=this.endpointList[2];
              break;
            default:
            // code block
          }
          this.getAllPosts();
        },
        immediate: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (max-width: 39.9375em) {
    .card-view {
      overflow-y: scroll;
      background: #FFFFFF;
      height: calc(100vh - var(--toolbar-height-small));
    }
    .title {
      font-size: 50px;
      font-weight: bold;
      margin: 0;
      padding: 2vh 0 2vh 0;
    }
  }
  @media screen and (min-width: 40em) {
    .card-view {
      overflow-y: scroll;
      background: #FFFFFF;
      height: calc(100vh - var(--toolbar-height-medium));
    }
    .title {
      font-size: 75px;
      font-weight: bold;
      margin: 0;
      padding: 10vh 0 10vh 0;
    }
  }





  </style>
