<template>
  <div>
    <equalizer
      :classes="['equalized']"
      :config="{
        }"
    >
      <div class="grid-x">

        <div class="cell medium-6 main-cell show-for-medium">
          <div class="left-cell equalized">
            <div class="top-items">
              <h5><b>Details</b></h5>
              <div><b>Größe: </b> {{data.height}}cm</div>
              <div><b>Gewicht: </b> {{data.mass}}kg</div>
              <div><b>Haarfarbe: </b> {{data.hair_color}}</div>
              <div><b>Augenfarbe: </b> {{data.eye_color}}</div>
              <div><b>Geburtsjahr: </b> {{data.birth_year}}</div>
              <div><b>Geschlecht: </b> {{data.gender}}</div>

              <br>
              <div><b>Heimatplanet: </b>
                <div v-if="data.homeworld != undefined" class="home-planet-tag">
                  <router-link :to="{ name: 'PlanetId', params: { id: getIdFromString(data.homeworld) }}">
                    <div class="home-planet-tag tag-item">
                      <span class="label light-gray">{{getHomePlanet(data)}}</span>
                    </div>
                  </router-link>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="cell small-12 medium-6 right-cell main-cell">
          <div v-if="data.url != undefined">
            <img :src="getImage(data)" class="equalized">
          </div>
        </div>



        <div class="show-for-small-only">
          <div class="cell small-12 small-cell">
            <div class="top-items">
              <h5><b>Details</b></h5>
              <div><b>Größe: </b> {{data.height}}cm</div>
              <div><b>Gewicht: </b> {{data.mass}}kg</div>
              <div><b>Haarfarbe: </b> {{data.hair_color}}</div>
              <div><b>Augenfarbe: </b> {{data.eye_color}}</div>
              <div><b>Geburtsjahr: </b> {{data.birth_year}}</div>
              <div><b>Geschlecht: </b> {{data.gender}}</div>

              <br>
            </div>


            <div class="bottom-links">
              <div class="home-planet-tag-small">
                <b>Heimatplanet: </b>
                <div v-if="data.homeworld != undefined" class="home-planet-tag">
                  <router-link :to="{ name: 'PlanetId', params: { id: getIdFromString(data.homeworld) }}">
                    <div class="home-planet-tag tag-item">
                      <span class="label light-gray">{{getHomePlanet(data)}}</span>
                    </div>
                  </router-link>
                </div>
              </div>
              <div v-if="data.films != undefined && data.films.length>0 && filmsList.length>0">
                <h5><b>Filme:</b></h5>
                <div class="grid-x small-up-1 medium-up-2 large-up-3">
                  <div v-for="item in filmsList">
                    <router-link :to="{ name: 'FilmId', params: { id: getItemId(item) }}">
                      <div class="tag-item">
                        <span class="label light-gray">{{item.title}}</span>
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
    <div class="left-cell-small-padding show-for-medium">
      <div class="bottom-links">
        <div v-if="data.films != undefined && data.films.length>0 && filmsList.length>0">
          <h5><b>Filme:</b></h5>
          <div class="grid-x small-up-1 medium-up-2 large-up-3">
            <div v-for="item in filmsList">
              <router-link :to="{ name: 'FilmId', params: { id: getItemId(item) }}">
                <div class="tag-item">
                  <span class="label light-gray">{{item.title}}</span>
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
    <div class="bottom-spacer-medium show-for-medium">
    </div>
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
    name: 'character-details',
    data: function () {
      return {
        filmsList: {
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
          films: 'https://swapi.dev/api/films/',
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
    watch: {
      data: function () {
        if (this.data !== undefined) {
          if (this.data.films.length > 0)
            this.getAllFilms()
          if (this.data.starships.length > 0)
            this.getAllStarships()
          if (this.data.vehicles.length > 0)
            this.getAllVehicles()
          this.getAllPlanets()
        }
      },
      planetsList: function () {
        this.getHomePlanet(this.data)
      }
    },
    methods: {
      getImage (data) {
        return 'src/assets/image_assets/Character_' + this.getItemId(data) + '.png'
      },
      getAllFilms () {
        axios.get(this.endpointList.films).then(response => {
          this.filmsList = response.data.results.filter(m =>
            this.data.films.filter(f => f === (m.url)).length > 0
          )
        }).catch(error => {
          console.log('-----error-------')
          console.log(error)
        })
      },
      getAllPlanets () {
        axios.get(this.endpointList.planets).then(response => {
          this.planetsList = response.data.results
        }).catch(error => {
          console.log('-----error-------')
          console.log(error)
        })
      },
      getAllStarships () {
        axios.get(this.endpointList.starships).then(response => {
          this.starshipList = response.data.results.filter(m =>
            this.data.starships.filter(f => f === (m.url)).length > 0
          )
        }).catch(error => {
          console.log('-----error-------')
          console.log(error)
        })
      },
      getAllVehicles () {
        axios.get(this.endpointList.vehicles).then(response => {
          this.vehicleList = response.data.results.filter(m =>
            this.data.vehicles.filter(f => f === (m.url)).length > 0
          )
        }).catch(error => {
          console.log('-----error-------')
          console.log(error)
        })
      },
      getHomePlanet (item) {
        if (this.planetsList !== undefined && this.planetsList.length > 0)
          return this.planetsList.find(f => f.url === item.homeworld).name
      },
      getItemId (item) {
        return item.url.substr(item.url.lastIndexOf('/', item.url.lastIndexOf('/') - 1) + 1, item.url.length - item.url.lastIndexOf('/', item.url.lastIndexOf('/') - 1) - 2)
      },
      getIdFromString (item) {
        return item.substr(item.lastIndexOf('/', item.lastIndexOf('/') - 1) + 1, item.length - item.lastIndexOf('/', item.lastIndexOf('/') - 1) - 2)
      },
    },
    ready () {

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
  @media screen and (max-width: 39.9375em) {
    .bottom-links {
      padding-top: 10px;
    }
  }
  @media screen and (min-width: 40em)and (max-width: 64em) {
    .bottom-links {
      padding-top: 50px;
    }
    .left-cell {
      text-align: justify;
      padding-right: 20px;
    }
  }
  @media only screen and (min-width: 64.063em) {
    .left-cell {
      text-align: justify;
      padding-right: 200px;
    }
  }




  .small-cell{
    padding: 10px;
    text-align: center;
  }
  .small-cell .bottom-links h5{
    text-align: left;
  }


  .home-planet-tag-small{
    padding-left: 5px;
    text-align: left;
  }

  .small-cell p{
    text-align: justify;
  }

  .bottom-spacer-medium {
    height: 20vh;
  }

  .bottom-spacer-small {
    height: 5vh;
  }

  .left-cell-small-padding{
    text-align: justify;
    padding-right: 50px;
  }

  .bottom-links h5 {
    font-weight: bold;
    padding-left: 5px;
    margin-bottom: 0px;
  }

  .tag-item {
    padding: 5px;
  }

  .home-planet-tag {
    display: inline-block;
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
    object-fit: cover;
    object-position: 50% 0%;
    max-height: 60vh;
  }
</style>
