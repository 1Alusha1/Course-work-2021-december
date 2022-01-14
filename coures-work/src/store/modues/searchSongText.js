export default {
  namespaced: true,
  state() {
    return {
      tracks: [],
    };
  },
  mutations: {
    SET_TRACKS: (state, data) => state.tracks.push(data),
    SET_EMPTYTRACKS: (state, data) => (state.tracks = data),
  },
  actions: {
    async searchSongText({ commit, state }, inputdata) {
      const res = await fetch(
        `https://genius.p.rapidapi.com/search?q=${inputdata}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "genius.p.rapidapi.com",
            "x-rapidapi-key":
              "8fb73892e6msh99100563d2ddd67p1b461fjsn25dd457f7f5e",
          },
        }
      );
      const data = res.json();

      data.then((data) => {
        console.log(data)
        state.tracks.length >= 1 ? commit("SET_EMPTYTRACKS", []) : false
        data.response.hits.map((item) => {
          commit("SET_TRACKS", {
            url: item.result.url,
            trackName: item.result.full_title,
            artist: item.result.artist_names,
            image: item.result.header_image_url,
          });
        });
      });
    },
  },
  getters: {
    tracks: (state) => state.tracks,
  },
};
