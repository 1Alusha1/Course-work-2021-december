<template>
  <div class="cards">
    <card-comp
      :chart="chart"
      :tracklist="tracklistFull ? tracklist : tracklistLess"
    />
  </div>
</template>

<script>
import CardComp from "./ui/Card-comp.vue";
export default {
  props: ["tracklist", "tracklistFull", "chart"],
  components: { CardComp },
  data() {
    return {
      tracklistLess: [],
    };
  },
  mounted() {
    for (let i = 0; i < 6; i++) {
      this.tracklistLess.push(this.tracklist[i]);
    }
  },
};
</script>

<style></style>
