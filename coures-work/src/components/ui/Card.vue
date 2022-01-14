<template>
  <div class="cards__wrap" v-if="chart">
    <div
      class="card animate__animated animate__backInUp animate__dilay-1s"
      :class="`animate__duration-0.${idx}s`"
      v-for="(item, idx) in tracklist"
      :key="idx"
    >
      <div class="card__img">
        <img :src="item.image" alt="" />
      </div>
      <div class="card__body">
        <div class="artist__name">
          Исполнитель: <span>{{ item.artist }}</span>
        </div>
        <div class="track__name">
          Название песни: <span>{{ item.trackName }}</span>
        </div>

        <div class="trackLink">
          <p>
            <a :href="item.url" target="black">Слушать</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="cards__wrap" v-else>
    <div
      class="card animate__animated animate__backInUp animate__dilay-1s"
      v-for="(item, idx) in tracklist"
      :key="idx"
    >
      <div class="card__img">
        <img :src="item.track.images.coverart" alt="" />
      </div>
      <div class="card__body">
        <div class="artist__name">
          Исполнитель: <span>{{ item.track.subtitle }}</span>
        </div>
        <div class="track__name">
          Название песни: <span>{{ item.track.title }}</span>
        </div>

        <div class="trackLink">
          <p>
            <a :href="item.track.url" target="black">Слушать</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tracklist", "chart"],
};
</script>

<style></style>
