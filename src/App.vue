<template>
  <div>
    <div class="container">
      <header-comp></header-comp>
      <router-view />
    </div>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from './components/Header-comp.vue';
import FooterComp from './components/Footer-comp.vue';
export default {
  components: { HeaderComp, FooterComp },
  mounted() {
    this.$store.dispatch('chart/getChartTrack');
    this.$store.dispatch('recomendet/getRecomendet');
  },
};
</script>

<style lang="scss"></style>
