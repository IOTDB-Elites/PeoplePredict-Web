import * as listApi from '../../api/list'

const state = {
  rankList: [],
}

// actions
const actions = {
  fetchRankList ({commit}, {config}) {
    listApi.fetchRankList(data => {
      commit('saveRankList', data)
    }, config)
  }
}

// mutations
const mutations = {
  'saveRankList' (state, rankList) {
    state.rankList = rankList
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
