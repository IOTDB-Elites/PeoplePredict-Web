import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    list
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
