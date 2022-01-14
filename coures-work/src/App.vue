<template>
  <div class="container">
    <Header></Header>
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Header, Footer },
  mounted() {
    this.$store.dispatch("chart/getChartTrack");
    this.$store.dispatch('recomendet/getRecomendet');
  },
};
</script>

<style lang="scss"></style>
