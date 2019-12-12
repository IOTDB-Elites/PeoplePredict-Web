import * as listApi from '../../api/list'
import * as mapApi from '../../api/map'

const state = {
  rankList: [],
  mapData: [],
  maxData: 0
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
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
