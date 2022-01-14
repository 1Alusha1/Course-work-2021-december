<template>
  <div class="cards">
    <Card
      :chart="chart"
      :tracklist="tracklistFull ? tracklist : tracklistLess"
    />
  </div>
</template>

<script>
import Card from "./ui/Card.vue";
export default {
  props: ["tracklist", "tracklistFull", "chart"],
  components: { Card },
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
