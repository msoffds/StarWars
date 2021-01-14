<template>
  <div>
    <equalizer
      :classes="['main-cell']"
      :config="{
        }"
    >
      <div class="grid-x">

        <div class="cell medium-6 left-cell main-cell show-for-medium">
          <div class="top-items">
            <h5><b>Details</b></h5>
            <div><b>Director: </b> {{data.director}}</div>
            <div><b>Produzenten: </b> {{data.producer}}</div>
            <div><b>Erscheinungsdatum: </b> {{data.release_date}}</div>
            <br>
            <p>{{data.opening_crawl}}</p>
          </div>


          <div class="bottom-links">
            <div v-if="data.characters != undefined && data.characters.length>0 && characterList.length>0">
              <h5><b>Charaktere:</b></h5>
              <div class="grid-x small-up-1 medium-up-2 large-up-3">
                <div v-for="item in characterList">
                  <router-link :to="{ name: 'CharacterId', params: { id: getItemId(item) }}">
                    <div class="tag-item">
                      <span class="label light-gray">{{item.name}}</span>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>

            <div v-if="data.planets != undefined && data.planets.length>0 && planetsList.length>0">
              <h5><b>Planeten:</b></h5>
              <div class="grid-x small-up-1 medium-up-2 large-up-3">
                <div v-for="item in planetsList">
                  <router-link :to="{ name: 'PlanetId', params: { id: getItemId(item) }}">
                    <div class="tag-item">
                      <span class="label light-gray">{{item.name}}</span>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div v-if="data.starships != undefined && data.starships.length>0 && starshipList.length>0">
              <h5><b>Raumschiffe:</b></h5>
              <div class="grid-x small-up-1 medium-up-2 large-up-3">
                <div v-for="item in starshipList">
                  <div class="tag-item">
                    <span class="label light-gray">{{item.name}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="data.vehicles != undefined && data.vehicles.length>0 && vehicleList.length>0">
              <h5><b>Fahrzeuge:</b></h5>
              <div class="grid-x small-up-1 medium-up-2 large-up-3">
                <div v-for="item in vehicleList">
                  <div class="tag-item">
                    <span class="label light-gray">{{item.name}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cell small-12 medium-6 right-cell main-cell">
          <div v-if="data.episode_id != undefined">
            <img :src="getImage(data.episode_id)" class="equalized">
          </div>
        </div>

        <div class="show-for-small-only">

          <div class="cell small-12 small-cell">
            <div class="top-items">
              <h5><b>Details</b></h5>
              <div><b>Director: </b> {{data.director}}</div>
              <div><b>Produzenten: </b> {{data.producer}}</div>
              <div><b>Erscheinungsdatum: </b> {{data.release_date}}</div>
              <br>
              <p>{{data.opening_crawl}}</p>
            </div>


            <div class="bottom-links">
              <div v-if="data.characters != undefined && data.characters.length>0 && characterList.length>0">
                <h5><b>Charaktere:</b></h5>
                <div class="grid-x small-up-1 medium-up-2 large-up-3">
                  <div v-for="item in characterList">
                    <router-link :to="{ name: 'CharacterId', params: { id: getItemId(item) }}">
                      <div class="tag-item">
                        <span class="label light-gray">{{item.name}}</span>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>

              <div v-if="data.planets != undefined && data.planets.length>0 && planetsList.length>0">
                <h5><b>Planeten:</b></h5>
                <div class="grid-x small-up-1 medium-up-2 large-up-3">
                  <div v-for="item in planetsList">
                    <router-link :to="{ name: 'PlanetId', params: { id: getItemId(item) }}">
                      <div class="tag-item">
                        <span class="label light-gray">{{item.name}}</span>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div v-if="data.starships != undefined && data.starships.length>0 && starshipList.length>0">
                <h5><b>Raumschiffe:</b></h5>
                <div class="grid-x small-up-1 medium-up-2 large-up-3">
                  <div v-for="item in starshipList">
                    <div class="tag-item">
                      <span class="label light-gray">{{item.name}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="data.vehicles != undefined && data.vehicles.length>0 && vehicleList.length>0">
                <h5><b>Fahrzeuge:</b></h5>
                <div class="grid-x small-up-1 medium-up-2 large-up-3">
                  <div v-for="item in vehicleList">
                    <div class="tag-item">
                      <span class="label light-gray">{{item.name}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </equalizer>

    <div class="bottom-spacer-medium show-for-medium"></div>
    <div class="bottom-spacer-small show-for-small-only"></div>

  </div>


</template>

<script>
  import axios from 'axios'
  import equalizer from 'vue-equalizer'

  export default {
    components: {
      equalizer
    },
    name: 'film-details',
    data: function () {
      return {
        characterList: {
          type: Array
        },
        planetsList: {
          type: Array
        },
        starshipList: {
          type: Array
        },
        vehicleList: {
          type: Array
        },
        endpointList: {
          character: 'https://swapi.dev/api/people/',
          planets: 'https://swapi.dev/api/planets/',
          starships: 'https://swapi.dev/api/starships/',
          vehicles: 'https://swapi.dev/api/vehicles/'
        }
      }

    },
    props: {
      data: {
        type: Object
      }
    },
    watch:{
      data:function(){
        if(this.data !== undefined){
          if (this.data.characters.length > 0)
            this.getAllCharacters()
          if (this.data.planets.length > 0)
            this.getAllPlanets()
          if (this.data.starships.length > 0)
            this.getAllStarships()
          if (this.data.vehicles.length > 0)
            this.getAllVehicles()
        }
      }
    },
    methods: {
      getImage (id) {
        return 'src/assets/image_assets/EP' + id + '_poster.png'
      },
      getAllCharacters () {
        axios.get(this.endpointList.character).then(response => {
          this.characterList = response.data.results.filter(m=>
            this.data.characters.filter(f=>f === (m.url)).length>0
            );
          }).catch(error => {
          console.log('-----error-------')
          console.log(error)
        })
      },
      getAllPlanets () {
        axios.get(this.endpointList.planets).then(response => {
          this.planetsList = response.data.results.filter(m=>
               this.data.planets.filter(f=>f === (m.url)).length>0
          );
        }).catch(error => {
          console.log('-----error-------')
          console.log(error)
        })
      },
      getAllStarships () {
        axios.get(this.endpointList.starships).then(response => {
          this.starshipList = response.data.results.filter(m=>
            this.data.starships.filter(f=>f === (m.url)).length>0
            );
          }).catch(error => {
          console.log('-----error-------')
          console.log(error)
        })
      },
      getAllVehicles () {
        axios.get(this.endpointList.vehicles).then(response => {
          this.vehicleList = response.data.results.filter(m=>
            this.data.vehicles.filter(f=>f === (m.url)).length>0
           );
          }).catch(error => {
          console.log('-----error-------')
          console.log(error)
        })
      },
      getItemId (item) {
        return item.url.substr(item.url.lastIndexOf('/', item.url.lastIndexOf('/') - 1) + 1, item.url.length - item.url.lastIndexOf('/', item.url.lastIndexOf('/') - 1) - 2)
      },
    },
    ready(){

    },
    created () {

    },
    updated: function () {
      this.$nextTick(function () {
        window.dispatchEvent(new Event('resize'))
      })
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left-cell {
    text-align: justify;
    padding-right: 200px;
  }

  .small-cell{
    padding: 10px;
    text-align: center;
  }
  .small-cell .bottom-links h5{
    text-align: left;
  }

  .small-cell p{
    text-align: justify;
  }

  .bottom-spacer-medium{
  height:20vh;
  }

  .bottom-spacer-small{
    height:5vh;
  }

  .bottom-links {
    padding-top: 50px;
  }

  .bottom-links h5 {
    font-weight: bold;
    padding-left: 5px;
    margin-bottom: 0px;
  }

  .tag-item {
    padding: 5px;
  }

  .top-items {
    padding: 5px;
  }

  .tag-item span {
    padding: 15px;
    font-weight: bold;
  }

  a {
    color: #10172C;
  }

  img {
    max-height: 60vh;
  }
</style>
