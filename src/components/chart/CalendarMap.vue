<template>

  <div ref="calendarMap" :style="{width: '100%', height: '240px'}"></div>

</template>

<script type="text/babel">
  import echarts from 'echarts'
  import { mapActions, mapState, mapMutations } from 'vuex'

  export default {
    name: 'district-map',
    components: {},
    data () {
      return {}
    },
    computed: {
      ...mapState('district', {
        calendarData: state => state.calendarData,
        maxDistrictData: state => state.maxDistrictData,
        minDistrictData: state => state.minDistrictData
      })
    },
    watch: {
      calendarData () {
        this.setEchart()
      }
    },
    methods: {
      setEchart () {
        const myChart = echarts.init(this.$refs.calendarMap)
        let option = {
          tooltip: {
            position: 'top',
            formatter: function (p) {
              return echarts.format.formatTime('yyyy-MM-dd', p.data[0]) + ': ' + p.data[1]
            }
          },
          visualMap: {
            min: this.minDistrictData,
            max: this.maxDistrictData,
            calculable: true,
            left: 0,
            bottom: 0,
            orient: 'horizontal',
          },
          calendar: [{
            orient: 'vertical',
            range: ['2019-08-20', '2019-09-23'],
            yearLabel: {
              show: false
            },
            monthLabel: {
              nameMap: 'cn',
              margin: 20
            },
            dayLabel: {
              nameMap: 'cn'
            },
            cellSize: 20
          }],
          series: [{
            type: 'heatmap', // 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            symbolSize: function (val) {
              return val[1] / 80
            },
            data: this.calendarData
          }]
        }
        myChart.setOption(option)
      }
    },
    mounted () {
      this.setEchart()
    }
  }
</script>
