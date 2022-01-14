<template>
  <header class="header">
    <div class="header__logo" @click="this.$router.push('/')">
      <img src="../assets/img/logo.png" alt="" />
      <p>Music-box</p>
    </div>
    <div class="header__menu" :class="{ active: active }">
      <div class="header__menu-wrap">
        <Nav :burgerActive="active" class="header__nav"></Nav>
        <Search />
      </div>
    </div>
    <div class="burger hide" @click="active = !active">
      <span class="f" :class="{ active: active }"></span>
      <span class="s" :class="{ active: active }"></span>
      <span class="l" :class="{ active: active }"></span>
    </div>
  </header>
</template>

<script>
import Nav from "./ui/Nav.vue";
import Search from "./ui/Search.vue";
export default {
  components: { Nav, Search },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style></style>
