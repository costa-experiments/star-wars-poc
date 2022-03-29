// eslint-disable-next-line
import Vuex from 'vuex'
import theme from './theme';

const createStore = () => new Vuex.Store({
  modules: {
    theme,
  },
});

export default createStore;
