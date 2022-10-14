<template>
  <div class="search">
    <button @click="search">
      <img src="../../assets/img/search.png" alt="" />
    </button>
    <input
      type="text"
      v-model="inputData"
      @change="this.$store.commit('SET_SEARCHDATA', inputData)"
      @keydown.enter="search"
      placeholder="Автор или название песни"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputData: "",
    };
  },
  methods: {
    search() {
      if (this.$route.path === "/songtext") {
        this.$store.dispatch("searchSongText/searchSongText", this.inputData);
        this.inputData = "";
      } else {
        this.$store.dispatch("search/search", this.inputData);
        this.$router.push("/artist");
        this.inputData = "";
      }
    },
  },
};
</script>

