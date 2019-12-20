import * as districtApi from '../../api/district'

const state = {
  district: '雁塔区',
  calendarData: [],
  maxDistrictData: 0,
  minDistrictData: 0,
  districtTreemap: []
}

// actions
const actions = {
  fetchDistrictPoint ({commit}, {district}) {
    districtApi.fetchDistrictPoint(data => {
      commit('saveDistrict', district)
      commit('saveCalendar', data)
    }, district.name)
  },
  fetchDistrictTreemap ({commit}, {district}) {
    districtApi.fetchDistrictTreemap(data => {
      commit('saveDistrictTreemap', data.data)
    }, district)
  },
}

// mutations
const mutations = {
  'saveDistrict' (state, district) {
    state.district = district.name
  },
  'saveCalendar' (state, data) {
    state.calendarData = data.calendar_res
    state.maxDistrictData = data.max_val
    state.minDistrictData = data.min_val
  },
  'saveDistrictTreemap' (state, districtTreemap) {
    state.districtTreemap = districtTreemap
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
