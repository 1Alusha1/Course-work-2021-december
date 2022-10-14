export default {
  namespaced: true,
  state() {
    return {
      artist: "",
      artistTrack: [],
    };
  },
  mutations: {
    SET_ARTIST: (state, data) => (state.artist = data),
    SET_ARTISTTRACK: (state, data) => (state.artistTrack = data),
  },
  actions: {
    /**
     * метод search принимает аргументы commit и name
     * в name должно попадать либо имя исполнителя либо названте трека
     */
    async search({ commit }, name) {
      const res = await fetch(
        `https://shazam.p.rapidapi.com/search?term=${name}&locale=en-US&offset=0&limit=5`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key":
              "8fb73892e6msh99100563d2ddd67p1b461fjsn25dd457f7f5e",
          },
        }
      );
      const data = res.json();
      data.then((data) => {
        // заполняюю данные в state с помощью commit
        commit("SET_ARTIST", data.artists.hits[0].artist);
        commit("SET_ARTISTTRACK", data.tracks.hits);
      });
    },
  },
  getters: {
    // возвращаю данные из state
    artist: (state) => state.artist,
    artistTrack: (state) => state.artistTrack,
  },
};
