<template>
  <div class="details-view">
    <div class="title">
      <h4>{{pageName}}</h4>
      <hr>
      <h1>{{getPageHeadder(data)}}</h1>
      <div v-if="route == 'FilmId'">
        <h4>Episode {{convertToRoman(data.episode_id)}}</h4>
      </div>
    </div>

    <div class="main-content">
      <div class="grid-x">
        <div class="cell small medium-1 large-2"></div>
        <div class="cell small-12 medium-10 large-8">

          <div v-if="route == 'FilmId'">
            <film-details :data="data"></film-details>
          </div>
          <div v-if="route == 'CharacterId'">
            <character-details :data="data"></character-details>
          </div>
          <div v-if="route == 'PlanetId'">
            <planet-details :data="data"></planet-details>
          </div>

        </div>
        <div class="cell small medium-1 large-2"></div>

      </div>


    </div>
    <app-footer></app-footer>
  </div>

</template>

<script>
  import axios from 'axios'
  import FilmDetails from '../components/FilmDetails.vue'
  import CharacterDetails from '../components/CharacterDetails.vue'
  import PlanetDetails from '../components/PlanetDetails.vue'

  import AppFooter from '../components/AppFooter.vue';


  export default {
    components: {
      AppFooter,
      FilmDetails,
      CharacterDetails,
      PlanetDetails
    },
    name: 'details-view',
    data () {
      return {
        pageNameList: [
          'Filmdetails',
          'Charakterdetails',
          'Planetendetails'
        ],
        pageName: null,
        route: this.$route.name,
        data: {},
        endpointList: [
          'https://swapi.dev/api/films/',
          'https://swapi.dev/api/people/',
          'https://swapi.dev/api/planets/'
        ],
        endpoint: 'https://swapi.dev/api/films/',
      }
    },
    created () {},
    methods: {
      getAllPosts () {
        axios.get(this.endpoint + this.$route.params.id).then(response => {this.data = response.data}).catch(error => {
          console.log('-----error-------')
          console.log(error)
        })
      },
      getPageHeadder(data){
        switch (this.route) {
          case 'FilmId':
            return data.title;
            break
          case 'CharacterId':
          case 'PlanetId':
            return data.name;
            break
          default:
        }
      },
      convertToRoman (number) {
        var romanMatrix = [
          [1000, 'M'],
          [900, 'CM'],
          [500, 'D'],
          [400, 'CD'],
          [100, 'C'],
          [90, 'XC'],
          [50, 'L'],
          [40, 'XL'],
          [10, 'X'],
          [9, 'IX'],
          [5, 'V'],
          [4, 'IV'],
          [1, 'I']
        ]
        if (number === 0) {
          return ''
        }
        for (var i = 0; i < romanMatrix.length; i++) {
          if (number >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + this.convertToRoman(number - romanMatrix[i][0])
          }
        }
      }
    },
    watch: {
      '$route.name': {
        handler: function () {
          this.route = this.$route.name
          switch (this.route) {
            case 'FilmId':
              this.pageName = this.pageNameList[0]
              this.endpoint = this.endpointList[0]
              break
            case 'CharacterId':
              this.pageName = this.pageNameList[1]
              this.endpoint = this.endpointList[1]
              break
            case 'PlanetId':
              this.pageName = this.pageNameList[2]
              this.endpoint = this.endpointList[2]
              break
            default:
            // code block
          }
          this.getAllPosts()
        },
        immediate: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (max-width: 39.9375em) {
    .details-view {
      overflow-y: scroll;
      background: #FFFFFF;
      height: calc(100vh - var(--toolbar-height-small));
    }
    .title {
      margin: 0;
      padding: 2vh 0 2vh 0;
    }

    .title h1 {
      font-size: 50px;
      font-weight: bold;
    }
    .title hr {
      width: 5vw;
      margin-bottom: 0px;
    }

  }
  @media screen and (min-width: 40em) {
    .details-view {
      overflow-y: scroll;
      background: #FFFFFF;
      height: calc(100vh - var(--toolbar-height-medium));
    }
    .title {
      margin: 0;
      padding: 5vh 0 5vh 0;
    }

    .title h1 {
      font-size: 75px;
      font-weight: bold;
    }
    .title hr {
      width: 5vw;
    }

  }

  .title hr {
    width: 5vw;
  }


</style>
