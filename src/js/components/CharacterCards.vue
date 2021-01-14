<template>
  <div>
    <equalizer
      :classes="['equalized']"
      :config="{
        }"
    >
      <div class="grid-x small-up-1 medium-up-2 large-up-3">
        <div v-for="item in data.results" class="cell card-cell">
          <div class="card">
            <router-link :to="{ name: 'CharacterId', params: { id: getCharacterId(item) }}">
              <img :src="getImage(item)" class="equalized">
            </router-link>

            <div class="card-section">
              <div class="card-top">
                <h4><b>
                  <router-link :to="{ name: 'CharacterId', params: { id: getCharacterId(item) }}">{{ item.title }}
                    {{ item.name }}
                  </router-link>
                </b></h4>
                <p>Geschlecht: {{item.gender}} Höhe: {{item.height}}
                  <br>Masse: {{item.mass}} Haarfarbe: {{item.hair_color}}
                  <br>Geburtsjahr: {{item.birth_year}}
                </p>
              </div>
              <div class="card-bottom">
                <b>
                  <router-link :to="{ name: 'CharacterId', params: { id: getCharacterId(item) }}">Mehr Informationen....
                  </router-link>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </equalizer>


  </div>


</template>

<script>
  import equalizer from "vue-equalizer";
  export default {
    components:{
      equalizer
    },
    name: 'character-cards',
    data () {
      return {}
    },
    props: {
      data: {
        type: Object
      }
    },
    methods: {
      getCharacterId (item) {
        return item.url.substr(item.url.lastIndexOf('/', item.url.lastIndexOf('/')-1) +1,item.url.length-item.url.lastIndexOf('/', item.url.lastIndexOf('/')-1)-2)
      },
      getImage (item) {
        return "src/assets/image_assets/Character_"+this.getCharacterId(item)+".png"
      },

    },
    updated:function(){
      this.$nextTick(function () {
        window.dispatchEvent(new Event('resize'));
      })
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    text-align: left;
    height: 100%;
  }

  .card-cell {
    padding: 24px;
  }

  .card-section {
    padding: 0px;
  }

  .card-top {
    position: relative;
    top: 0px;
    left: 0px;
    height: calc(100% - 44px);
    width: 100%;
    padding: 24px;
  }

  .card-bottom {
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 44px;
    width: 100%;
    padding-left: 24px;
  }

  .card-section {
    position: relative;
  }

  a {
    color: #10172C;
  }

  img{
    width: 100%;
    object-fit: cover;
    object-position: 50% 0%;
    max-height: 60vh;
  }
</style>
