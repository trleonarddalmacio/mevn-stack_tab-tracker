<template>
  <span>
  <v-layout>
    <v-flex xs6 class="mr-1">
      <song-metadata :song="song" />
    </v-flex >

    <v-flex xs6 class="ml-1">
      <you-tube :youtubeId="song.youtubeId"/>
    </v-flex>
  </v-layout>

   <v-layout class="row">
      <v-flex xs6 class="mt-2 mr-1">
        <panel title="Tabs">
          <textarea
            readonly
            v-model="song.tab">
          </textarea>
        </panel>
      </v-flex>
      <v-flex xs6 class="mt-2 ml-1">
        <panel title="Lyrics">
          <textarea
            readonly
            v-model="song.lyrics">
          </textarea>
        </panel>
      </v-flex>
    </v-layout>

    <v-layout class="row">
    </v-layout>
  </span>
</template>

<script>
import SongsService from '@/src/services/SongsService'
import Panel from '@/src/components/Panel'
import SongMetadata from '@/src/components/ViewSong/SongMetadata'
import YouTube from '@/src/components/ViewSong/YouTube'

export default {
  data () {
    return {
      song: null
    }
  },
  components: {
    Panel,
    SongMetadata,
    YouTube
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style>
textarea{
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
  outline: none;
}
</style>
