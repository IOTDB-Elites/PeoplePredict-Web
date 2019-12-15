<template>

  <div ref="barChart" :style="{width: '100%', height: '300px'}"></div>

</template>

<script type="text/babel">

  import { mapState, mapActions } from 'vuex'
  import { store } from '../../main'
  import echarts from 'echarts'

  export default {
    name: 'bar-chart',
    components: {},
    data () {
      return {}
    },
    watch: {
      '$route': 'setEchart',
      y () {
        this.setEchart()
      }
    },
    props: ['x', 'y'],
    computed: {},
    methods: {
      setEchart () {
        let myChart = echarts.init(this.$refs.barChart)
        myChart.setOption({
          color: ['#4e7ede'],
          xAxis: {
            data: this.x
          },
          yAxis: {},
          series: [{
            name: '数量',
            type: 'bar',
            data: this.y,
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
          }]
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
