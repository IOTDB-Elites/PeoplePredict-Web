import axios from 'axios'

const root = process.env.API_HOST

export function fetchRankList (callback, config) {
  axios.get('/get_top_ten_street', {
    params: {
      month: Number(config.month),
      day: Number(config.day),
      hour: Number(config.time),
      aggregate: config.time === '按天聚合' ? 1 : config.time === '按周聚合' ? 2 : 0
    }
  })
    .then(function (response) {
      callback(response.data.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
