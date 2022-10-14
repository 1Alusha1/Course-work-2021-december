<template>
  <main class="main">
    <Load class="load" v-if="load && !tracks.length" />
    <Search class="s-c" @keydown.enter="load = !load" />
    <cards-comp :tracklist="emptyTracks" :tracklistFull="true" :chart="true" />
  </main>
</template>

<script>
import Search from "../components/ui/Search.vue";
import CardsComp from "../components/Cards-comp.vue";
import Load from "../components/ui/Load.vue";
import { mapGetters } from "vuex";
export default {
  components: { Search, CardsComp, Load },
  data() {
    return {
      load: false,
    };
  },
  computed: {
    ...mapGetters({
      tracks: "searchSongText/tracks",
    }),
    emptyTracks() {
      return this.tracks.length ? this.tracks : {};
    },
  },
};
</script>
<style></style>