const state = {
  darkTheme: true,
};

const actions = {
  enableDarkTheme({ commit }) {
    commit('SET_DARK_THEME', true);
  },

  disableDarkTheme({ commit }) {
    commit('SET_DARK_THEME', false);
  },
};

const mutations = {
  // eslint-disable-next-line
  SET_DARK_THEME(state, enabled) {
    // eslint-disable-next-line
    state.darkTheme = enabled
  },
};

const getters = {
  darkTheme: ({ darkTheme }) => darkTheme,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
