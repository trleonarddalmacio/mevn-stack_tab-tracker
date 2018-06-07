<template>
  <div>
  </div>
</template>

<script>
import SongsService from '@/src/services/SongsService'

export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>

</style>
