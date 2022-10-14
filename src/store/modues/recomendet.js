export default {
  namespaced: true,
  state() {
    return {
      rec: [],
    };
  },
  mutations: {
    SET_REC: (state, data) => state.rec.push(data),
  },
  actions: {
    async getRecomendet({ commit }) {
      const res = await fetch(
        "https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US",
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
        data.tracks.forEach((item) => {
          commit("SET_REC", {
            url: item.url,
            trackName: item.title,
            artist: item.subtitle,
            image: item.images.coverart,
          });
        });
      });
    },
  },
  getters: {
    rec: (state) => state.rec,
  },
};
