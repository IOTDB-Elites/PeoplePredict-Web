import Vue from 'vue'
import Vuex from 'vuex'
import config from './modules/config'
import district from './modules/district'
import point from './modules/point'
import createLogger from 'vuex/dist/logger'
import BaiduMap from 'vue-baidu-map'

Vue.use(Vuex)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'wAuWPT9lNOfkYQ68GIZbXN1ROnEwRGfd'
})

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    config,
    point,
    district
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
