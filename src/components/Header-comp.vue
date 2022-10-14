<template>
  <header class="header">
    <div class="header__logo" @click="this.$router.push('/')">
      <img src="../assets/img/logo.png" alt="" />
      <p>Music-box</p>
    </div>
    <div class="header__menu" :class="{ active: getBurger }">
      <div class="header__menu-wrap">
        <nav-ui :burgerActive="getBurger" class="header__nav"></nav-ui>
        <Search />
      </div>
    </div>
    <div class="burger hide" @click="$store.commit('SET_BURGER')">
      <span class="f" :class="{ active: getBurger }"></span>
      <span class="s" :class="{ active: getBurger }"></span>
      <span class="l" :class="{ active: getBurger }"></span>
    </div>
  </header>
</template>

<script>
import NavUi from './ui/Nav-ui.vue';
import Search from './ui/Search.vue';
export default {
  components: { NavUi, Search },
  data() {
    return {};
  },
  computed: {
    getBurger() {
      console.log(this.$store.getters['burger']);
      return this.$store.getters['burger'];
    },
  },
};
</script>

<style></style>
