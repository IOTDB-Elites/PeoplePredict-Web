<template>

  <div ref="linearChart" :style="{width: '100%', height: '330px'}"></div>

</template>

<script type="text/babel">
  import echarts from 'echarts'
  import { mapActions, mapState, mapMutations } from 'vuex'

  export default {
    name: 'linear-chart',
    components: {},
    data () {
      return {}
    },
    computed: {
      ...mapState('district', {
        districtLine: state => state.districtLine
      })
    },
    watch: {
      districtLine () {
        this.setEchart()
      }
    },
    methods: {
      getThemeData () {
        const legend = ['7时', '12时', '15时', '20时', '21时']
        const rawData = this.districtLine
        let data = []
        for (let i = 1; i < rawData.length; i++) {
          for (let j = 0; j < rawData[i].length; j++) {
            data.push([
              rawData[0][j], rawData[i][j], legend[i - 1]
            ])
          }
        }
        return data
      },
      setEchart () {
        let myChart = echarts.init(this.$refs.linearChart)
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line',
              lineStyle: {
                color: 'rgba(0,0,0,0.2)',
                width: 1,
                type: 'solid'
              }
            }
          },
          legend: {
            data: ['7时', '12时', '15时', '20时', '21时']
          },
//          xAxis: {
//            type: 'category',
//            data: this.districtLine[0]
//          },
//          yAxis: {
//            type: 'value',
//            min: 'dataMin'
//          },
          singleAxis: {
            top: 50,
            bottom: 50,
            axisTick: {},
            axisLabel: {},
            type: 'time',
            axisPointer: {
              animation: true,
              label: {
                show: true
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                opacity: 0.2
              }
            }
          },
          series: [
            {
              type: 'themeRiver',
              data: this.getThemeData(),
              label: {
                normal: {
                  show: false
                }
              }
            }
//            {
//              name: '7时',
//              type: 'line',
//              data: this.districtLine[1],
//              smooth: true
//            },
//            {
//              name: '12时',
//              type: 'line',
//              data: this.districtLine[2],
//              smooth: true
//            },
//            {
//              name: '15时',
//              type: 'line',
//              data: this.districtLine[3],
//              smooth: true
//            },
//            {
//              name: '20时',
//              type: 'line',
//              data: this.districtLine[4],
//              smooth: true
//            },
//            {
//              name: '21时',
//              type: 'line',
//              data: this.districtLine[5],
//              smooth: true
//            }
          ]
        })
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.setEchart()
      })
    }
  }
</script>
