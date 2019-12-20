import axios from 'axios'

const root = process.env.API_HOST

export function fetchDistrictData (callback, config) {
  axios.get('/get_all_district', {
    params: {
      month: Number(config.month),
      day: Number(config.day),
    }
  })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchDistrictPoint (callback, name) {
  axios.get('/get_district_point', {
    params: {
      name: name,
    }
  })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchDistrictTreemap (callback, name) {
  axios.get('/get_district_treemap', {
    params: {
      name: name,
    }
  })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
