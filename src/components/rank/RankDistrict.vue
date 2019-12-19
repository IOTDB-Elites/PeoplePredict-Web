<template>
  <div class="table-wrapper">
    <div v-if="districtData.length === 0" :style="{textAlign: 'center'}">
      <img src="../../assets/img/loading.gif" width="200"/>
    </div>
    <div v-else>
      <el-table
        :data="districtData"
        stripe
        height="300"
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="区划"
          width="230">
        </el-table-column>
        <el-table-column
          prop="val"
          label="人数">
        </el-table-column>
      </el-table>
    </div>
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
      ...mapState('config', {
        districtData: state => state.districtData
      })
    },
    methods: {}
  }
</script>
