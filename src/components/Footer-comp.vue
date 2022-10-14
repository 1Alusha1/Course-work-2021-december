<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__logo">
        <img src="../assets/img/logo.png" alt="" />
        <p>Music-box</p>
      </div>
      <div class="footer__menu">
        <nav-ui></nav-ui>
        <Search />
      </div>
    </div>
    <hr>
    <p class="footer__info">
        <span>
            Киев 2022
        </span>
        <span>
            Європейський Університет
        </span>
    </p>
  </footer>
</template>

<script>
import NavUi from "./ui/Nav-ui.vue";
import Search from "./ui/Search.vue";
export default {
  components: { NavUi, Search },
};
</script>

<style></style>
