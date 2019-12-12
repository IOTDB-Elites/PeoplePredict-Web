<template>
  <div class="table-wrapper">
    <el-table
      :data="rankList === undefined ? [] : rankList"
      stripe
      height="250"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="地点"
        width="230">
      </el-table-column>
      <el-table-column
        prop="val"
        label="人数">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  import Vue from 'vue'
  import { Table, TableColumn } from 'element-ui'
  import { mapState } from 'vuex'

  export default {
    name: 'RankTable',
    components: {
      elTable: Table,
      elTableColumn: TableColumn
    },
    data () {
      return {}
    },
    computed: {
      ...mapState('list', {
        rankList: state => state.rankList
      })
    },
    methods: {}
  }
</script>

<!--<style scoped src="./Config.css"></style>-->
