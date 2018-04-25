<template>
<div>
  <h3>{{game.title}}</h3>
  <img :src="game.img" class="img-responsive game-cover" :alt="game.title">
  <div v-if="posts && posts.length" class="col-sm-8">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <div>
          {{post.content}}
        </div>
        <!-- <router-link :to="{name: 'GameDetail', params: { title: game.title, game: game } }">
          <img :src="game.img" class="img-responsive game-cover" :alt="game.title">
        </router-link> -->
        <!-- <h3>{{ game.title }}</h3> -->
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'GameDetail',
  data: function () {
    return {
      game: this.$route.params.game,
      posts: []
    }
  },
  mounted() {
    this.posts = this.game.posts
  }
}
</script>

<style scoped>

</style>
