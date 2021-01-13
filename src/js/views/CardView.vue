<template>
  <div class="card-view">
    <h1 class="title">{{pageName}}</h1>
    <div class="main-content">
      <div class="grid-x">
        <div class="cell small medium-1 large-2"></div>
        <div class="cell small-12 medium-10 large-8">

          <div class="grid-x grid-padding-x small-up-1 medium-up-2 large-up-3">
            <div class="cell">
              <div class="card">
                <img src="https://placehold.it/300x400">
                <div class="card-section">
                  <h4><b>Thumbnail label</b></h4>

                  <p style="padding-top: 10px;padding-bottom: 10px;">Director:Gorge Lucas
                  <br>ProducentenP:asdasd
                  <br>Ershanungnstgs : 124124
                  </p>

                  <p><b>test</b></p>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div class="cell small medium-1 large-2"></div>

      </div>



    </div>
  </div>

</template>

<script>
  export default {
    name: 'card-view',
    data () {
      return {
        pageName: 'Filme',
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-view {
    overflow-y: scroll;
    background: #FFFFFF;
    height: calc(100vh - var(--toolbar-height));
  }

  .title {
    font-size: 75px;
    font-weight: bold;
    margin: 0;
    padding: 10vh 0 10vh 0;
  }

  .card{
    text-align: left;
  }
  .card-section{
    padding: 24px;
  }
</style>
