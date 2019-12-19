<template>

  <div ref="districtMap" :style="{width: '100%', height: '570px'}"></div>

</template>

<script type="text/babel">
  import echarts from 'echarts'

  export default {
    name: 'district-map',
    components: {},
    data () {
      return {}
    },
    watch: {
      '$route': 'setEchart'
    },
    methods: {
//      throttle (fn, delay, debounce) {
//        delay = delay || 0
//        let scope
//        let lastCall = 0
//        let lastExec = 0
//        let timer = null
//        let diff
//        let args
//
//        function exec () {
//          lastExec = (new Date()).getTime()
//          fn.apply(scope, args || [])
//        }
//
//        return function () {
//          let currCall = (new Date()).getTime()
//          scope = this
//          args = arguments
//          diff = currCall - (debounce ? lastCall : lastExec) - delay
//
//          clearTimeout(timer)
//
//          if (debounce) {
//            timer = setTimeout(exec, delay)
//          } else {
//            if (diff >= 0) {
//              exec()
//            } else {
//              timer = setTimeout(exec, -diff)
//            }
//          }
//
//          lastCall = currCall
//        }
//      },
      setEchart () {
        let myChart = echarts.init(this.$refs.districtMap)
        let option = {
          animation: false,
          backgroundColor: '#4b5769',
          tooltip: {
            trigger: 'axis'
          },
          geo: {
            map: '北京',
            // silent: true,
            roam: true,
            zoom: 1.155, // 地图初始大小
            center: [116.366794, 40.400309], // 初始中心位置
            label: {
              emphasis: {
                show: false,
                areaColor: '#eee'
              }
            },
            // 地区块儿颜色
            itemStyle: {
              normal: {
                areaColor: '#55C3FC',
                borderColor: '#fff'
              },
              emphasis: {
                areaColor: '#21AEF8'
              }
            }
          },
          series: [],
          xAxis: [],
          yAxis: [],
          grid: []
        }

        const geoCoordMap = {
          '东城区': [116.418757, 39.937544],
          '西城区': [116.366794, 39.910309],
          '朝阳区': [116.486409, 39.991489],
          '丰台区': [116.286968, 39.863642],
          '石景山区': [116.170445, 39.974601],
          '海淀区': [116.280316, 40.039074],
          '门头沟区': [115.905381, 40.009183],
          '房山区': [115.701157, 39.735535],
          '通州区': [116.758603, 39.802486],
          '顺义区': [116.753525, 40.128936],
          '昌平区': [116.235906, 40.318085],
          '大兴区': [116.338033, 39.658908],
          '怀柔区': [116.607122, 40.524272],
          '平谷区': [117.112335, 40.244783],
          '密云区': [116.943352, 40.477362],
          '延庆区': [115.985006, 40.465325]
        }

        const rawData = [
          ['朝阳区', 10, 20, 30],
          ['丰台区', 10, 20, 30],
          ['石景山区', 10, 20, 30],
          ['海淀区', 10, 20, 30],
          ['门头沟区', 10, 20, 30],
          ['房山区', 10, 20, 30],
          ['通州区', 10, 20, 30],
          ['顺义区', 10, 20, 30],
          ['昌平区', 10, 20, 30],
          ['大兴区', 10, 20, 30],
          ['怀柔区', 10, 20, 30],
          ['平谷区', 10, 20, 30],
          ['密云区', 10, 20, 30],
          ['延庆区', 10, 20, 30]
        ]

        echarts.util.each(rawData, function (dataItem, idx) {
          let geoCoord = geoCoordMap[dataItem[0]]
          let coord = myChart.convertToPixel('geo', geoCoord)
          idx += ''

          const inflationData = [30, 50, 20]
          option.xAxis.push({
            id: idx,
            gridId: idx,
            type: 'category',
            name: dataItem[0],
            nameLocation: 'middle',
            nameGap: 3,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#666'
              }
            },
            data: ['数据A', '数据B', '数据C'],
            z: 100

          })
          option.yAxis.push({
            id: idx,
            gridId: idx,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#1C70B6'
              }
            },
            z: 100
          })
          option.grid.push({
            id: idx,
            width: 30,
            height: 40,
            left: coord[0] - 15,
            top: coord[1] - 15,
            z: 100
          })
          option.series.push({
            id: idx,
            type: 'bar',
            xAxisId: idx,
            yAxisId: idx,
            barGap: 0,
            barCategoryGap: 0,
            data: inflationData,
            z: 100,
            itemStyle: {
              normal: {
                color: function (params) {
                  const colorList = ['#F75D5D', '#59ED4F', '#4C91E7']
                  return colorList[params.dataIndex]
                }
              }
            }
          })
        })

        myChart.setOption(option)
//        myChart.on('geoRoam', this.throttle(this.renderEachCity(myChart), 0))
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.setEchart()
      })
    }
  }
</script>
