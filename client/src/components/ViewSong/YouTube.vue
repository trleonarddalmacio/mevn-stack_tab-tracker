<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="700"
      :player-height="400">
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/src/components/Panel'
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

export default {
  components: {
    Panel
  },
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>

</style>
