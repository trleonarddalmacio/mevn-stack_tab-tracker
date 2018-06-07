<template>
  <v-layout class="row">
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn slot="action"
          :to="{name: 'songs-create'}"
          class="cyan lighten-5"
          light
          medium
          absolute
          right
          middle
          small>
          <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="song.id">
          <v-layout class="row">
            <v-flex xs6 class="valign-center">
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>
              <v-btn
                dark
                class="cyan"
                :to="`/songs/${song.id}`">
                View Song
            </v-btn>
            </v-flex>
            <v-flex xs6>
              <img :src="song.albumImageUrl" class="album-image">
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from './Panel'
import SongsService from '../services/SongsService.js'

export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
.album-image{
  width: 70%;
  margin: 0 auto;
}
.song {
  padding: 1.25rem 0;
  overflow: hidden;
}
.song-title {
  font-size: 1.875rem;
  font-weight:900;
}
.song-artist {
  font-size: 1.5rem;
  font-weight: 600;
}
.song-genre {
  font-size: 1rem;
  font-weight: 400;
}
</style>
