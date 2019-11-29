<template>

  <div ref="map" :style="{width: '100%', height: '300px'}"></div>

</template>

<script type="text/babel">

  import { mapState, mapActions } from 'vuex'
  import { store } from '../../main'
  import echarts from 'echarts'
  import $ from 'jquery'
  import BMap from 'vue-baidu-map/components/map/Map.vue'

  export default {
    name: 'bar-chart',
    components: {},
    data () {
      return {}
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'setEchart',
      y (oldY, newY) {
        this.setEchart()
      }
    },
    computed: {},
    methods: {
      setEchart () {
        $.get('https://echarts.apache.org/examples/data/asset/data/hangzhou-tracks.json', function (data) {
          const points = [].concat.apply([], data.map(function (track) {
            return track.map(function (seg) {
              return seg.coord.concat([1])
            })
          }))

          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(this.$refs.map)
          // 绘制图表
          myChart.setOption({
            animation: false,
            bmap: {
              center: [120.13066322374, 30.240018034923],
              zoom: 14,
              roam: true
            },
            visualMap: {
              show: false,
              top: 'top',
              min: 0,
              max: 5,
              seriesIndex: 0,
              calculable: true,
              inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
              }
            },
            series: [{
              type: 'heatmap',
              coordinateSystem: 'bmap',
              data: points,
              pointSize: 5,
              blurSize: 6
            }]
          })
          // 添加百度地图插件
          const bmap = myChart.getModel().getComponent('bmap').getBMap()
          bmap.addControl(new BMap.MapTypeControl())
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
