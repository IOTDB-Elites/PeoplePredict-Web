import * as pointApi from '../../api/point'

const state = {
  statistic: null,
  pointData: []
}

// actions
const actions = {
  fetchPointData ({commit}, {config}) {
    pointApi.fetchPointData(data => {
      commit('savePointData', data)
    }, config)
  }
}

// mutations
const mutations = {
  'savePointData' (state, result) {
    state.pointData = result.data
    state.statistic = result.statistic
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
