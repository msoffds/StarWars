<template>
  <div>
    <equalizer
      :classes="['equalized']"
      :config="{
        }"
    >
      <div class="grid-x">

        <div class="cell medium-6  main-cell show-for-medium">
          <div class="equalized">
            <div class="left-cell">
              <div class="top-items">
                <h5><b>Details</b></h5>
                <div><b>Durchmesser: </b> {{data.diameter}}km</div>
                <div><b>Umlaufzeit: </b> {{data.orbital_period}}days</div>
                <div><b>Rotationszeitraum: </b> {{data.rotation_period}}hours</div>
                <div><b>Population: </b> {{data.population}}</div>
                <div><b>Gelände: </b> {{data.terrain}}</div>
                <div><b>Klima: </b> {{data.climate}}</div>
                <br>
              </div>
            </div>

            <div class="left-cell-small-padding">
              <div v-if="data.residents != undefined">
                <div class="home-planet-tag home-planet-tag-small"><b>Heimatplanet: </b></div>
                <div v-for="item in characterList" class="home-planet-tag">
                  <router-link :to="{ name: 'CharacterId', params: { id: getItemId(item) }}">
                    <div class="home-planet-tag tag-item">
                      <span class="label light-gray">{{item.name}}</span>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div class="cell small-12 medium-6 right-cell main-cell">
          <div v-if="data.name != undefined">
            <img :src="getImage(data)" class="equalized">
          </div>
        </div>


        <div class="show-for-small-only">
          <div class="cell small-12 small-cell">
            <div class="left-cell">
              <div class="top-items">
                <h5><b>Details</b></h5>
                <div><b>Durchmesser: </b> {{data.diameter}}km</div>
                <div><b>Umlaufzeit: </b> {{data.orbital_period}}days</div>
                <div><b>Rotationszeitraum: </b> {{data.rotation_period}}hours</div>
                <div><b>Population: </b> {{data.population}}</div>
                <div><b>Gelände: </b> {{data.terrain}}</div>
                <div><b>Klima: </b> {{data.climate}}</div>
                <br>
              </div>
            </div>
            <div class="left-cell-small-padding">
              <div v-if="data.residents != undefined">
                <div class="home-planet-tag home-planet-tag-small"><b>Heimatplanet: </b></div>
                <div v-for="item in characterList" class="home-planet-tag">
                  <router-link :to="{ name: 'CharacterId', params: { id: getItemId(item) }}">
                    <div class="home-planet-tag tag-item">
                      <span class="label light-gray">{{item.name}}</span>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="bottom-links ">
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
              </div>
            </div>
          </div>
        </div>

      </div>
    </equalizer>
    <div class="left-cell-small-padding show-for-medium">
      <div class="bottom-links ">
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
      </div>
    </div>
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
    name: 'planet-details',
    data: function () {
      return {
        filmsList: {
          type: Array
        },
        characterList: {
          type: Array
        },
        endpointList: {
          films: 'https://swapi.dev/api/films/',
          characters: 'https://swapi.dev/api/people/',
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
          if (this.data.residents.length > 0)
            this.getAllCharacters()
          if (this.data.films.length > 0)
            this.getAllFilms()
        }
      },

    },
    methods: {
      getImage (data) {
        return 'src/assets/image_assets/' + data.name + '_Planet.png'
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
      getAllCharacters () {
        axios.get(this.endpointList.characters).then(response => {
          this.characterList = response.data.results.filter(m =>
            this.data.residents.filter(f => f === (m.url)).length > 0
          )
        }).catch(error => {
          console.log('-----error-------')
          console.log(error)
        })
      },
      getHomePlanet (item) {
        if (this.planetsList !== undefined && this.planetsList.length > 0)
          return this.planetsList.find(f => f.url === item.homeworld).name
        return ''
      },
      getItemId (item) {
        if (item.url !== undefined)
          return item.url.substr(item.url.lastIndexOf('/', item.url.lastIndexOf('/') - 1) + 1, item.url.length - item.url.lastIndexOf('/', item.url.lastIndexOf('/') - 1) - 2)
        return ''
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
    img {
      max-height: 60vh;
      width: 100%;
      padding: 10px;
      object-fit: cover;
      object-position: 50% 0%;
    }
  }

  @media screen and (min-width: 40em) {
    .bottom-links {
      padding-top: 50px;
    }
    img {
      max-height: 60vh;
      width: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  .left-cell {
    text-align: justify;
    padding-right: 200px;
  }

  .left-cell-small-padding {
    text-align: justify;
    padding-right: 50px;
  }

  .small-cell {
    padding: 10px;
    text-align: center;
  }

  .small-cell .bottom-links h5 {
    text-align: left;
  }

  .home-planet-tag-small {
    padding-left: 5px;
    text-align: left;
  }

  .small-cell p {
    text-align: justify;
  }

  .bottom-spacer-medium {
    height: 20vh;
  }

  .bottom-spacer-small {
    height: 5vh;
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


</style>
