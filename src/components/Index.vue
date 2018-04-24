<template>
  <div class="game-page">
    <div class="center" v-if="loading">
      <i class="fas fa-compass fa-spin fa-3x"></i>
    </div>
    <div>
      <p>games finna be here</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: function () {
    return {
      games: [],
      loading: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
