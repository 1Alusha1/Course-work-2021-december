<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__logo">
        <img src="../assets/img/logo.png" alt="" />
        <p>Music-box</p>
      </div>
      <div class="footer__menu">
        <Nav></Nav>
        <Search />
      </div>
    </div>
    <hr>
    <p class="footer__info">
        <span>
            Киев 2020
        </span>
        <span>
            Європейский Университет
        </span>
    </p>
  </footer>
</template>

<script>
import Nav from "./ui/Nav.vue";
import Search from "./ui/Search.vue";
export default {
  components: { Nav, Search },
};
</script>

<style></style>
