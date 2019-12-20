<template>

  <div ref="canlendarMap" :style="{width: '100%', height: '500px'}"></div>

</template>

<script type="text/babel">
  import echarts from 'echarts'
  import { mapActions, mapState, mapMutations } from 'vuex'

  export default {
    name: 'tree-map',
    components: {},
    data () {
      return {}
    },
    computed: {
      ...mapState('district', {
        districtTreemap: state => state.districtTreemap
      })
    },
    watch: {
      districtTreemap () {
        this.setEchart()
      }
    },
    methods: {
      setEchart () {
        const myChart = echarts.init(this.$refs.canlendarMap)
        let option = {
          tooltip: {
            formatter: function (info) {
              let value = info.value
              let treePathInfo = info.treePathInfo
              let treePath = []

              for (let i = 1; i < treePathInfo.length; i++) {
                treePath.push(treePathInfo[i].name)
              }

              return [
                '<div class="tooltip-title">' + echarts.format.encodeHTML(treePath.join('/')) + '</div>',
                '人数: ' + echarts.format.addCommas(value),
              ].join('')
            }
          },
          series: [
            {
              name: '行业',
              type: 'treemap',
              visibleMin: 300,
              leafDepth: 2,
              label: {
                show: true,
                formatter: '{b}'
              },
              itemStyle: {
                normal: {
                  borderColor: '#fff'
                }
              },
              levels: [
                {
                  itemStyle: {
                    normal: {
                      borderWidth: 0,
                      gapWidth: 5
                    }
                  }
                },
                {
                  itemStyle: {
                    normal: {
                      gapWidth: 1
                    }
                  }
                },
                {
                  colorSaturation: [0.35, 0.5],
                  itemStyle: {
                    normal: {
                      gapWidth: 1,
                      borderColorSaturation: 0.6
                    }
                  }
                }
              ],
              data: this.districtTreemap
            }
          ]
        }
        myChart.setOption(option)
      }
    },
    mounted () {
      this.setEchart()
    }
  }
</script>
