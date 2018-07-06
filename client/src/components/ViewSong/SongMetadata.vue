<template>
  <panel title="Song Metadata">
    <div class="song">
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
        </v-flex>
        <v-flex xs6 class="album-image-container">
          <img :src="song.albumImageUrl" class="album-image">
          <p class="song-album">{{song.album}}</p>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import Panel from '@/src/components/Panel'

export default {
  components: {
    Panel
  },
  props: [
    'song'
  ]
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
.song-album {
  font-size: 1.5rem;
  font-weight: 600;
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
