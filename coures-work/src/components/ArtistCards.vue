<template>
  <div class="artist-card">
      <img :src="artist.avatar" alt="" />
    <div class="artist-cards__body">
      <div class="artist__name"><span>Исполнитель:</span> {{ artist.name }}</div>
      <div class="artist__link">
        <a :href="artist.weburl">Профиль Артиста</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["artist"],
};
</script>

<style></style>
