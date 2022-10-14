<template>
  <main class="main">
    <Search class="s-c" @keydown.enter="load = !load" />
    <ArtistCards v-if="showList" :artist="artist" />
    <Load class="load" v-if="load && !artistTrack.length" />
    <template v-if="showList">
      <p class="title">Треки исполнителя</p>
      <cards-comp
        :chart="false"
        :tracklist="artistTrack"
        :tracklistFull="true"
      />
    </template>
  </main>
</template>

<script>
import CardsComp from '../components/Cards-comp.vue';
import Load from '../components/ui/Load.vue';
import Search from '../components/ui/Search.vue';
import ArtistCards from '../components/Artist-cards.vue';
import { mapGetters } from 'vuex';
export default {
  components: { CardsComp, Load, Search, ArtistCards },
  data() {
    return {
      load: false,
    };
  },
  computed: {
    ...mapGetters({
      artistTrack: 'search/artistTrack',
      artist: 'search/artist',
    }),
    showList() {
      return this.artistTrack.length ? true : false;
    },
  },
};
</script>

<style></style>
