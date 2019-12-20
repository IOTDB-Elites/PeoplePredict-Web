import * as listApi from '../../api/list'
import * as mapApi from '../../api/map'
import * as districtApi from '../../api/district'

const state = {
  rankList: [],
  mapData: [],
  maxData: 0,
  configs: {},
  districtData: []
}

// actions
const actions = {
  fetchRankList ({commit}, {config}) {
    listApi.fetchRankList(data => {
      commit('saveRankList', data)
      commit('saveMaxData', data[0].val * 0.9)
    }, config)
  },
  fetchMapData ({commit}, {config}) {
    mapApi.fetchMapData(data => {
      commit('saveMapData', data)
    }, config)
  },
  fetchDistrictData ({commit}, {config}) {
    districtApi.fetchDistrictData(data => {
      commit('saveDistrictData', data.data)
    }, config)
  }
}

// mutations
const mutations = {
  'saveRankList' (state, rankList) {
    state.rankList = rankList
  },
  'saveMapData' (state, mapData) {
    state.mapData = mapData
  },
  'saveMaxData' (state, maxData) {
    state.maxData = maxData
  },
  'saveConfig' (state, configs) {
    state.configs = configs
  },
  'saveDistrictData' (state, districtData) {
    state.districtData = districtData
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
