<template>
  <div class="game-page row">
    <div class="center" v-if="loading">
      <i class="fas fa-compass fa-spin fa-3x"></i>
    </div>
    <div class="row">
      <p>games finna be here</p>
      <div v-if="games && games.length">
        <ul>
          <li v-for="game in games" :key="game.id" class="col-md-4 cards">
            <router-link :to="{name: 'GameDetail', params: { title: game.title } }">
              <img :src="game.img" class="img-responsive game-cover" :alt="game.title">
            </router-link>
            <!-- <h3>{{ game.title }}</h3> -->
          </li>
        </ul>
      </div>
      <div>
        <ul v-if="errors && errors.length">
          <li v-for="error of errors" :key="error.id">
            {{ error.message }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'GameList',
  data: function () {
    return {
      games: [],
      errors: [],
      loading: true
    }
  }, 
  async mounted() {
    // this.loading = true
    try {
      const response = await axios.get('https://dry-atoll-90328.herokuapp.com/api/games/')
      this.games = response.data
      this.loading = false
    }
    catch (e) {
      this.errors.push(e)
      this.loading = false
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-cover {
  height: 200px;
  width: 150px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
