export default {
  namespaced: true,
  state() {
    return {
      chart: [],
    };
  },
  mutations: {
    // заполняет массив chart
    SET_CHART: (state, track) => state.chart.push(track),
  },
  actions: {
    /**
     * action - асинхронные операции
     * отправляем ajax запрос на шазам апи
     *  в метод передаем параметр commit что бы обратится к мутациям 
     */
    async getChartTrack({ commit }) {
      const res = await fetch(
        `https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0`,
        {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "8fb73892e6msh99100563d2ddd67p1b461fjsn25dd457f7f5e"
          }
        }
      );
      const data = res.json();
      data.then((data) => {
        /**
         * формирую нужную информацию
         * и записываею ее в мутацию SET_CHART с помощью commit 
         */
        data.tracks.forEach((item) => {
          commit("SET_CHART", {
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
    // просто возвращает массив чарт
    chart: (state) => state.chart,
  },
};
