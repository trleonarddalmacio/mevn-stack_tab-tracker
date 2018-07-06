<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          required
          :rules="[required]"
          label="Title"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          required
          :rules="[required]"
          label="Artist"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          required
          :rules="[required]"
          label="Genre"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          required
          :rules="[required]"
          label="Album"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          required
          :rules="[required]"
          label="Album Image Url"
          v-model="song.albumImageUrl"
        ></v-text-field>

        <v-text-field
          required
          :rules="[required]"
          label="YouTube ID"
          v-model="song.youtubeId"
        ></v-text-field>

      </panel>
    </v-flex>
    <v-flex class="xs8">
      <panel title="Song Structure" class="ml-2">
        <v-text-field
          multi-line
          required
          :rules="[required]"
          label="Tab"
          v-model="song.tab"
        ></v-text-field>

        <v-text-field
          multi-line
          required
          :rules="[required]"
          label="Lyrics"
          v-model="song.lyrics"
        ></v-text-field>

        <div class="red--text">{{error}}</div>

        <v-btn
          dark
          class="cyan"
          @click="create">
          Create Song
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/src/components/Panel'
import SongsService from '@/src/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
      } else {
        try {
          await SongsService.post(this.song)
          this.$router.push({
            name: 'songs'
          })
        } catch (err) {
          console.log(err)
        }
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
