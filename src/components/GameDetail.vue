<template>
<div>
  <h3>{{game.title}}</h3>
  <img :src="game.img" class="img-responsive game-cover" :alt="game.title">
</div>
</template>

<script>
export default {
  name: 'GameDetail',
  data: function () {
    return {
      game: this.$route.params.game
    }
  }
}
</script>

<style scoped>

</style>
