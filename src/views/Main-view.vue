<template>
  <main class="main">
    <Load class="load" v-if="!chart.length" />
    <template v-else>
      <p class="title">ТОП ЧАРТОВ:</p>
      <cards-comp :tracklistFull="showAll" :tracklist="chart" :chart="true" />
      <button class="btn main-btn" @click="showAll = true" v-if="!showAll">
        Показать больше
      </button>
      <p class="title">Рекомендации:</p>
      <cards-comp
        class="card-line"
        :tracklistFull="true"
        :tracklist="rec"
        :chart="true"
      />
    </template>
  </main>
</template>

<script>
import CardsComp from '../components/Cards-comp';
import Load from '../components/ui/Load';
import { mapGetters } from 'vuex';

export default {
  components: { CardsComp, Load },
  data() {
    return {
      showAll: false,
    };
  },
  computed: {
    ...mapGetters({
      chart: 'chart/chart',
      rec: 'recomendet/rec',
    }),
  },
};
</script>

<style></style>
