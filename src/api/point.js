import axios from 'axios'

const root = process.env.API_HOST

export function fetchPointData (callback, config) {
  axios.get('/get_radius_data', {
    params: {
      month: Number(config.month),
      day: Number(config.day),
      hour: config.time === '按天聚合' || config.time === '按周聚合' ? 7 : Number(config.time),
      lng: config.lng,
      lat: config.lat,
      radius: config.radius,
      aggregate: config.time === '按天聚合' || config.time === '按周聚合' ? 1 : 0
    }
  })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
