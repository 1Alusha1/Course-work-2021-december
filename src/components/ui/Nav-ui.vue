<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link @click="$store.commit('SET_BURGER')" to="/artist"
          >АРТИСТИ</router-link
        >
      </li>
      <li>
        <router-link @click="$store.commit('SET_BURGER')" to="/songtext"
          >ТЕКСТ ПЕСНІ</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
