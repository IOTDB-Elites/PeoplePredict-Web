<template>
  <div>
    <baidu-map class="map"
               :center="center"
               :zoom="14"
               :scroll-wheel-zoom="true"
               @click="getPointData">
      <bml-heatmap :data="mapData" :max="maxData" :radius="10">
      </bml-heatmap>
    </baidu-map>

    <el-dialog
      title="一周详情"
      :visible.sync="dialogVisible"
      width="50%">
      <div v-if="pointData === undefined || tableData === []" :style="{textAlign: 'center'}">
        <img src="../../assets/img/loading.gif" width="200"/>
      </div>

      <div v-else>
        <el-table :data="tableData">
          <el-table-column property="pos" label="坐标"></el-table-column>
          <el-table-column property="min" label="最小人数"></el-table-column>
          <el-table-column property="max" label="最大人数"></el-table-column>
          <el-table-column property="avg" label="平均值"></el-table-column>
          <el-table-column property="sum" label="合计"></el-table-column>
        </el-table>

        <bar-chart :x="dataPointList.x" :y="dataPointList.y"></bar-chart>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/babel">
  import BarChart from '../Chart/BarChart.vue'
  import { BmlHeatmap } from 'vue-baidu-map'
  import { mapState, mapActions, mapMutations } from 'vuex'
  import { Dialog, Table, TableColumn } from 'element-ui'

  export default {
    name: 'my-map',
    components: {
      BmlHeatmap,
      BarChart,
      elDialog: Dialog,
      elTable: Table,
      elTableColumn: TableColumn
    },
    data () {
      return {
        center: {
          lng: 108.953,
          lat: 34.23
        },
        dialogVisible: false,
        point: {
          lng: 0,
          lat: 0
        }
      }
    },
    computed: {
      ...mapState('config', {
        configs: state => state.configs,
        mapData: state => state.mapData,
        maxData: state => state.maxData
      }),
      ...mapState('point', {
        statistic: state => state.statistic,
        pointData: state => state.pointData
      }),
      dataPointList: {
        get: function () {
          let x = []
          let y = []
          if (this.pointData === undefined) {
            return {x: [], y: []}
          }
          this.pointData.forEach((point) => {
            x.push(point.month + '-' + point.day)
            y.push(point.val)
          })

          return {
            x: x,
            y: y
          }
        }
      },
      tableData: {
        get: function () {
          return (this.point === undefined || this.statistic === null) ? [] : [{
            pos: '[' + this.point.lng.toFixed(3) + ', ' + this.point.lat.toFixed(3) + ']',
            min: this.statistic.min,
            max: this.statistic.max,
            avg: this.statistic.avg.toFixed(0),
            sum: this.statistic.sum,
          }]
        }
      }
    },
    methods: {
      ...mapActions('point', [
        'fetchPointData'
      ]),
      ...mapMutations('point', [
        'savePointData',
      ]),
      getPointData (e) {
        this.point = e.point
        this.fetchPointData({
          config: {
            month: this.configs.month,
            day: this.configs.day,
            time: this.configs.time,
            lng: this.point.lng.toFixed(3),
            lat: this.point.lat.toFixed(3),
            radius: this.configs.radius
          }
        })
        this.dialogVisible = true
      }
    }
  }
</script>

<style>
  .map {
    width: 100%;
    height: 570px;
  }
</style>
