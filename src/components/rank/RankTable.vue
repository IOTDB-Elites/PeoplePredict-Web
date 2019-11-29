<template>
  <div class="table-wrapper">
    <el-table
      :data="tableData"
      stripe
      height="250"
      style="width: 100%">
      <el-table-column
        prop="rank"
        label=""
        width="90">
      </el-table-column>
      <el-table-column
        prop="name"
        label="街道名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="num"
        label="人数">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  import Vue from 'vue'
  import { Table, TableColumn } from 'element-ui'

  export default {
    name: 'RankTable',
    components: {
      elTable: Table,
      elTableColumn: TableColumn
    },
    data () {
      return {
        tableData: [{
          rank: '1',
          name: '北山街',
          num: '3188'
        }, {
          rank: '2',
          name: '灵隐街',
          num: '3021'
        }, {
          rank: '3',
          name: '西溪街',
          num: '2987'
        }, {
          rank: '4',
          name: '翠苑街',
          num: '2666'
        }, {
          rank: '5',
          name: '文新街',
          num: '2199'
        }, {
          rank: '6',
          name: '古荡街',
          num: '1987'
        }, {
          rank: '7',
          name: '西湖街',
          num: '1969'
        }, {
          rank: '8',
          name: '转塘街',
          num: '1567'
        }, {
          rank: '9',
          name: '留下街',
          num: '876'
        }, {
          rank: '10',
          name: '蒋村街',
          num: '776'
        }]
      }
    },
    methods: {}
  }
</script>

<!--<style scoped src="./Config.css"></style>-->
